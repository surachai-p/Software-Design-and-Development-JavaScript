//สร้างตัวแปรเก็บข้อมูล รหัสนักศึกษา ชื่อนักศึกษา คะแนนสอบกลางภาค, คะแนนสอบปลายภาค โดยเลือกใช้ let หรือ const
let studentID = "68030151";
let studentName = "ปทิตญา";
let midtermScore = 75;
let finalScore = 85;

//สร้าง Object สำหรับเก็บข้อมูลนักศึกษา ประกอบด้วยข้อมูล รหัสนักศึกษา, ชื่อ, สาขาวิชา, เกรดเฉลี่ย
let student = {
    id: "68030151",
    name: "ปทิตญา",
    major: "เทคโนโลยีคอมพิวเตอร์",
    averageGrade: 3.86
};
function showStudentData() {
    document.getElementById("resultText").innerHTML = 
        "รหัสนักศึกษา: " + studentID + "<br>" +
        "ชื่อนักศึกษา: " + studentName + "<br>" +
        "คะแนนสอบกลางภาค: " + midtermScore + "<br>" +
        "คะแนนสอบปลายภาค: " + finalScore + "<br>" +
        "สาขาวิชา: " + student.major + "<br>" +
        "เกรดเฉลี่ย: " + student.averageGrade;
}