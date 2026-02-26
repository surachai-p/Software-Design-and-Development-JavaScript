
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return parseFloat(bmi.toFixed(2));
}


function greetByAge(name, age) {
    let greeting = '';

    if (age < 6) {
        greeting = `สวัสดี เด็กน้อย ${name} ครับ`;
    } else if (age < 13) {
        greeting = `สวัสดี เด็ก ${name} ครับ`;
    } else if (age < 18) {
        greeting = `สวัสดี เยาวชน ${name} ครับ`;
    } else if (age < 60) {
        greeting = `สวัสดีค่ะคุณ ${name}`;
    } else {
        greeting = `สวัสดีครับ ท่านผู้เฒ่า ${name}`;
    }

    return greeting;
}


function validatePassword(password) {
    return password.length > 8;
}

