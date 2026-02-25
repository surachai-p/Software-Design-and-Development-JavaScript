// 1. สร้างตัวแปรเก็บข้อมูลพื้นฐาน
let studentID = "68030151";
let studentName = "ปทิตญา";
let midtermScore = 75;
let finalScore = 85;

// 2. สร้าง Object สำหรับเก็บข้อมูลนักศึกษา
let student = {
    id: studentID,
    name: studentName,
    major: "เทคโนโลยีคอมพิวเตอร์",
    averageGrade: 3.86
};

// --- แสดงผลผ่าน Console ---
console.log("--- ข้อมูลนักศึกษา ---");
console.log("รหัส:", student.id);
console.log("ชื่อ:", student.name);
console.log("สาขา:", student.major);
console.log("คะแนนกลางภาค:", midtermScore);
console.log("คะแนนปลายภาค:", finalScore);
console.log("เกรดเฉลี่ย:", student.averageGrade);

// --- แสดงผลบน Browser ---
document.getElementById("student").innerHTML = `
    <b>รหัสนักศึกษา:</b> ${student.id} <br>
    <b>ชื่อ-นามสกุล:</b> ${student.name} <br>
    <b>สาขาวิชา:</b> ${student.major} <br>
    <b>คะแนนสอบกลางภาค:</b> ${midtermScore} <br>
    <b>คะแนนสอบปลายภาค:</b> ${finalScore} <br>
    <b>เกรดเฉลี่ย:</b> ${student.averageGrade}
`;