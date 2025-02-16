document.addEventListener("DOMContentLoaded", function () {
    countdownForLoop();
    countdownWhileLoop();
});

// นับถอยหลังด้วย for loop
function countdownForLoop() {
    let output = "";
    for (let i = 10; i >= 1; i--) {
        output += i + "\n";
    }
    document.getElementById("countdownFor").innerText = output;
}

// นับถอยหลังด้วย while loop
function countdownWhileLoop() {
    let output = "";
    let i = 10;
    while (i >= 1) {
        output += i + "\n";
        i--;
    }
    document.getElementById("countdownWhile").innerText = output;
}
