function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    alert("เวลาปัจจุบันคือ: " + timeString);
}

function showInputText() {
    const userInput = document.getElementById('userText').value;
    if (userInput === "") {
        alert("กรุณากรอกข้อความก่อนคลิกปุ่ม!");
    } else {
        alert("ข้อความที่คุณกรอกคือ: " + userInput);
    }
}