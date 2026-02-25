// ประกาศตัวแปรเก็บข้อมูลนักศึกษา
const studentId = '64000001';
const studentName = 'ธนกฤต พรรณเผือก';
let midtermScore = 78; // คะแนนสอบกลางภาค
let finalScore = 86;   // คะแนนสอบปลายภาค

// สร้าง Object สำหรับเก็บข้อมูลนักศึกษา
const student = {
    id: studentId,
    name: studentName,
    major: 'วิทยาการคอมพิวเตอร์',
    average: (midtermScore + finalScore) / 2
};

// แสดงผลในคอนโซลเพื่อตรวจสอบ
console.log('Student variables:', { studentId, studentName, midtermScore, finalScore });
console.log('Student object:', student);

// External JavaScript: function for ปุ่มที่ 3
function hello3() {
    const now = new Date();
    alert('เวลาปัจจุบัน: ' + now.toLocaleTimeString('th-TH'));
}
