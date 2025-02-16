document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkBtn").addEventListener("click", checkAgeGroup);
});

function checkAgeGroup() {
    // รับค่าอายุจาก input
    let age = parseInt(document.getElementById("ageInput").value);

    // ตรวจสอบว่าผู้ใช้ป้อนค่าเป็นตัวเลขหรือไม่
    if (isNaN(age) || age < 0) {
        document.getElementById("result").innerText = "⚠ กรุณากรอกอายุที่ถูกต้อง";
        return;
    }

    // ตรวจสอบช่วงวัย
    let category = "";
    if (age <= 12) {
        category = "วัยเด็ก";
    } else if (age <= 19) {
        category = "วัยรุ่น";
    } else {
        category = "วัยผู้ใหญ่";
    }

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = `อายุ ${age} ปี อยู่ในช่วง: ${category}`;
}
