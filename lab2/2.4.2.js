// --------- ข้อมูลตัวอย่าง ---------
let weight = 60;
let height = 2.00;

let name = "Wanitcha";
let age = 20;

let password = "68030251";


const calculateBMI = (weight, height) => weight / (height * height);

const showBMI = () => {
    const bmi = calculateBMI(weight, height);
    document.getElementById("result").innerHTML =
        "น้ำหนัก: " + weight + " kg<br>" +
        "ส่วนสูง: " + height + " m<br>" +
        "<b>BMI: " + bmi.toFixed(2) + "</b>";
};


const helloByAge = (name, age) => {
    if (age < 13) {
        return "สวัสดีจ้า " + name;
    } else if (age <= 19) {
        return "ฮัลโหล " + name;
    } else {
        return "สวัสดีค่ะ คุณ " + name;
    }
};

const showHello = () => {
    document.getElementById("result").innerText =
        helloByAge(name, age);
};


const isValidPassword = password => password.length > 8;

const showPassword = () => {
    const result = isValidPassword(password);
    document.getElementById("result").innerText =
        result ? "รหัสผ่านปลอดภัย" : "รหัสผ่านสั้นเกินไป";
};
