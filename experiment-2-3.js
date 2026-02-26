// การทดลองที่ 2.3

// ข้อที่ 1: ตรวจสอบเลขคู่หรือเลขคี่ด้วย if-else
console.log('--- ข้อที่ 1: ตรวจสอบเลขคู่หรือเลขคี่ ---');

var number = 15;

if (number % 2 === 0) {
    console.log(number + ' เป็นเลขคู่');
} else {
    console.log(number + ' เป็นเลขคี่');
}

// ข้อที่ 2: สูตรคูณแม่ 2 ด้วย for loop และแม่ 3 ด้วย while loop
console.log('--- ข้อที่ 2: สูตรคูณแม่ 2 (for loop) ---');

for (var i = 1; i <= 10; i++) {
    var result = 2 * i;
    console.log('2 x ' + i + ' = ' + result);
}

console.log('--- สูตรคูณแม่ 3 (while loop) ---');

var j = 1;
while (j <= 10) {
    var result2 = 3 * j;
    console.log('3 x ' + j + ' = ' + result2);
    j++;
}

// ข้อที่ 3: นับถอยหลังจาก 10 ถึง 1
console.log('--- ข้อที่ 3: นับถอยหลังจาก 10 ถึง 1 ---');

for (var k = 10; k >= 1; k--) {
    console.log(k);
}

// ข้อที่ 4: ตรวจสอบช่วงวัย
console.log('--- ข้อที่ 4: ตรวจสอบช่วงวัย ---');

var age = 25;

if (age < 12) {
    console.log('วัยเด็ก');
} else if (age >= 12 && age < 18) {
    console.log('วัยรุ่น');
} else if (age >= 18) {
    console.log('วัยผู้ใหญ่');
}
