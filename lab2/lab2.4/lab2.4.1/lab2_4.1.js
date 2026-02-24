// ==========================
// ข้อ 1 : คำนวณ BMI
// ==========================
function calculateBMI() {

    let weight = 60;   // กิโลกรัม
    let height = 1.65; // เมตร

    let bmi = weight / (height ** 2);

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
        "<b>ผลการคำนวณ BMI</b><br>" +
        "น้ำหนัก: " + weight + " กก.<br>" +
        "ส่วนสูง: " + height + " เมตร<br>" +
        "BMI: " + bmi.toFixed(2) + "<br>" +
        "อยู่ในเกณฑ์: " + category;
}


// ==========================
// ข้อ 2 : ทักทายตามอายุ
// ==========================
function greetPerson() {

    let name = "สุธีมนต์";
    let age = 19;

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
}


// ==========================
// ข้อ 3 : ตรวจสอบรหัสผ่าน
// ==========================
function checkPassword() {

    let password = "12345678";

    let message = "";

    if (password.length > 8) {
        message = "รหัสผ่านปลอดภัย (มากกว่า 8 ตัวอักษร)";
    } else {
        message = "รหัสผ่านสั้นเกินไป";
    }

    document.getElementById("result").innerHTML =
        "<b>ผลการตรวจสอบรหัสผ่าน</b><br>" +
        "รหัสผ่าน: " + password + "<br>" +
        message;
}