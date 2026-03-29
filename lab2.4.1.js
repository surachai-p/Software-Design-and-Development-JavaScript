function runFunctions() {

    // 1. Function คำนวณ BMI
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    let bmi = calculateBMI(50, 1.60);

    // 2. Function ทักทายตามอายุ
    function greet(name, age) {
        if (age < 19) {
            return "สวัสดีน้อง " + name;
        } else {
            return "สวัสดีคุณ " + name;
        }
    }

    let greeting = greet("สุณัฐชา", 20);

    // 3. Function ตรวจสอบรหัสผ่าน
    function checkPassword(password) {
        return password.length > 8;
    }

    let passwordCheck = checkPassword("6803029800");

    alert(
        "ค่า BMI: " + bmi.toFixed(2) +
        "\nข้อความทักทาย: " + greeting +
        "\nรหัสผ่านยาวมากกว่า 8 ตัวอักษรหรือไม่: " + passwordCheck
    );
}