function Quick() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start]; //make the first element as pivot element.
    div_update(divs[start], div_sizes[start], "yellow", div_sizes[start], "Pivot is " + piv);

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (div_sizes[j] < piv) {
            div_update(divs[j], div_sizes[j], "yellow", div_sizes[j], "Comparing " + div_sizes[j] + " with pivot " + piv);

            div_update(divs[i], div_sizes[i], "red", div_sizes[i], null);
            div_update(divs[j], div_sizes[j], "red", div_sizes[j], null);

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "red", div_sizes[i], "Swapping " + div_sizes[i] + " and " + div_sizes[j]);
            div_update(divs[j], div_sizes[j], "red", div_sizes[j], null);

            div_update(divs[i], div_sizes[i], "blue", div_sizes[i], null);
            div_update(divs[j], div_sizes[j], "blue", div_sizes[j], null);

            i += 1;
        }
    }
    div_update(divs[start], div_sizes[start], "red", div_sizes[start], null);
    div_update(divs[i - 1], div_sizes[i - 1], "red", div_sizes[i - 1], null);

    var temp = div_sizes[start]; //put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "red", div_sizes[start], "Moving pivot to correct position");
    div_update(divs[i - 1], div_sizes[i - 1], "red", div_sizes[i - 1], null);

    for (var t = start; t <= i; t++) {
        div_update(divs[t], div_sizes[t], "green", div_sizes[t], null);
    }

    return i - 1; //return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
        quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
    }
}