function checkOddEven(number) {
    if (number % 2 === 0) {
        return `${number} คือ เลขคู่`;
    } else {
        return `${number} คือ เลขคี่`;
    }
}
document.getElementById('oddEvenResult').innerText = checkOddEven(127);

let multiOutput = "แม่ 2 (for loop):\n";
for (let i = 1; i <= 12; i++) {
    multiOutput += `2 x ${i} = ${2 * i}\n`;
}

multiOutput += "\nแม่ 3 (while loop):\n";
let j = 1;
while (j <= 12) {
    multiOutput += `3 x ${j} = ${3 * j}\n`;
    j++;
}
document.getElementById('multiplicationResult').innerText = multiOutput;

let countdown = "";
for (let i = 10; i >= 1; i--) {
    countdown += i + (i > 1 ? ", " : "");
}
document.getElementById('countdownResult').innerText = countdown;

function getAgeGroup(age) {
    if (age <= 13) {
        return `อายุ ${age}: วัยเด็ก`;
    } else if (age <= 25) {
        return `อายุ ${age}: วัยรุ่น`;
    } else if (age <= 59){
        return `อายุ ${age}: วัยผู้ใหญ่`;
    }
}
document.getElementById('ageGroupResult').innerText = getAgeGroup(27);