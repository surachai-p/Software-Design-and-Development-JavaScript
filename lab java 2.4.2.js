// --- 1. Arrow Function คำนวณค่า BMI ---
const calculateBMI = (weight, height) => {
    const bmi = weight / Math.pow((height / 100), 2);
    return bmi.toFixed(2);
};

const runBMI = () => {
    const wStr = document.getElementById("wIn").value;
    const hStr = document.getElementById("hIn").value;

    if (wStr === "" || hStr === "") {
        alert("กรุณากรอกข้อมูลน้ำหนักและส่วนสูง!");
        console.log("BMI: ข้อมูลไม่ครบ");
        return;
    }

    const w = Number(wStr);
    const h = Number(hStr);
    const result = calculateBMI(w, h);
    
    console.log(`[BMI Report] ผลลัพธ์: ${result}`);
    document.getElementById("bmi").innerText = "ค่า BMI ของคุณคือ: " + result;
};

// --- 2. Arrow Function กล่าวคำทักทายตามอายุ ---
const greet = (name, age) => {
    let message = ""; 
    if (age < 13) {
        message = "สวัสดีจ้า " + name + " เจ้าเด็กน้อย";
    } else if (age >= 13 && age < 20) {
        message = "สวัสดีค่ะ " + name + " วัยรุ่นสุดเท่";
    } else {
        message = "สวัสดีค่ะ " + name + " คุณผู้ใหญ่ที่น่ารัก";
    }
    return message;
};

const runGreet = () => {
    const n = document.getElementById("nameIn").value;
    const aStr = document.getElementById("ageIn").value;

    if (n === "" || aStr === "") {
        alert("กรุณากรอกชื่อและอายุ!");
        console.log("Greeting: ข้อมูลไม่ครบ");
        return;
    }

    const a = Number(aStr);
    const result = greet(n, a);
    
    console.log(`[Greeting Report] ข้อความ: ${result}`);
    document.getElementById("greeting").innerText = result;
};

// --- 3. Arrow Function ตรวจสอบรหัสผ่าน ---
const checkPassword = (password) => {
    if (password.length > 8) {
        return "รหัสผ่านปลอดภัย (ความยาว " + password.length + " ตัวอักษร)";
    } else {
        return "รหัสผ่านไม่ปลอดภัย (สั้นเกินไป)";
    }
};

const runPass = () => {
    const p = document.getElementById("passIn").value;

    if (p === "") {
        alert("กรุณากรอกรหัสผ่าน!");
        console.log("Password: ยังไม่ได้กรอกรหัส");
        return;
    }

    const result = checkPassword(p);
    
    console.log(`[Password Report] สถานะ: ${result}`);
    document.getElementById("password").innerText = result;
};