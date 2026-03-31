function showTime() {
    const now = new Date();
    document.getElementById("result").innerHTML =
        "เวลาปัจจุบัน: " + now.toLocaleTimeString();
}
