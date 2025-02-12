let number = 7;

if (number % 2 === 0) {
    console.log(number + " เป็นเลขคู่");
} else {
    console.log(number + " เป็นเลขคี่");
}

console.log("ตารางสูตรคูณ แม่ 2:");
for (let i = 1; i <= 10; i++) {
    console.log("2 * " + i + " = " + (2 * i));
}

console.log("\nตารางสูตรคูณ แม่ 3:");
let j = 1;
while (j <= 10) {
    console.log("3 * " + j + " = " + (3 * j));
    j++;
}

console.log("\nนับถอยหลังจาก 10 ถึง 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let age = 25;

if (age >= 0 && age <= 12) {
    console.log("วัยเด็ก");
} else if (age >= 13 && age <= 19) {
    console.log("วัยรุ่น");
} else if (age >= 20 && age <= 59) {
    console.log("วัยผู้ใหญ่");
} else if (age >= 60) {
    console.log("วัยชรา");
} else {
    console.log("อายุไม่ถูกต้อง");
}