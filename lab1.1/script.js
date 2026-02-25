// ปุ่มที่ 3: แสดงเวลาปัจจุบัน
function showTime() {
    const now = new Date();
    const timeString = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    alert('เวลาปัจจุบันคือ: ' + timeString);
}
function showAlert() {
    // 1. ดึงข้อมูลจากช่อง Textbox เก็บไว้ในตัวแปรชื่อ 'data'
    // เราใช้ .value เพื่อเอาสิ่งที่พิมพ์อยู่ในช่องนั้นออกมา
    let data = document.getElementById('myInput').value;

    // 2. แสดงผลข้อความที่ดึงมาได้
    if (data === "") {
        alert("คุณยังไม่ได้กรอกอะไรเลย!");
    } else {
        alert("ข้อความที่คุณกรอกคือ: " + data);
    }
}