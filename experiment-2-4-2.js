// การทดลองที่ 2.4.2 - Arrow Function

// ฟังก์ชันที่ 1: คำนวณค่า BMI ด้วย Arrow Function
const calculateBMIArrow = (weight, height) => {
    const bmi = weight / (height * height);
    return bmi;
};

// ฟังก์ชันที่ 2: ทักทายตามอายุ ด้วย Arrow Function
const greetingByAgeArrow = (name, age) => {
    let greeting = '';
    
    if (age < 18) {
        greeting = 'สวัสดีเด็กน้อย ' + name;
    } else {
        greeting = 'สวัสดีครับ/ค่ะ ' + name;
    }
    
    return greeting;
};

// ฟังก์ชันที่ 3: ตรวจสอบรหัสผ่าน ด้วย Arrow Function
const validatePasswordArrow = (password) => {
    if (password.length > 8) {
        return true;
    } else {
        return false;
    }
};

// การเรียกใช้ฟังก์ชัน
console.log('--- ฟังก์ชันที่ 1: คำนวณค่า BMI (Arrow) ---');
const bmiResult = calculateBMIArrow(70, 1.75);
console.log('BMI = ' + bmiResult);

console.log('--- ฟังก์ชันที่ 2: ทักทายตามอายุ (Arrow) ---');
const greeting1 = greetingByAgeArrow('เบญจมิน', 20);
console.log(greeting1);

const greeting2 = greetingByAgeArrow('นิดหน่อย', 10);
console.log(greeting2);

console.log('--- ฟังก์ชันที่ 3: ตรวจสอบรหัสผ่าน (Arrow) ---');
const password1 = 'myPassword123';
const isValid1 = validatePasswordArrow(password1);
console.log('รหัสผ่าน "' + password1 + '" ยาวกว่า 8 ตัวหรือไม่: ' + isValid1);

const password2 = 'pass123';
const isValid2 = validatePasswordArrow(password2);
console.log('รหัสผ่าน "' + password2 + '" ยาวกว่า 8 ตัวหรือไม่: ' + isValid2);
