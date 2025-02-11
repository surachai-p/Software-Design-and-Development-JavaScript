// ประกาศตัวแปรสำหรับเก็บข้อมูลนักศึกษา
let studentId = "67030059";       
let studentName = "ชุธิพร เชาว์ชัย";      
let midTermScore = 75;           
let finalTermScore = 80;         

// คำนวณเกรดเฉลี่ย
const GPA = 3.55   // เกรดเฉลี่ย (ใช้ const เพราะค่าไม่ควรเปลี่ยนแปลงหลังจากคำนวณ)

console.log(`รหัสนักศึกษา: ${studentId}`);
console.log(`ชื่อ: ${studentName}`);
console.log(`คะแนนสอบกลางภาค: ${midTermScore}`);
console.log(`คะแนนสอบปลายภาค: ${finalTermScore}`);
console.log(`เกรดเฉลี่ย: ${GPA}`);
