function calculateAverage() {
    // รับค่าคะแนนจาก input
    let subject1 = parseFloat(document.getElementById("subject1").value);
    let subject2 = parseFloat(document.getElementById("subject2").value);
    let subject3 = parseFloat(document.getElementById("subject3").value);

    // ตรวจสอบว่าผู้ใช้ป้อนค่าถูกต้องหรือไม่
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
        document.getElementById("result").innerText = "กรุณากรอกคะแนนให้ครบทุกช่อง";
        return;
    }

    // คำนวณคะแนนเฉลี่ย
    let totalScore = subject1 + subject2 + subject3;
    let averageScore = totalScore / 3;

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = "คะแนนเฉลี่ย: " + averageScore.toFixed(2);
}
