function calculateBMI(weight, heightCm) {
    var heightM = heightCm / 100;
    var bmi = weight / (heightM * heightM);
    return bmi.toFixed(2); 
}

function handleBMI() {
    var weight = document.getElementById('w').value;
    var height = document.getElementById('h').value;
    if (weight && height) {
        var res = calculateBMI(weight, height);
        document.getElementById('bmiRes').innerText = "BMI คือ: " + res;
    }
}

function getGreeting(name, age) {
    var title = (age >= 18) ? "คุณ" : "น้อง";
    return "สวัสดี" + title + name; 
}

function handleGreet() {
    var name = document.getElementById('uName').value;
    var age = document.getElementById('uAge').value;
    if (name && age) {
        var res = getGreeting(name, age);
        document.getElementById('greetRes').innerText = res;
    }
}

function checkPassword(pass) {
    if (pass.length > 8) {
        return "รหัสผ่านปลอดภัย";
    } else {
        return "รหัสผ่านสั้นเกินไป";
    }
}

function handlePass() {
    var password = document.getElementById('uPass').value;
    if (password) {
        var res = checkPassword(password);
        document.getElementById('passRes').innerText = res;
    }
}