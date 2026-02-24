function runArrowFunctions() {

    // 1. Arrow Function คำนวณ BMI
    const calculateBMI = (weight, height) => weight / (height * height);
    let bmi = calculateBMI(50, 1.60);

    // 2. Arrow Function ทักทายตามอายุ
    const greet = (name, age) => 
        age < 19 ? "สวัสดีน้อง " + name : "สวัสดีคุณ " + name;

    let greeting = greet("สุณัฐชา", 20);

    // 3. Arrow Function ตรวจสอบรหัสผ่าน
    const checkPassword = password => password.length > 8;
    let passwordCheck = checkPassword("123456789");

    alert(
        "ค่า BMI: " + bmi.toFixed(2) +
        "\nข้อความทักทาย: " + greeting +
        "\nรหัสผ่านยาวมากกว่า 8 ตัวอักษรหรือไม่: " + passwordCheck
    );
}