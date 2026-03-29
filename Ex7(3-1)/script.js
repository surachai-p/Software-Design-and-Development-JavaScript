
//หาค่า BMI แบบ Arrow Function แสดง อ้วน, ผอม หรือ สมส่วน 
const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // แปลงส่วนสูงเป็นเมตร
    return weight / (heightInMeters * heightInMeters); // คำนวณค่า BMI
}

document.getElementById("btn").onclick = function() {
    var weight = parseFloat(document.getElementById("num1").value);
    var height = parseFloat(document.getElementById("num2").value);
    if (isNaN(weight) || isNaN(height)) {
        alert("กรุณาใส่ข้อมูลที่ถูกต้อง");
        return;
    }
    var bmi = calculateBMI(weight, height);
    var category = "";
    if (bmi < 18.5) {
        category = "ผอม";
    } else if (bmi < 25) {
        category = "สมส่วน";
    } else {
        category = "อ้วน";
    }
    alert("ค่า BMI ของคุณคือ: " + bmi.toFixed(2) + " (" + category + ")");
}