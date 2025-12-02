function Insertion() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow", div_sizes[j], "Selecting " + div_sizes[j]);

        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "red", div_sizes[i], "Comparing " + div_sizes[i] + " with " + key);
            div_update(divs[i + 1], div_sizes[i + 1], "red", div_sizes[i + 1], null);

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "red", div_sizes[i], "Moving " + div_sizes[i]);
            div_update(divs[i + 1], div_sizes[i + 1], "red", div_sizes[i + 1], null);

            div_update(divs[i], div_sizes[i], "blue", div_sizes[i], null);
            if (i == (j - 1)) {
                div_update(divs[i + 1], div_sizes[i + 1], "yellow", div_sizes[i + 1], null);
            } else {
                div_update(divs[i + 1], div_sizes[i + 1], "blue", div_sizes[i + 1], null);
            }
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(divs[t], div_sizes[t], "green", div_sizes[t], null);
        }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "green", div_sizes[j - 1], null);

    enable_buttons();
}