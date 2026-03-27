
const CalBMI = (w, h) => console.log("BMI =", w / (h * h)) || w / (h * h);
CalBMI(70, 1.75);

const greet = (name, age) =>
  console.log(`สวัสดีคุณ ${name} ` + (age < 15 ? "คยังเป็นเด็ก" : age >= 16 && age < 20 ? "เป็นวัยรุ่น" : "เป็นผู้ใหญ่"));
greet("chitsanupat", 25);

const checkPassword = (password) =>
  console.log(
    `รหัสผ่านของคุณ ${password} ` + (password.length > 8 ? "ปลอดภัย" : "ไม่ปลอดภัย")
  );
checkPassword("mysecretpassword");
checkPassword("short");
