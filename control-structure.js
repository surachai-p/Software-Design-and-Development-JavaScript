//แบบทดสอบที่ 2.3 การควบคุมการทำงาน

// ฟังก์ชันช่วยแสดงผล
function show(text) {
    document.body.innerHTML += text + "<br>";
}

// --------------------
// 1. ตรวจสอบเลขคู่หรือเลขคี่
// --------------------
let number = 8;

document.body.innerHTML += "<h3>ข้อ 1 ตรวจสอบเลขคู่หรือเลขคี่</h3>";

if (number % 2 === 0) {
    show(number + " เป็นเลขคู่");
} else {
    show(number + " เป็นเลขคี่");
}

document.body.innerHTML += "<hr>";


// --------------------
// 2. ตารางสูตรคูณ
// --------------------
document.body.innerHTML += "<h3>ข้อ 2 ตารางสูตรคูณ</h3>";

// แม่ 2 (for)
show("<b>สูตรคูณแม่ 2</b>");
for (let i = 1; i <= 12; i++) {
    show("2 x " + i + " = " + (2 * i));
}

document.body.innerHTML += "<br>";

// แม่ 3 (while)
show("<b>สูตรคูณแม่ 3</b>");
let count = 1;
while (count <= 12) {
    show("3 x " + count + " = " + (3 * count));
    count++;
}

document.body.innerHTML += "<hr>";


// --------------------
// 3. นับถอยหลัง
// --------------------
document.body.innerHTML += "<h3>ข้อ 3 นับถอยหลังจาก 10 ถึง 1</h3>";

for (let i = 10; i >= 1; i--) {
    show(i);
}

document.body.innerHTML += "<hr>";


// --------------------
// 4. ตรวจสอบช่วงวัย
// --------------------
document.body.innerHTML += "<h3>ข้อ 4 ตรวจสอบช่วงวัย</h3>";

let age = 18;

if (age <= 12) {
    show("อายุ " + age + " ปี : วัยเด็ก");
} else if (age <= 19) {
    show("อายุ " + age + " ปี : วัยรุ่น");
} else {
    show("อายุ " + age + " ปี : วัยผู้ใหญ่");
}