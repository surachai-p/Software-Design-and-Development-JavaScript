// 1. ประกาศตัวแปรแยก (รหัสและชื่อใช้ const, คะแนนใช้ let)
const studentID = "66010123";
const studentName = "สมชาย ใจดี";
let midtermScore = 25;
let finalScore = 35;

// 2. สร้าง Object สำหรับเก็บข้อมูลนักศึกษา
const student = {
    id: "66010123",
    name: "สมชาย ใจดี",
    major: "เทคโนโลยีสารสนเทศ",
    gpa: 3.75
};

// 3. แสดงผลข้อมูลทั้งหมดออกมาให้ครบถ้วน
console.log("========== ข้อมูลนักศึกษา ==========");
console.log("รหัสพนักงาน/นักศึกษา:", studentID);
console.log("ชื่อ-นามสกุล:", studentName);
console.log("คะแนนกลางภาค:", midtermScore);
console.log("คะแนนปลายภาค:", finalScore);
console.log("คะแนนรวมทั้งหมด:", midtermScore + finalScore);

console.log("========== ข้อมูลจาก Object ==========");
console.log("สาขาวิชา:", student.major);
console.log("เกรดเฉลี่ย:", student.gpa);

// แถม: แสดงผลแบบตารางให้ดูง่ายขึ้นไปอีกระดับ
console.table(student);