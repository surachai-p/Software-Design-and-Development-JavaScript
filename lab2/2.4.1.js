function calculateBMI() {

    let weight = 50;     
    let height = 1.60;   

    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML =
        "น้ำหนัก: " + weight + " kg<br>" +
        "ส่วนสูง: " + height + " m<br>" +
        "<b>BMI: " + bmi.toFixed(2) + "</b>";
}


function helloByAge() {

    let name = "Wanitcha";
    let age = 18;
    let message = "";

    if (age < 13) {
        message = "สวัสดีจ้า " + name;
    } else if (age <= 19) {
        message = "ฮัลโหล " + name;
    } else {
        message = "สวัสดีค่ะ คุณ " + name;
    }

    document.getElementById("result").innerHTML = message;
}


function checkPassword() {

    let password = "68030251";

    if (password.length > 8) {
        document.getElementById("result").innerHTML =
            "รหัสผ่านมีความยาวถูกต้อง";
    } else {
        document.getElementById("result").innerHTML =
            "รหัสผ่านสั้นเกินไป";
    }
}
