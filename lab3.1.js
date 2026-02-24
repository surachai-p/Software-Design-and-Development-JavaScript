// Arrow Function สำหรับคำนวณ BMI
const calculateBMI = () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("result").innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters);
    let status = "";

    if (bmi < 18.5) {
        status = "ผอม";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "สมส่วน";
    } else {
        status = "อ้วน";
    }

    document.getElementById("result").innerHTML =
        "ค่า BMI ของคุณคือ " + bmi.toFixed(2) + " (" + status + ")";
};