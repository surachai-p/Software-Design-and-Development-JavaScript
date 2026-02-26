const calculateBMI = () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (!weight || !heightCm) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนครับ");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    let status = "";
    if (bmi < 18.5) {
        status = "ผอม";
    } else if (bmi <= 22.9) {
        status = "สมส่วน (ปกติ)";
    } else {
        status = "อ้วน / น้ำหนักเกิน";
    }

    document.getElementById('bmi_value').innerHTML = `ค่า BMI: ${bmi}`;
    document.getElementById('bmi_status').innerHTML = `เกณฑ์: <b>${status}</b>`;
};

// 2. จัดการ Event การคลิกปุ่ม
document.getElementById('btnCompute').addEventListener('click', calculateBMI);