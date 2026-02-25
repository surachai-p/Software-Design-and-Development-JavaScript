function hello3(){
    alert('22:00 น.');
    }

function showMessage() {
            let text = document.getElementById("myText").value;
            document.getElementById("result").innerHTML =
                "ข้อความที่คุณพิมพ์: " + text;
        }

//const and let
const studentId = "68030267";
let studentName = "นาย วันชนะ ไชยลังกา";
let midtermScore = 35;   
let finalScore = 45;     

console.log("รหัสนักศึกษา:", studentId);
console.log("ชื่อ:", studentName);
console.log("คะแนนกลางภาค:", midtermScore);
console.log("คะแนนปลายภาค:", finalScore);

//Object 
let student = {
    studentId: "68030267",
    name: "นาย วันชนะ ไชยลังกา",
    major: "เทคโนโลยีคอมพิวเตอร์",
    gpa: 2.00
};

console.log("ข้อมูลนักศึกษา");
console.log("รหัส:", student.studentId);
console.log("ชื่อ:", student.name);
console.log("สาขาวิชา:", student.major);
console.log("เกรดเฉลี่ย:", student.gpa);

// กำหนดคะแนน 3 วิชา
let subject1 = 80;
let subject2 = 75;
let subject3 = 90;

let total = subject1 + subject2 + subject3;

let average = total / 3;

console.log("คะแนนวิชาที่ 1:", subject1);
console.log("คะแนนวิชาที่ 2:", subject2);
console.log("คะแนนวิชาที่ 3:", subject3);
console.log("คะแนนรวม:", total);
console.log("คะแนนเฉลี่ย:", average);

//ข้อมูลสินค้า
let productName = "คีย์บอร์ด";
let price = 1000;
let vat = price * 0.07;
let totalPrice = price + vat;

console.log("ชื่อสินค้า:", productName);
console.log("ราคา:", price, "บาท");
console.log("VAT 7%:", vat, "บาท");
console.log("ราคารวม VAT:", totalPrice, "บาท");

//if-else
let number = 7;

if (number % 2 === 0) {
    console.log(number + " เป็นเลขคู่");
} else {
    console.log(number + " เป็นเลขคี่");
}
//2
console.log("สูตรคูณแม่ 2");

for (let i = 1; i <= 12; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}
//3
console.log("สูตรคูณแม่ 3");

let i = 1;
while (i <= 12) {
    console.log("3 x " + i + " = " + (3 * i));
    i++;
}
//1-10
console.log("นับถอยหลัง");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//old
let age = 18;

if (age <= 12) {
    console.log("วัยเด็ก");
} else if (age <= 19) {
    console.log("วัยรุ่น");
} else {
    console.log("วัยผู้ใหญ่");
}


//BMI
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);   
}

let resultBMI = calculateBMI(70, 1.75);
console.log("ค่า BMI =", resultBMI);

function checkPassword(password) {
    if (password.length > 8) {
        return "รหัสผ่านปลอดภัย";
    } else {
        return "รหัสผ่านสั้นเกินไป";
    }
}

//Name-old
function greetByAge(name, age) {
    if (age <= 12) {
        console.log("สวัสดี เด็กชาย/เด็กหญิง " + name);
    } else if (age <= 19) {
        console.log("สวัสดีวัยรุ่น " + name);
    } else {
        console.log("สวัสดีคุณ " + name);
    }
}

greetByAge("นายวันชนะ", 18);

// test
console.log(checkPassword("68030267"));
console.log(checkPassword("Wanchana267"));


