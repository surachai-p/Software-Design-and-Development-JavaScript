// คำนวณค่า BMI
const calculateBMI = (weight, height) => weight / (height * height);

// ทักทายตามชื่อและอายุ
const greetPerson = (name, age) => {
    let greeting = "";
    if (age < 18) {
        greeting = "สวัสดี " + name + ", เด็ก";
    } else if (age >= 18 && age < 60) {
        greeting = "สวัสดี " + name + ",วัยทำงาน";
    } else {
        greeting = "สวัสดี " + name + ",วัยเกษียณ";
    }
    console.log(greeting);
};

// ตรวจสอบรหัสผ่าน
const isPasswordValid = password => password.length > 8;

// ทดสอบการใช้ฟังก์ชัน
let weight = 70;
let height = 1.75;
let bmi = calculateBMI(weight, height);
console.log("ค่า BMI: " + bmi.toFixed(2));

let name = "กฤตนัย";
let age = 25;
greetPerson(name, age);

let password = "mypassword123";
let isValid = isPasswordValid(password);
console.log("รหัสผ่านถูกต้องหรือไม่: " + isValid);