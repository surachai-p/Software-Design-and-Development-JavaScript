// ฟังก์ชันสำหรับปุ่มที่ 3
function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    alert("เวลาปัจจุบันขณะนี้: " + timeString);
}