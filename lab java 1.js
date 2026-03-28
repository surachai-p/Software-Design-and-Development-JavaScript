function hello3(){
    alert('เวลาปัจจุบัน : ' + new Date().toLocaleTimeString());
    }
// ดึง Element ของปุ่มมาดักจับการคลิก
document.getElementById('display').onclick = function() {
    // 1. ดึงค่าจากช่อง input โดยใช้ .value
    let message = document.getElementById('userInput').value;
    
    // 2. ตรวจสอบว่าได้กรอกอะไรมาไหม (ถ้าว่างให้แจ้งเตือน)
    if (message.trim() === "") {
        alert("กรุณากรอกข้อความก่อนกดปุ่มค่ะ!");
    } else {
        // 3. นำข้อความไปแสดงในแท็ก <p> ที่เตรียมไว้
        document.getElementById('resultText').innerText = message;
    }
};