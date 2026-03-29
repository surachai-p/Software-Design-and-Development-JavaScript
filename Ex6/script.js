
//หาค่า BMI แบบ Arrow Function
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
    alert("ค่า BMI ของคุณคือ: " + bmi.toFixed(2));
}

//ทักทายตามอายุ แบบ Arrow Function
const getGreeting = (age) => {
    if (age < 0) {
        return "อายุไม่ถูกต้อง";
    } else if (age <= 12) {
        return "สวัสดีเด็กน้อย!";
    } else if (age <= 17) {
        return "สวัสดีวัยรุ่น!";
    } else if (age <= 59) {
        return "สวัสดีผู้ใหญ่!";
    } else {
        return "สวัสดีคุณปู่คุณย่า!";
    }

}

document.getElementById("btnFor2").onclick = function() {
    var age = parseInt(document.getElementById("num").value);
    if (isNaN(age)) {
        alert("กรุณาใส่อายุที่ถูกต้อง");
        return;
    }
    var greeting = getGreeting(age);
    alert(greeting);
}





//ตรวจสอบความยาวรหัสเกิน 8 ตัวมั้ย แบบ Arrow Function
const Cpasslength = (password) => {
    if (password.length > 8) {
        return "รหัสผ่านยาวเกิน 8 ตัว";
    } else {
        return "รหัสผ่านไม่ถึงหรือเท่ากับ 8 ตัว";
    }
}

document.getElementById("btnCheck").onclick = function() {
    var password = document.getElementById("password").value;
    var result = Cpasslength(password);
    alert(result);
}