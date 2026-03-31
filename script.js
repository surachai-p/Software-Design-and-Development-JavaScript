// ==========================================
// 📝 ส่วนที่ 1: การสร้างฟังก์ชันหลัก (Core Functions)
// สร้างไว้เพื่อรับค่าเข้า (Parameters) และส่งค่าออก (Return)
// ==========================================

// 1. ฟังก์ชันคำนวณ BMI
function calculateBMI(weight, heightCm) {
    let heightM = heightCm / 100; // แปลงซม. เป็นเมตร
    let bmi = weight / (heightM * heightM);
    return bmi.toFixed(2); // ส่งค่ากลับเป็นทศนิยม 2 ตำแหน่ง
}

// 2. ฟังก์ชันสร้างคำทักทายตามอายุ
function getGreetingMessage(name, age) {
    if (age < 18) {
        return `สวัสดีจ้ะน้อง ${name} 👧👦`;
    } else if (age < 60) {
        return `สวัสดีครับ/ค่ะ คุณ ${name} 👨👩`;
    } else {
        return `สวัสดีครับ/ค่ะ คุณลุง/คุณป้า ${name} 👴👵`;
    }
}

// 3. ฟังก์ชันตรวจสอบความยาวรหัสผ่าน
function isPasswordSecure(password) {
    // return ค่าเป็น Boolean (true / false)
    return password.length > 8; 
}


// ==========================================
// 📝 ส่วนที่ 2: ฟังก์ชันจัดการหน้าเว็บ (UI Handlers)
// ทำหน้าที่ดึงข้อมูลจากหน้าจอ ส่งไปให้ฟังก์ชันหลัก แล้วเอาผลลัพธ์มาโชว์
// ==========================================

function handleBMI() {
    let weight = parseFloat(document.getElementById('input-weight').value);
    let height = parseFloat(document.getElementById('input-height').value);
    
    // ป้องกันกรณีผู้ใช้กดคำนวณโดยไม่กรอกตัวเลข
    if (!weight || !height) {
        document.getElementById('result-bmi').innerText = "กรุณากรอกข้อมูลให้ครบถ้วน";
        return;
    }

    // เรียกใช้ฟังก์ชัน calculateBMI ที่เราสร้างไว้
    let myBMI = calculateBMI(weight, height);
    document.getElementById('result-bmi').innerHTML = `ค่า BMI ของคุณคือ: <strong style="color:#3b82f6;">${myBMI}</strong>`;
}

function handleGreeting() {
    let name = document.getElementById('input-name').value;
    let age = parseInt(document.getElementById('input-age').value);

    if (name === "" || isNaN(age)) {
        document.getElementById('result-greeting').innerText = "กรุณากรอกชื่อและอายุ";
        return;
    }

    // เรียกใช้ฟังก์ชัน getGreetingMessage
    let message = getGreetingMessage(name, age);
    document.getElementById('result-greeting').innerText = message;
}

function handlePassword() {
    let password = document.getElementById('input-password').value;
    
    // เรียกใช้ฟังก์ชัน isPasswordSecure
    let isSecure = isPasswordSecure(password);
    
    let resultBox = document.getElementById('result-password');
    if (isSecure) {
        resultBox.innerHTML = `<span style="color: #10b981;">✅ รหัสผ่านปลอดภัย (ยาวกว่า 8 ตัวอักษร)</span>`;
    } else {
        resultBox.innerHTML = `<span style="color: #ef4444;">❌ รหัสผ่านสั้นเกินไป (ต้องมากกว่า 8 ตัวอักษร)</span>`;
    }
}