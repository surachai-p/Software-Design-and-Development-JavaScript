let number = 7;

if (number % 2 === 0) {
    console.log(number, "is even number");
} else {
    console.log(number, "is odd number");
}

console.log("multiplicand 2");
for (let i = 1; i <= 12; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}

console.log("📌 ตารางสูตรคูณแม่ 3");
let i = 1;
while (i <= 12) {
    console.log(`3 x ${i} = ${3 * i}`);
    i++;
}

console.log(" 10 - 1");
for (let i = 10; i >= 1; i--) { // ลด 1
    console.log(i);
}

let age = 25;

if (age >= 0 && age <= 12) {
    console.log("You are in child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are in teen.");
} else if (age >= 20 && age <= 59) {
    console.log("You are in adult.");
} else {
    console.log("You are in old age.");
}