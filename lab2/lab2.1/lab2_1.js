// ==========================
// ข้อ 1 : ประกาศตัวแปร
// ==========================

const studentId = "68030300";
let studentName = "สุธีมนต์ วงศ์พระราม";
let midtermScore = 35;
let finalScore = 40;

function showVariables() {
    document.getElementById("result").innerHTML =
        "<b>ข้อมูลตัวแปร</b><br>" +
        "รหัสนักศึกษา: " + studentId + "<br>" +
        "ชื่อ: " + studentName + "<br>" +
        "คะแนนกลางภาค: " + midtermScore + "<br>" +
        "คะแนนปลายภาค: " + finalScore;
}


// ==========================
// ข้อ 2 : Object นักศึกษา
// ==========================

const student = {
    studentId: "68030300",
    name: "สุธีมนต์ วงศ์พระราม",
    major: "เทคโนโลยีคอมพิวเตอร์",
    gpa: 3.45
};

function showStudent() {
    document.getElementById("result").innerHTML =
        "<b>ข้อมูลจาก Object</b><br>" +
        "รหัส: " + student.studentId + "<br>" +
        "ชื่อ: " + student.name + "<br>" +
        "สาขาวิชา: " + student.major + "<br>" +
        "เกรดเฉลี่ย: " + student.gpa;
}