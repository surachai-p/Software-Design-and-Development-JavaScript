// การทดลองที่ 2.4.1 - Regular Function

// ฟังก์ชันที่ 1: คำนวณค่า BMI
function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

// ฟังก์ชันที่ 2: ทักทายตามอายุ
function greetingByAge(name, age) {
    var greeting = '';
    
    if (age < 18) {
        greeting = 'สวัสดีเด็กน้อย ' + name;
    } else {
        greeting = 'สวัสดีครับ/ค่ะ ' + name;
    }
    
    return greeting;
}

// ฟังก์ชันที่ 3: ตรวจสอบรหัสผ่าน
function validatePassword(password) {
    if (password.length > 8) {
        return true;
    } else {
        return false;
    }
}

// การเรียกใช้ฟังก์ชัน
console.log('--- ฟังก์ชันที่ 1: คำนวณค่า BMI ---');
var bmiResult = calculateBMI(70, 1.75);
console.log('BMI = ' + bmiResult);

console.log('--- ฟังก์ชันที่ 2: ทักทายตามอายุ ---');
var greeting1 = greetingByAge('เบญจมิน', 20);
console.log(greeting1);

var greeting2 = greetingByAge('นิดหน่อย', 10);
console.log(greeting2);

console.log('--- ฟังก์ชันที่ 3: ตรวจสอบรหัสผ่าน ---');
var password1 = 'myPassword123';
var isValid1 = validatePassword(password1);
console.log('รหัสผ่าน "' + password1 + '" ยาวกว่า 8 ตัวหรือไม่: ' + isValid1);

var password2 = 'pass123';
var isValid2 = validatePassword(password2);
console.log('รหัสผ่าน "' + password2 + '" ยาวกว่า 8 ตัวหรือไม่: ' + isValid2);
