// ไฟล์สำหรับ External JavaScript ใช้กับ experiment-1.html

function showCurrentTime() {
    var now = new Date();
    var timeString = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    alert('เวลาปัจจุบัน: ' + timeString);
}
