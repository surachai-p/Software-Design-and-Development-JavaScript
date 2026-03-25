// ข้อ 1 : ประกาศตัวแปร

const studentId = "66010001";
const studentName = "สมชาย ใจดี";
let midtermScore = 50;
let finalScore = 50;


// ข้อ 2 : สร้าง Object นักศึกษา

const student = {
    studentId: "68030069",
    name: "ญาดา แกล้วกล้า",
    major: "เทคโนโลยีคอมพิวเตอร์",
    gpa: 4.00
};

// แสดงผลบนหน้าเว็บ

document.getElementById("output").innerHTML = `
    <p>รหัสนักศึกษา: ${studentId}</p>
    <p>ชื่อ: ${studentName}</p>
    <p>คะแนนกลางภาค: ${midtermScore}</p>
    <p>คะแนนปลายภาค: ${finalScore}</p>
    <hr>
    <h3>ข้อมูลจาก Object</h3>
    <p>รหัสนักศึกษา: ${student.studentId}</p>
    <p>ชื่อ: ${student.name}</p>
    <p>สาขาวิชา: ${student.major}</p>
    <p>เกรดเฉลี่ย: ${student.gpa}</p>
`;