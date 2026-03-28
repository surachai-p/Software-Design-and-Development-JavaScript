// ==========================
// ข้อ 1 : ตรวจสอบเลขคู่ / เลขคี่
// ==========================
function checkEvenOdd() {
    let number = 7;

    let resultText = "<b>ตรวจสอบเลขคู่/คี่</b><br>";
    resultText += "ตัวเลข: " + number + "<br>";

    if (number % 2 === 0) {
        resultText += "ผลลัพธ์: เป็นเลขคู่";
    } else {
        resultText += "ผลลัพธ์: เป็นเลขคี่";
    }

    document.getElementById("result").innerHTML = resultText;
}


// ==========================
// ข้อ 2 : ตารางสูตรคูณ
// ==========================
function showMultiplication() {

    let output = "<b>ตารางสูตรคูณแม่ 2 (for loop)</b><br>";

    for (let i = 1; i <= 12; i++) {
        output += "2 x " + i + " = " + (2 * i) + "<br>";
    }

    output += "<br><b>ตารางสูตรคูณแม่ 3 (while loop)</b><br>";

    let j = 1;
    while (j <= 12) {
        output += "3 x " + j + " = " + (3 * j) + "<br>";
        j++;
    }

    document.getElementById("result").innerHTML = output;
}


// ==========================
// ข้อ 3 : นับถอยหลัง 10 → 1
// ==========================
function countDown() {

    let output = "<b>นับถอยหลัง</b><br>";

    for (let i = 10; i >= 1; i--) {
        output += i + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}


// ==========================
// ข้อ 4 : ตรวจสอบช่วงวัย
// ==========================
function checkAgeGroup() {

    let age = 20;
    let message = "<b>ตรวจสอบช่วงวัย</b><br>";
    message += "อายุ: " + age + "<br>";

    if (age <= 12) {
        message += "ช่วงวัย: วัยเด็ก";
    } else if (age <= 19) {
        message += "ช่วงวัย: วัยรุ่น";
    } else {
        message += "ช่วงวัย: วัยผู้ใหญ่";
    }

    document.getElementById("result").innerHTML = message;
}