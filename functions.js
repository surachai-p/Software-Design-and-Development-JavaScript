
// 1. คำนวณ BMI
function getBMI(w, h) {
    let bmi = w / ((h/100) * (h/100));
    return bmi.toFixed(2);
}

// 2. ทักทายตามช่วงอายุจริง (อ้างอิงเกณฑ์ทั่วไป)
function sayHi(name, age) {
    if (age <= 12) {
        return "สวัสดีจ้ะเด็กชาย/หญิง " + name + " (วัยเด็ก)";
    } else if (age <= 19) {
        return "โย่! ว่าไงวัยรุ่น " + name + " (วัยรุ่น)";
    } else if (age <= 59) {
        return "สวัสดีครับคุณ " + name + " (วัยผู้ใหญ่)";
    } else {
        return "กราบสวัสดีคุณปู่/คุณย่า " + name + " (วัยสูงอายุ)";
    }
}

// 3. ตรวจสอบรหัสผ่าน
function isPassValid(p) {
    return p.length > 8;
}

// --- UI Functions (ส่วนแสดงผล) ---

function runBMI() {
    let weight = document.getElementById('w').value;
    let height = document.getElementById('h').value;
    document.getElementById('res1').innerText = "ค่า BMI ของคุณคือ: " + getBMI(weight, height);
}

function runGreet() {
    let n = document.getElementById('name').value;
    let a = document.getElementById('age').value;
    document.getElementById('res2').innerText = sayHi(n, parseInt(a));
}

function runPass() {
    let p = document.getElementById('pass').value;
    if (isPassValid(p)) {
        document.getElementById('res3').innerText = "รหัสผ่านยาวพอ";
    } else {
        document.getElementById('res3').innerText = "รหัสผ่านต้องมากกว่า 8 ตัว";
    }
}