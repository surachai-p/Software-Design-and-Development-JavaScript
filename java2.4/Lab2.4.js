document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
});

// ฟังก์ชันคำนวณ BMI
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weightInput").value);
    let height = parseFloat(document.getElementById("heightInput").value) / 100; // แปลง cm เป็น m

    // ตรวจสอบค่าที่ป้อน
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "⚠ กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง";
        return;
    }

    // คำนวณค่า BMI
    let bmi = weight / (height * height);
    let category = getBMICategory(bmi);

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = `ค่า BMI ของคุณ: ${bmi.toFixed(2)} (${category})`;
}

// ฟังก์ชันตรวจสอบช่วง BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) return "น้ำหนักน้อย / ผอม";
    if (bmi < 25) return "ปกติ";
    if (bmi < 30) return "น้ำหนักเกิน";
    return "โรคอ้วน";
}
