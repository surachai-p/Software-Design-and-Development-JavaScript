// การทดลองที่ 2.2

// ข้อที่ 1: คำนวณคะแนนเฉลี่ย 3 วิชา
console.log('--- ข้อที่ 1: คำนวณคะแนนเฉลี่ย ---');

var subject1Score = 80;
var subject2Score = 85;
var subject3Score = 90;

var averageScore = (subject1Score + subject2Score + subject3Score) / 3;

console.log('คะแนนวิชาที่ 1: ' + subject1Score);
console.log('คะแนนวิชาที่ 2: ' + subject2Score);
console.log('คะแนนวิชาที่ 3: ' + subject3Score);
console.log('คะแนนเฉลี่ย: ' + averageScore);

// ข้อที่ 2: คำนวณราคาสินค้ารวม VAT 7%
console.log('--- ข้อที่ 2: คำนวณราคาสินค้า + VAT ---');

var productName = 'สมุดโน้ต';
var productPrice = 100;
var vat = productPrice * 0.07;
var totalPrice = productPrice + vat;

console.log('ชื่อสินค้า: ' + productName);
console.log('ราคาสินค้า: ' + productPrice + ' บาท');
console.log('ค่า VAT 7%: ' + vat + ' บาท');
console.log('ราคารวม: ' + totalPrice + ' บาท');
