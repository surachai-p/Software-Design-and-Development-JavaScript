

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    console.log("ค่า BMI ของคุณคือ:", bmi.toFixed(2));
}

calculateBMI(70, 1.75);

function greet(name, age) {
    if (age < 12) {
        console.log("สวัสดีเด็กน้อย", name);
    } else if (age < 18) {
        console.log("สวัสดีวัยรุ่น", name);
    } else {
        console.log("สวัสดีผู้ใหญ่", name);
    }
}

greet("Alice", 10);
greet("Bob", 16);
greet("Charlie", 25);

function checkPassword(password) {
    if (password.length > 8) {
        console.log("รหัสผ่านของคุณปลอดภัย");
    } else {
        console.log("รหัสผ่านของคุณไม่ปลอดภัย");
    }
}

checkPassword("mysecretpassword");
checkPassword("short");
