const studentId = "68030251";
const studentName = "Wanitcha Jabprang";
let midtermScore = 35;
let finalScore = 40;

const student = {
    studentId: "68030251",
    name: "Wanitcha Jabprang",
    major: "Computer Technology",
    gpa: 3.75
};

function showStudent() {
    document.getElementById("result").innerHTML =
        "รหัสนักศึกษา: " + student.studentId +
        "<br>ชื่อ: " + student.name +
        "<br>สาขา: " + student.major +
        "<br>เกรดเฉลี่ย: " + student.gpa;
}
