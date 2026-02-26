const calculateBMI = (weight, heightCm) => {
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    return bmi.toFixed(2);
};

const getGreeting = (name, age) => {
    const title = age < 15 ? "น้อง" : "คุณ";
    return `สวัสดี${title}${name}`; 
};

const isPassValid = (pass) => pass.length > 8;

const handleBMI = () => {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    if (w && h) {
        document.getElementById('bmiResult').innerText = `BMI คือ: ${calculateBMI(w, h)}`;
    }
};

const handleGreet = () => {
    const n = document.getElementById('userName').value;
    const a = document.getElementById('userAge').value;
    if (n && a) {
        document.getElementById('greetResult').innerText = getGreeting(n, a);
    }
};

const handlePass = () => {
    const p = document.getElementById('password').value;
    const result = isPassValid(p) ? "รหัสผ่านปลอดภัย" : "รหัสผ่านสั้นเกินไป";
    document.getElementById('passResult').innerText = result;
};