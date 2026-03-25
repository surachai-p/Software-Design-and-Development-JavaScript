// --- ส่วนของ Logic (Arrow Functions) ---

// 1. ฟังก์ชันคำนวณค่า BMI
const calcBMI = (w, h) => (w / ((h / 100) ** 2)).toFixed(2);

// 2. ฟังก์ชันวิเคราะห์ผลตามค่า BMI (เกณฑ์พื้นฐาน)
const analyzeBMI = (bmi) => {
    if (bmi < 18.5) return "ผอม";
    if (bmi >= 18.5 && bmi <= 22.9) return "สมส่วน";
    if (bmi >= 23.0 && bmi <= 24.9) return "น้ำหนักเกิน";
    if (bmi >= 25.0 && bmi <= 29.9) return "อ้วน";
    return "อ้วนมาก";
};

// --- ส่วนจัดการ Event ---

const checkBody = () => {
    // ดึงค่าจากช่อง Input
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;

    // ตรวจสอบว่ากรอกข้อมูลหรือยัง
    if (w === "" || h === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    // ประมวลผล
    const bmiValue = calcBMI(w, h);
    const status = analyzeBMI(bmiValue);

    // แสดงผลลงในหน้าเว็บ
    document.getElementById('result').innerHTML = 
        `ค่า BMI ของคุณคือ: ${bmiValue} <br> ผลวิเคราะห์: ${status}`;
};