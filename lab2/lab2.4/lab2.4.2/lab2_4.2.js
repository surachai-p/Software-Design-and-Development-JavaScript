// ==========================
// ข้อ 1 : BMI (Arrow Function)
// ==========================
const calculateBMI = () => {

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("result").innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    const bmi = weight / (height ** 2);

    let category = "";

    if (bmi < 18.5) {
        category = "น้ำหนักต่ำกว่าเกณฑ์";
    } else if (bmi < 24.9) {
        category = "น้ำหนักปกติ";
    } else if (bmi < 29.9) {
        category = "น้ำหนักเกิน";
    } else {
        category = "โรคอ้วน";
    }

    document.getElementById("result").innerHTML =
        "<b>ผล BMI</b><br>" +
        "BMI: " + bmi.toFixed(2) + "<br>" +
        "อยู่ในเกณฑ์: " + category;
};



// ==========================
// ข้อ 2 : ทักทายตามอายุ
// ==========================
const greetPerson = () => {

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);

    if (!name || !age) {
        document.getElementById("result").innerHTML = "กรุณากรอกชื่อและอายุ";
        return;
    }

    let message = "";

    if (age <= 12) {
        message = "สวัสดีเด็กน้อย " + name;
    } else if (age <= 19) {
        message = "สวัสดีวัยรุ่น " + name;
    } else {
        message = "สวัสดีคุณ " + name;
    }

    document.getElementById("result").innerHTML =
        "<b>ข้อความทักทาย</b><br>" + message;
};



// ==========================
// ข้อ 3 : ตรวจสอบรหัสผ่าน
// ==========================
const checkPassword = () => {

    const password = document.getElementById("password").value;

    if (!password) {
        document.getElementById("result").innerHTML = "กรุณากรอกรหัสผ่าน";
        return;
    }

    const message = password.length > 8
        ? "รหัสผ่านปลอดภัย (มากกว่า 8 ตัวอักษร)"
        : "รหัสผ่านสั้นเกินไป (ต้องมากกว่า 8 ตัวอักษร)";

    document.getElementById("result").innerHTML =
        "<b>ผลการตรวจสอบรหัสผ่าน</b><br>" + message;
};