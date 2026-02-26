// สร้างตัวแปรเก็บข้อมูลนักศึกษา
let studentId = "64001"; // รหัสนักศึกษา
let studentName = "สมชาย ใจดี"; // ชื่อนักศึกษา
let midtermScore = 85; // คะแนนสอบกลางภาค
let finalScore = 90; // คะแนนสอบปลายภาค

// สร้าง Object สำหรับเก็บข้อมูลนักศึกษา
const student = {
    id: "64001",
    name: "สมชาย ใจดี",
    major: "วิทยาการคอมพิวเตอร์",
    gpa: 3.75
};

// แสดงผลข้อมูล
console.log("รหัสนักศึกษา:", studentId);
console.log("ชื่อนักศึกษา:", studentName);
console.log("คะแนนสอบกลางภาค:", midtermScore);
console.log("คะแนนสอบปลายภาค:", finalScore);
console.log("ข้อมูลนักศึกษา:", student);