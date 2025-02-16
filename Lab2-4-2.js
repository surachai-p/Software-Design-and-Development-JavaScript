const calculateBMI = (weight, height) => Math.round((weight / (height * height)) * 100) / 100;
console.log(calculateBMI(50, 1.55));


const greetUser = (name, age) => {
    let message = `Hello, ${name}! `;
    if (age < 12) {
        message += "You're a child!";
    } else if (age < 20) {
        message += "You're a teenager!";
    } else if (age < 60) {
        message += "You're an adult!";
    } else {
        message += "You're a senior!";
    }
    return message;
};

console.log(greetUser("Piyawit", 21));


const isPasswordValid = password => password.length > 8;

console.log(isPasswordValid("1212312121"));
console.log(isPasswordValid("just12"));