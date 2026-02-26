const calculateBMI = (w, h) => (w / ((h / 100) ** 2)).toFixed(2);

const smartGreeting = (name, age) => 
    age < 15 ? `สวัสดีจ๊ะ น้อง ${name}` : 
    age < 30 ? `สวัสดีคุณ ${name}` : `ขอแสดงความนับถือคุณท่าน ${name}`;

const checkPassword = pass => pass.length >= 8 ? "✅ ปลอดภัย" : "❌ รหัสผ่านสั้นเกินไป";

const runBMI = () => {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    const result = calculateBMI(w, h);
    document.getElementById('resBMI').innerText = `ผลลัพธ์ BMI: ${result}`;
};

const runGreeting = () => {
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    document.getElementById('resGreet').innerText = smartGreeting(name, age);
};

const runCheckPass = () => {
    const pass = document.getElementById('passInput').value;
    document.getElementById('resPass').innerText = checkPassword(pass);
};