// ==========================================
// 📝 แบบทดสอบ 2.4.2: Arrow Functions Logic
// ==========================================

// 1. คำนวณ BMI แบบบรรทัดเดียว (Implicit Return)
const getBMI = (w, h) => (w / ((h / 100) ** 2)).toFixed(2);

// 2. ทักทายตามช่วงอายุจริง
const getGreetMessage = (name, age) => {
    if (age <= 12) return `สวัสดีจ้ะเด็กชาย/หญิง ${name} (วัยเด็ก)`;
    if (age <= 19) return `โย่! ว่าไงวัยรุ่น ${name} (วัยรุ่น)`;
    if (age <= 59) return `สวัสดีครับคุณ ${name} (วัยผู้ใหญ่)`;
    return `กราบสวัสดีท่าน ${name} (วัยสูงอายุ)`;
};

// 3. ตรวจสอบรหัสผ่าน (คืนค่า true/false)
const isPassValid = pass => pass.length > 8;



const displayBMI = () => {
    const weight = document.getElementById('w').value;
    const height = document.getElementById('h').value;
    document.getElementById('res1').innerText = "ค่า BMI คือ: " + getBMI(weight, height);
};

const displayGreet = () => {
    const n = document.getElementById('name').value;
    const a = document.getElementById('age').value;
    document.getElementById('res2').innerText = getGreetMessage(n, parseInt(a));
};

const displayPass = () => {
    const p = document.getElementById('pass').value;
    document.getElementById('res3').innerText = isPassValid(p) 
        ? "ผ่าน (รหัสปลอดภัย)" 
        : "ไม่ผ่าน (รหัสสั้นไป)";
};