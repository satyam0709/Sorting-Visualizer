function Bubble() {
    // Setting complexities
    document.getElementById("Time_Best").innerText = "Ω(N)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            // Voice Message: Announce comparison
            var msg = "Comparing " + div_sizes[j] + " and " + div_sizes[j + 1];
            
            div_update(divs[j], div_sizes[j], "yellow", div_sizes[j], msg); // Pass msg here

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red", div_sizes[j], "Swapping"); // Announce Swap
                div_update(divs[j + 1], div_sizes[j + 1], "red", div_sizes[j + 1], null);

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red", div_sizes[j], null);
                div_update(divs[j + 1], div_sizes[j + 1], "red", div_sizes[j + 1], null);
            }
            div_update(divs[j], div_sizes[j], "blue", div_sizes[j], null);
        }
        div_update(divs[j], div_sizes[j], "green", div_sizes[j], "Sorted " + div_sizes[j]);
    }
    div_update(divs[0], div_sizes[0], "green", div_sizes[0], "Sorting Complete");

    enable_buttons();
}