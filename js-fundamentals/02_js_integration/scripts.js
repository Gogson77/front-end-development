const COLOR_1 = "#026873";
const COLOR_2 = "#F29484";

let containerElement = document.getElementById("main-container");

document.getElementById("button").addEventListener("click", toggleBgColor);

let counter = 0;

function toggleBgColor() {

    counter++;

    if (counter % 2 == 1) {
        containerElement.style.backgroundColor = COLOR_1;
    }
    else {
        containerElement.style.backgroundColor = COLOR_2;
    }
}