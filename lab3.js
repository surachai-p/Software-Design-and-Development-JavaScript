// Arrow Function คำนวณ BMI
const calcBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(2));
};

// Arrow Function บอกสถานภาพ BMI
const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'ผอม';
    if (bmi < 24.9) return 'สมส่วน';
    return 'อ้วน';
};

// ฟังก์ชันจัดการการคำนวณและแสดงผลลัพธ์
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const output = document.getElementById('output');

    if (!weight || !height || weight <= 0 || height <= 0) {
        output.className = 'error';
        output.innerHTML = 'กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง';
        return;
    }

    const bmi = calcBMI(weight, height);
    const status = getBMIStatus(bmi);

    output.className = '';
    output.innerHTML = `ผลลัพธ์: BMI = ${bmi} (${status})`;
}
