// 1. เลือก Element ที่ต้องการใช้งานมาเก็บไว้ในตัวแปร
const outputDiv = document.getElementById('display-output');
const textOutput = document.getElementById('text-output');
const inputField = document.getElementById('myInput');

// 2. จัดการเหตุการณ์ (Event Listeners)

// ปุ่มแสดงชื่อ
document.getElementById('btn-name').addEventListener('click', () => {
    updateOutput("👤 ชื่อนักศึกษา: นายใจดี เรียนสนุก", "blue");
});

// ปุ่มวันที่
document.getElementById('btn-date').addEventListener('click', () => {
    const d = new Date();
    const dateStr = d.toLocaleDateString('th-TH', { 
        year: 'numeric', month: 'long', day: 'numeric' 
    });
    updateOutput("📅 วันที่ปัจจุบัน: " + dateStr, "green");
});

// ปุ่มเวลา
document.getElementById('btn-time').addEventListener('click', () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('th-TH');
    updateOutput("⏰ เวลาขณะนี้: " + timeStr, "orange");
});

// ปุ่มส่งข้อมูลจาก Input
document.getElementById('btn-display').addEventListener('click', () => {
    const text = inputField.value.trim();
    
    if (text === "") {
        textOutput.textContent = "⚠️ กรุณากรอกข้อความก่อนกดปุ่ม!";
        textOutput.style.color = "#e74c3c";
    } else {
        textOutput.textContent = `✅ คุณพิมพ์ว่า: "${text}"`;
        textOutput.style.color = "#2c3e50";
        inputField.value = ""; // เคลียร์ช่องกรอกหลังส่งข้อมูล
    }
});

// ฟังก์ชันช่วยแสดงผลเพื่อให้โค้ดดูสะอาดขึ้น
function updateOutput(message, theme) {
    outputDiv.textContent = message;
    outputDiv.className = `output-box theme-${theme}`;
}