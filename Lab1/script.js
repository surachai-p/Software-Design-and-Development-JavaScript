document.getElementById("showTimeBtn").addEventListener("click", function() {
    alert("เวลาปัจจุบัน: " + new Date().toLocaleTimeString());
});

function showText() {
    let input = document.getElementById("textInput").value;
    document.getElementById("outputText").innerText = "คุณกรอก: " + input;
}