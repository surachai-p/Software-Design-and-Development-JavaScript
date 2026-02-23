// การทดลองที่ 2.1

// -----------------------------
// ส่วนที่ 1: ประกาศตัวแปร
// -----------------------------
var studentId = '68030080';
var studentName = 'ณภัทร สิงห์ตุ้ย';
var midtermScore = 85;
var finalExamScore = 90;

console.log('--- ส่วนที่ 1: ตัวแปรของนักศึกษา ---');
console.log('รหัสนักศึกษา: ' + studentId);
console.log('ชื่อนักศึกษา: ' + studentName);
console.log('คะแนนสอบกลางภาค: ' + midtermScore);
console.log('คะแนนสอบปลายภาค: ' + finalExamScore);

// -----------------------------
// ส่วนที่ 2: สร้าง Object เก็บข้อมูลนักศึกษา
// -----------------------------
var student = {
    studentId: '68030080',
    name: 'ณภัทร สิงห์ตุ้ย',
    major: 'วิทยาศาสตร์คอมพิวเตอร์',
    gpa: 3.75
};

console.log('--- ส่วนที่ 2: Object ข้อมูลนักศึกษา ---');
console.log(student);
console.log('ชื่อ: ' + student.name);
console.log('สาขาวิชา: ' + student.major);
console.log('เกรดเฉลี่ย: ' + student.gpa);