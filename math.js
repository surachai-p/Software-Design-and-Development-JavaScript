let result = "";

// ===============================
// ข้อ 1 : คำนวณคะแนนเฉลี่ย 3 วิชา
// ===============================

let score1 = 80;
let score2 = 75;
let score3 = 90;

let average = (score1 + score2 + score3) / 3;

result += "<h2>คะแนนเฉลี่ย</h2>";
result += "คะแนนวิชา 1: " + score1 + "<br>";
result += "คะแนนวิชา 2: " + score2 + "<br>";
result += "คะแนนวิชา 3: " + score3 + "<br>";
result += "คะแนนเฉลี่ย: " + average + "<br><br>";


// ===============================
// ข้อ 2 : คำนวณราคาสินค้ารวม VAT 7%
// ===============================

let productName = "ปากกา";
let price = 100;
let vat = price * 0.07;
let totalPrice = price + vat;

result += "<h2>คำนวณราคาสินค้ารวม VAT 7%</h2>";
result += "ชื่อสินค้า: " + productName + "<br>";
result += "ราคาสินค้า: " + price + " บาท<br>";
result += "VAT 7%: " + vat + " บาท<br>";
result += "ราคารวม VAT: " + totalPrice + " บาท<br>";


// แสดงผลบนหน้าเว็บ
document.getElementById("output").innerHTML = result;