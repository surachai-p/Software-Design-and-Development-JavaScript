// ==========================
// ข้อ 1 : คำนวณคะแนนเฉลี่ย
// ==========================

function calculateAverage() {

    let score1 = 80;
    let score2 = 75;
    let score3 = 90;

    let total = score1 + score2 + score3;
    let average = total / 3;

    document.getElementById("result").innerHTML =
        "<b>ผลการคำนวณคะแนนเฉลี่ย</b><br>" +
        "คะแนนวิชาที่ 1: " + score1 + "<br>" +
        "คะแนนวิชาที่ 2: " + score2 + "<br>" +
        "คะแนนวิชาที่ 3: " + score3 + "<br>" +
        "คะแนนรวม: " + total + "<br>" +
        "คะแนนเฉลี่ย: " + average.toFixed(2);
}



// ==========================
// ข้อ 2 : คำนวณราคาสินค้ารวม VAT 7%
// ==========================

function calculateVAT() {

    let productName = "ปากกา";
    let price = 100;
    let vatRate = 0.07;

    let vatAmount = price * vatRate;
    let totalPrice = price + vatAmount;

    document.getElementById("result").innerHTML =
        "<b>ผลการคำนวณราคาสินค้า</b><br>" +
        "ชื่อสินค้า: " + productName + "<br>" +
        "ราคาสินค้า: " + price + " บาท<br>" +
        "VAT 7%: " + vatAmount.toFixed(2) + " บาท<br>" +
        "ราคารวมสุทธิ: " + totalPrice.toFixed(2) + " บาท";
}