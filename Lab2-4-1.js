function calculateBMI(weight, height) {
    let bmi = weight / (height ** 2);
    return bmi.toFixed(2);
}

console.log("BMI:", calculateBMI(60, 1.55));

function greetUser(name, age) {
    let message = `Hello, ${name}! `;
    
    if (age < 12) {
        message += "You're a child. Have fun!";
    } else if (age < 20) {
        message += "You're a teenager. Enjoy your life";
    } else if (age < 60) {
        message += "You're an adult. Work hard and take care!";
    } else {
        message += "You're a senior. Stay happy!";
    }
    
    return message;
}

console.log(greetUser("Piyawit", 21));

function isPasswordValid(password) {
    return password.length > 8;
}

console.log(isPasswordValid("1669"));
console.log(isPasswordValid("1212312121"));