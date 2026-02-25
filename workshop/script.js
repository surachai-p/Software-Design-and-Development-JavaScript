// กำหนดค่าตัวแปรเริ่มต้น
let x = 10;
let y = 5;

// การดำเนินการพื้นฐาน
let sum = x + y;      // บวก: 10 + 5 = 15
let diff = x - y;     // ลบ: 10 - 5 = 5
let product = x * y;  // คูณ: 10 * 5 = 50
let quotient = x / y; // หาร: 10 / 5 = 2
let remainder = x % y; // หารเอาเศษ: 10 % 5 = 0 (หาร 5 ลงตัว)

// การเพิ่ม/ลดค่าทีละ 1
let counter = 1;
counter++;            // เพิ่มค่าทีละ 1: counter = 2
counter--;            // ลดค่าทีละ 1: counter = 1

// การยกกำลัง
let squared = x ** 2;  // 10 ยกกำลัง 2 = 100
let cubed = x ** 3;    // 10 ยกกำลัง 3 = 1000

// การใช้ตัวดำเนินการร่วมกับการกำหนดค่า
let number = 5;
number += 3;          // เท่ากับ number = number + 3
number -= 2;          // เท่ากับ number = number - 2
number *= 4;          // เท่ากับ number = number * 4
number /= 2;          // เท่ากับ number = number / 2

// ---------- แบบฝึกหัด: ตัวแปรนักศึกษา และการคำนวณพื้นฐาน ----------
// ประกาศตัวแปรเก็บข้อมูลนักศึกษา
const studentId = '64000001';
const studentName = 'ธนกฤต พรรณเผือก';
let midtermScore = 78; // คะแนนสอบกลางภาค
let finalScore = 86;   // คะแนนสอบปลายภาค

// สร้าง Object สำหรับเก็บข้อมูลนักศึกษา
const student = {
	id: studentId,
	name: studentName,
	major: 'วิทยาการคอมพิวเตอร์',
	average: (midtermScore + finalScore) / 2
};

console.log('Student:', student);

// ฟังก์ชันสำหรับปุ่มที่ 3: แสดงเวลาปัจจุบัน
function hello3() {
	const now = new Date();
	alert('เวลาปัจจุบัน: ' + now.toLocaleTimeString('th-TH'));
}

// คำนวณคะแนนเฉลี่ยจาก 3 วิชา (ใช้กับ inputs ในหน้า)
function calculateAverage() {
	const s1 = parseFloat(document.getElementById('score1')?.value) || 0;
	const s2 = parseFloat(document.getElementById('score2')?.value) || 0;
	const s3 = parseFloat(document.getElementById('score3')?.value) || 0;
	const avg = (s1 + s2 + s3) / 3;
	const text = 'คะแนนเฉลี่ย: ' + avg.toFixed(2);
	const el = document.getElementById('avgResult');
	if (el) el.textContent = text;
	alert(text);
	console.log('Average:', { s1, s2, s3, avg });
}

// คำนวณราคาสินค้ารวม VAT 7%
function calculateVAT() {
	const name = document.getElementById('productName')?.value || '(ไม่มีชื่อ)';
	const price = parseFloat(document.getElementById('productPrice')?.value) || 0;
	const vat = price * 0.07;
	const total = price + vat;
	const text = `${name} ราคาก่อน VAT: ${price.toFixed(2)} บาท, VAT 7%: ${vat.toFixed(2)} บาท, รวม: ${total.toFixed(2)} บาท`;
	const el = document.getElementById('vatResult');
	if (el) el.textContent = text;
	alert(text);
	console.log('VAT:', { name, price, vat, total });
}

// ผูกปุ่มเมื่อ DOM โหลดแล้ว
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('btnAvg')?.addEventListener('click', calculateAverage);
	document.getElementById('btnVat')?.addEventListener('click', calculateVAT);
});
