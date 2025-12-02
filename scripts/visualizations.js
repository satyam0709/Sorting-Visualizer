var speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch (parseInt(array_speed)) {
        case 1: speed = 1; break;
        case 2: speed = 10; break;
        case 3: speed = 100; break;
        case 4: speed = 1000; break;
        case 5: speed = 10000; break;
    }

    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0;

// UPDATED function to accept an optional 'msg' parameter
function div_update(cont, height, color, new_number, msg) {
    window.setTimeout(function () {
        cont.style = `
            margin: 0% ${margin_size}%; 
            width: ${100 / array_size - (2 * margin_size)}%; 
            height: ${height}%; 
            background-color: ${color};
            box-shadow: 0 0 10px ${color}, inset 0 0 10px rgba(0,0,0,0.2); 
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        `;

        var number = cont.querySelector("span");
        if (number) {
            number.textContent = new_number;
        }

// --- VOICE LOGIC ADDED HERE ---
        // Only attempt to speak if a message is passed OR based on color
        if (typeof speak === "function") {
            if (msg) {
                // If the algorithm explicitly sent a message (e.g., "Comparing 5 and 10")
                speak(msg);
            } else {
                // Fallback: Guess the action based on color
                // Red usually implies comparison/swap in these visualizers
                if (color == "red" || color == "#ff0000") {
                    speak("Checking " + new_number);
                }
                // ...
            }
        }

    }, c_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function () {
        if (typeof speak === "function") {
            speak("Sorting Complete");
        }
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
            inp_gen_custom.disabled = false;
            inp_custom.disabled = false;
        }
    }, c_delay += delay_time);
}