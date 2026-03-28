const calculateBMI = () => {

    const weightInput = document.getElementById("weight").value;
    const heightInput = document.getElementById("height").value;

    if (weightInput === "" || heightInput === "") {
        document.getElementById("result").innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("result").innerHTML = "กรุณากรอกค่าที่ถูกต้อง";
        return;
    }

    const bmi = weight / (height * height);

    let status = "";

    if (bmi < 18.5) {
        status = "ผอม";
    } else if (bmi < 25) {
        status = "สมส่วน";
    } else {
        status = "อ้วน";
    }

    document.getElementById("result").innerHTML =
        "<b>ผลการคำนวณ</b><br>" +
        "ค่า BMI = " + bmi.toFixed(2) + "<br>" +
        "สถานะ: " + status;
};