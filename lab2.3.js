function runProgram() {

    // ตรวจสอบเลขคู่หรือคี่
    let number = 7;
    let result = (number % 2 === 0) ? "เลขคู่" : "เลขคี่";

    // ตารางสูตรคูณแม่ 2
    let table2 = "";
    for (let i = 1; i <= 12; i++) {
        table2 += "2 x " + i + " = " + (2 * i) + "\n";
    }

    let table3 = "";
    let i = 1;
    while (i <= 12) {
        table3 += "3 x " + i + " = " + (3 * i) + "\n";
        i++;
    }

    // นับถอยหลัง
    let countdown = "";
    for (let i = 10; i >= 1; i--) {
        countdown += i + " ";
    }

    // ตรวจสอบช่วงวัย
    let age = 20;
    let ageGroup;
    if (age <= 12) {
        ageGroup = "วัยเด็ก";
    } else if (age <= 18) {
        ageGroup = "วัยรุ่น";
    } else {
        ageGroup = "วัยผู้ใหญ่";
    }

    const outputEl = document.getElementById("output");
    const outputText =
        "ผลตรวจเลข: " + result +
        "\n\nสูตรคูณแม่ 2:\n" + table2 +
        "\n\nสูตรคูณแม่ 3:\n" + table3 +
        "\n\nนับถอยหลัง:\n" + countdown +
        "\n\nช่วงวัย: " + ageGroup;
    outputEl.innerText = outputText;
    outputEl.style.whiteSpace = "pre-wrap";
}