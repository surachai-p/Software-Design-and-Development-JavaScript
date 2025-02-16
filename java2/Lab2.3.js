document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkBtn").addEventListener("click", checkEvenOdd);
    showMultiplicationTable2();
    showMultiplicationTable3();
});

// ตรวจสอบเลขคู่หรือเลขคี่
function checkEvenOdd() {
    let num = parseInt(document.getElementById("numberInput").value);

    if (isNaN(num)) {
        document.getElementById("resultCheck").innerText = "⚠ กรุณากรอกตัวเลข";
        return;
    }

    let result = (num % 2 === 0) ? "เป็นเลขคู่" : "เป็นเลขคี่";
    document.getElementById("resultCheck").innerText = `ตัวเลข ${num} ${result}`;
}

// แสดงตารางสูตรคูณแม่ 2 ด้วย for loop
function showMultiplicationTable2() {
    let output = "";
    for (let i = 1; i <= 12; i++) {
        output += `2 x ${i} = ${2 * i}\n`;
    }
    document.getElementById("multiplicationTable2").innerText = output;
}

// แสดงตารางสูตรคูณแม่ 3 ด้วย while loop
function showMultiplicationTable3() {
    let output = "";
    let i = 1;
    while (i <= 12) {
        output += `3 x ${i} = ${3 * i}\n`;
        i++;
    }
    document.getElementById("multiplicationTable3").innerText = output;
}
