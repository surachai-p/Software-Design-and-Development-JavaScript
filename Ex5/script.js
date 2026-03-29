
//หาค่า BMI
document.getElementById("btn").onclick = function() {
    var weight = 55; // น้ำหนักเป็นกิโลกรัม
    var height = 165; // ส่วนสูงเป็นเซนติเมตร
    var heightInMeters = height / 100; // แปลงส่วนสูงเป็นเมตร
    var bmi = weight / (heightInMeters * heightInMeters); // คำนวณค่า BMI
    alert("ค่า BMI ของคุณคือ: " + bmi.toFixed(2)); // แสดงผลลัพธ์โดยปัดทศนิยม 2 ตำแหน่ง
}
    
//ทักทายตามอายุ
document.getElementById("btnFor2").onclick = function() {
    var age = parseInt(document.getElementById("num").value);
    if (isNaN(age)) {
        alert("กรุณาใส่อายุที่ถูกต้อง");
        return;
    }
    var greeting = "";
    if (age < 0) {
        greeting = "อายุไม่ถูกต้อง";
    } else if (age <= 12) {
        greeting = "สวัสดีเด็กน้อย!";
    } else if (age <= 17) {
        greeting = "สวัสดีวัยรุ่น!";
    } else if (age <= 59) {
        greeting = "สวัสดีผู้ใหญ่!";
    } else {
        greeting = "สวัสดีคุณปู่คุณย่า!";
    }
    alert(greeting);
}


//ตรวจสอบความยาวรหัสเกิน 8 ตัวมั้ย
document.getElementById("btnCheck").onclick = function() {
    var password = document.getElementById("password").value;
    if (password.length > 8) {
        alert("รหัสผ่านยาวเกิน 8 ตัว");
    } else {
        alert("รหัสผ่านไม่ถึงหรือเท่ากับ 8 ตัว");
    }
}
