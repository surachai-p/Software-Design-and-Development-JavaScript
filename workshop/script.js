// script.js (เฉพาะแบบฝึกหัด 2.3)

// ตรวจเลขคู่หรือเลขคี่
function isEvenOrOdd(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) return 'ไม่ใช่ตัวเลขที่ถูกต้อง';
  return (n % 2 === 0) ? 'เลขคู่' : 'เลขคี่';
}

function handleEvenOdd() {
  const el = document.getElementById('evenInput');
  const n = parseInt(el.value, 10);
  const res = isNaN(n) ? 'กรุณากรอกตัวเลข' : isEvenOrOdd(n);
  document.getElementById('evenResult').textContent = res;
}

// ตารางสูตรคูณ แม่ 2 (for)
function showMult2() {
  let out = '';
  for (let i = 1; i <= 12; i++) {
    out += `2 x ${i} = ${2 * i}\n`;
  }
  document.getElementById('multResult').textContent = out;
}

// ตารางสูตรคูณ แม่ 3 (while)
function showMult3While() {
  let out = '';
  let i = 1;
  while (i <= 12) {
    out += `3 x ${i} = ${3 * i}\n`;
    i++;
  }
  document.getElementById('multResult').textContent = out;
}

// นับถอยหลังจาก 10 ถึง 1
function countdown10to1() {
  const parts = [];
  for (let k = 10; k >= 1; k--) parts.push(k);
  document.getElementById('countdownResult').textContent = parts.join(' → ');
}

// ตรวจช่วงวัยตามอายุ
function checkAgeRange(age) {
  if (typeof age !== 'number' || age < 0) return 'อายุไม่ถูกต้อง';
  if (age <= 12) return 'วัยเด็ก';
  if (age <= 17) return 'วัยรุ่น';
  if (age <= 59) return 'วัยผู้ใหญ่';
  return 'วัยสูงอายุ';
}

function handleCheckAge() {
  const n = parseInt(document.getElementById('ageInput').value, 10);
  const res = isNaN(n) ? 'กรุณากรอกอายุ' : checkAgeRange(n);
  document.getElementById('ageResult').textContent = res;
}

// ผูกปุ่มเมื่อ DOM โหลดแล้ว
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnEven').addEventListener('click', handleEvenOdd);
  document.getElementById('btnMult2').addEventListener('click', showMult2);
  document.getElementById('btnMult3').addEventListener('click', showMult3While);
  document.getElementById('btnCountdown').addEventListener('click', countdown10to1);
  document.getElementById('btnCheckAge').addEventListener('click', handleCheckAge);
});
