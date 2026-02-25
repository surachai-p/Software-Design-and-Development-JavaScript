function showTime() {
    let now = new Date();
    let options = { hour: '2-digit', minute: '2-digit', second: '2-digit'};
    document.getElementById("result").innerHTML =
        "เวลาปัจจุบัน: " + now.toLocaleTimeString('th-TH', options);
}