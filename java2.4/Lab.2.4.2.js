document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("greetBtn").addEventListener("click", function () {
        let name = document.getElementById("nameInput").value.trim();
        let age = parseInt(document.getElementById("ageInput").value);

        // ตรวจสอบค่าชื่อและอายุ
        if (!name || isNaN(age) || age < 0) {
            document.getElementById("result").innerText = "⚠ กรุณากรอกชื่อและอายุที่ถูกต้อง";
            return;
        }

        let message = greet(name, age);
        document.getElementById("result").innerText = message;
    });
});

// ฟังก์ชันทักทายตามช่วงวัย
function greet(name, age) {
    let greeting = "";

    if (age >= 0 && age <= 12) {
        greeting = "สวัสดีเด็กน้อย";
    } else if (age >= 13 && age <= 19) {
        greeting = "หวัดดีวัยรุ่น";
    } else if (age >= 20 && age <= 59) {
        greeting = "สวัสดีครับ/ค่ะ คุณ";
    } else if (age >= 60) {
        greeting = "สวัสดีคุณลุง/ป้า";
    } else {
        greeting = "⚠ กรุณากรอกอายุที่ถูกต้อง";
    }

    return `${greeting} ${name}!`;
}
