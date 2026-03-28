// --- 1. Function คำนวณค่า BMI ---
function calculateBMI(weight, height) {
    var bmi = weight / Math.pow((height / 100), 2);
    return bmi.toFixed(2);
}

function runBMI() {
    var wStr = document.getElementById("wIn").value;
    var hStr = document.getElementById("hIn").value;

    if (wStr === "" || hStr === "") {
        alert("กรุณากรอกข้อมูลน้ำหนักและส่วนสูง!");
        return;
    }

    var w = Number(wStr);
    var h = Number(hStr);
    var result = calculateBMI(w, h);
    
    console.log("[BMI Report] ผลลัพธ์: " + result);
    document.getElementById("bmi").innerText = "ค่า BMI ของคุณคือ: " + result;
}

// --- 2. Function กล่าวคำทักทายตามอายุ ---
function greet(name, age) {
    var message = ""; 
    if (age < 13) {
        message = "สวัสดีจ้า " + name + " เจ้าเด็กน้อย";
    } else if (age >= 13 && age < 20) {
        message = "สวัสดีค่ะ " + name + " วัยรุ่นสุดเท่";
    } else {
        message = "สวัสดีค่ะ " + name + " คุณผู้ใหญ่ที่น่ารัก";
    }
    return message;
}

function runGreet() {
    var n = document.getElementById("nameIn").value;
    var aStr = document.getElementById("ageIn").value;

    if (n === "" || aStr === "") {
        alert("กรุณากรอกชื่อและอายุ!");
        return;
    }

    var a = Number(aStr);
    var result = greet(n, a);
    
    console.log("[Greeting Report] ข้อความ: " + result);
    document.getElementById("greeting").innerText = result;
}

// --- 3. Function ตรวจสอบรหัสผ่าน ---
function checkPassword(password) {
    if (password.length > 8) {
        return "รหัสผ่านปลอดภัย (ความยาว " + password.length + " ตัวอักษร)";
    } else {
        return "รหัสผ่านไม่ปลอดภัย (สั้นเกินไป)";
    }
}

function runPass() {
    var p = document.getElementById("passIn").value;

    if (p === "") {
        alert("กรุณากรอกรหัสผ่าน!");
        return;
    }

    var result = checkPassword(p);
    
    console.log("[Password Report] สถานะ: " + result);
    document.getElementById("password").innerText = result;
}