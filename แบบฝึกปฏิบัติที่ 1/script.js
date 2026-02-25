function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    alert('เวลาปัจจุบันคือ: ' + timeString);
}

function showInputText() {
    const userInput = document.getElementById('myInput').value;
    if (userInput === "") {
        alert("กรุณากรอกข้อความก่อนครับ");
    } else {
        alert('ข้อความที่คุณกรอกคือ: ' + userInput);
    }
}