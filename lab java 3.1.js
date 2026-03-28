// 1. Arrow Function สำหรับคำนวณตัวเลข BMI
const calculateBMI = (weight, height) => {
    const bmi = weight / Math.pow((height / 100), 2);
    return bmi.toFixed(2);
};

// 2. Arrow Function สำหรับแปลผลเกณฑ์สุขภาพ
const interpretBMI = (bmiValue) => {
    if (bmiValue < 18.5) return "ผอม";
    if (bmiValue >= 18.5 && bmiValue < 23) return "ปกติ";
    if (bmiValue >= 23 && bmiValue < 25) return "น้ำหนักเกิน";
    if (bmiValue >= 25 && bmiValue < 30) return "อ้วน(ระดับ 1)";
    return "อ้วนมาก(ระดับ 2)";
};

// 3. Arrow Function หลักที่ทำงานเมื่อกดปุ่ม
const runBMI = () => {
    const wStr = document.getElementById("wIn").value;
    const hStr = document.getElementById("hIn").value;

    if (wStr === "" || hStr === "") {
        alert("กรุณากรอกข้อมูลน้ำหนักและส่วนสูง!");
        return;
    }

    const w = Number(wStr);
    const h = Number(hStr);
    const bmiResult = calculateBMI(w, h);
    const resultStatus = interpretBMI(Number(bmiResult));

    console.log(`[BMI Report] ค่าที่ได้: ${bmiResult} | เกณฑ์: ${resultStatus}`);

    
    document.getElementById("bmi").innerHTML = 
        "ค่า BMI ของคุณคือ: <b>" + bmiResult + "</b><br>" +
        "เกณฑ์สุขภาพของคุณคือ: <span style='color: #e67e22;'>" + resultStatus + "</span>";
};