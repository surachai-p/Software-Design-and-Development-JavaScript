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

let x = 10;
let y = 5;

// การดำเนินการพื้นฐาน
let sum = x + y;      // บวก: 10 + 5 = 15
let diff = x - y;     // ลบ: 10 - 5 = 5
let product = x * y;  // คูณ: 10 * 5 = 50
let quotient = x / y; // หาร: 10 / 5 = 2
let remainder = x % y; // หารเอาเศษ: 10 % 5 = 0 (หาร 5 ลงตัว)

// การเพิ่ม/ลดค่าทีละ 1
let counter = 1;
counter++;            // เพิ่มค่าทีละ 1: counter = 2
counter--;            // ลดค่าทีละ 1: counter = 1

// การยกกำลัง
let squared = x ** 2;  // 10 ยกกำลัง 2 = 100
let cubed = x ** 3;    // 10 ยกกำลัง 3 = 1000

// การใช้ตัวดำเนินการร่วมกับการกำหนดค่า
let number = 5;
number += 3;          // เท่ากับ number = number + 3
number -= 2;          // เท่ากับ number = number - 2
number *= 4;          // เท่ากับ number = number * 4
number /= 2;          // เท่ากับ number = number / 2