// ========== แบบทดสอบที่ 2.4.2: Arrow Functions ==========

// 1. Arrow Function คำนวณ BMI (ดัชนีมวลกาย)
// Parameter: weight (kg), height (cm)
// Return: BMI value
const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return parseFloat(bmi.toFixed(2));
};


const greetByAge = (name, age) => {
    const getGreeting = () => {
        if (age < 6) return `สวัสดี เด็กน้อย ${name} ครับ`;
        if (age < 13) return `สวัสดี เด็ก ${name} ครับ`;
        if (age < 18) return `สวัสดี เยาวชน ${name} ครับ`;
        if (age < 60) return `สวัสดีค่ะท่าน ${name}`;
        return `สวัสดีครับ ท่านผู้เฒ่า ${name}`;
    };
    return getGreeting();
};


const validatePassword = (password) => password.length > 8;



// Arrow Function แบบย่อ (One-liner)
const add = (a, b) => a + b;
console.log("add(5, 3):", add(5, 3));  // แสดง: 8

// Arrow Function ที่ไม่มีพารามิเตอร์
const getRandomNumber = () => Math.random();
console.log("Random number:", getRandomNumber());

// Arrow Function กับ Array - map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("เลขคูณ 2:", doubled);  // แสดง: [2, 4, 6, 8, 10]

// Arrow Function กับ Array - filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("เลขคู่:", evenNumbers);  // แสดง: [2, 4]

// Arrow Function กับ Array - reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("ผลรวมทั้งหมด:", sum);  // แสดง: 15
