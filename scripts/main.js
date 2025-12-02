var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
var inp_gen_custom = document.getElementById("a_custom_generate");
var inp_custom = document.getElementById("a_custom");
var butts_algos = document.querySelectorAll(".algos button");
var refresh = document.getElementById("refresh");
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");


var isVoiceOn = false;
var voiceBtn = document.getElementById("voice_btn");
var synth = window.speechSynthesis;

if(voiceBtn) {
    voiceBtn.addEventListener("click", function() {
        isVoiceOn = !isVoiceOn;
        if (isVoiceOn) {
            voiceBtn.innerHTML = "🔊 Voice: ON";
            voiceBtn.classList.add("active");
            speak("Voice Assistant Enabled");
        } else {
            voiceBtn.innerHTML = "🔇 Voice: OFF";
            voiceBtn.classList.remove("active");
            synth.cancel(); 
        }
    });
}

// --- ADD THIS VARIABLE AT THE TOP WITH YOUR OTHER VARS ---
var lastSpeakTime = 0; 

// --- REPLACE YOUR EXISTING SPEAK FUNCTION WITH THIS ---
function speak(text) {
    var speedVal = parseInt(inp_aspeed.value);
    
    // Safety check
    if (!isVoiceOn || !synth) return;

    // 1. SPEED LIMIT: If speed > 1, skip detailed/long messages
    // This prevents the voice from trying to rap at 500 words per minute
    if (text.length > 20 && speedVal > 1) {
        return; 
    }

    // 2. TIME THROTTLE: This is what you are missing.
    // If we spoke less than 200ms ago, SHUT UP. This keeps it snappy.
    var now = Date.now();
    if (now - lastSpeakTime < 200) {
        return;
    }

    // 3. Cancel previous speech immediately
    if (synth.speaking) {
        synth.cancel();
    }

    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.5; // Keep it fast
    synth.speak(utterance);
    
    lastSpeakTime = now; // Reset the timer
}


refresh.onclick = function() { location.reload(); };
inp_gen.addEventListener("click", generate_random_array);
inp_gen_custom.addEventListener("click", generate_custom_array);
inp_as.addEventListener("input", update_array_size);

function generate_random_array() {
    speak("Generating random array");
    cont.innerHTML = "";
    div_sizes = [];
    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        create_div(i, div_sizes[i]);
    }
}

function generate_custom_array() {
    cont.innerHTML = "";
    let custom_values = inp_custom.value.split(",").map(Number).filter(val => !isNaN(val) && val > 0);
    if (custom_values.length === 0) {
        alert("Enter valid numbers separated by commas.");
        return;
    }
    speak("Generating custom array");
    array_size = custom_values.length;
    inp_as.value = array_size; 
    div_sizes = custom_values;
    const scale_factor = 0.75; 
    for (var i = 0; i < array_size; i++) {
        create_div(i, div_sizes[i] * scale_factor);
    }
}

function create_div(i, size) {
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style = `
        margin: 0% ${margin_size}%; 
        background-color: #e8da5f; 
        width: ${100 / array_size - (2 * margin_size)}%; 
        height: ${size}%; 
        position: relative;`
        ;
    

    var number = document.createElement("span");
    number.textContent = Math.floor(size); 
    divs[i].appendChild(number);
}

function update_array_size() {
    array_size = inp_as.value;
    generate_random_array();
}

window.onload = update_array_size;


for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}


function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function runalgo() {
    disable_buttons();
    this.classList.add("butt_selected");
    speak("Starting " + this.innerHTML + " Sort");
    switch (this.innerHTML) {
        case "Bubble": Bubble(); break;
        case "Selection": Selection_sort(); break;
        case "Insertion": Insertion(); break;
        case "Merge": Merge(); break;
        case "Quick": Quick(); break;
        case "Heap": Heap(); break;
        case "Counting": CountingSort(); break;
        case "Tim": Timsort(); break;
    }
}