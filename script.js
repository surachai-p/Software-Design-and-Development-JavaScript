function showTime() {
    const now = new Date();
    
    // ดึงเวลาในรูปแบบไทย (15:30:45)
    const timeString = now.toLocaleTimeString('th-TH');

    alert("วันที่: " + timeString);
};

function displayMessage() {
    const message = document.getElementById('userInput').value;

    if (message === "") {
        alert("กรุณากรอกข้อความก่อนกดปุ่มครับ!");
    } else {
        alert("ข้อความที่คุณกรอกคือ: " + message);
    }
};

let name = "Nattapong Muanprasan";
let midtern_score = 100;
let final_score = 100;

let person ={
    name: "Nattapong Muanprasan",
    midtern_score: 100,
    final_score: 100
};

console.log("ตรวจสอบข้อมูล Person:", person);

// 2. แสดงผลบนหน้าเว็บที่ <p id="person"></p>
// เราจะเข้าถึง property ด้วยจุด (.) เช่น person.name
document.getElementById("human").innerHTML = 
    `ชื่อ: ${person.name} <br> คะแนนกลางภาค: ${person.midtern_score} <br>
    คะแนนปลายภาค: ${person.midtern_score} <br> คะแนนรวม: ${person.midtern_score + person.final_score}`;

// LAB 2.2
const math = 75;
const physics = 80;
const informationalTechnology = 90;

const averageScore = (math + physics + informationalTechnology) / 3;

console.log("คะแนนรายวิชา")
console.log("คณิตศาสตร์: " + math);
console.log("ฟิสิกส์: " + physics);
console.log("เทคโนโลยีสารสนเทศ: " + informationalTechnology);
console.log("คะแนนเฉลี่ย: " + averageScore.toFixed(2));

document.getElementById("average").innerHTML =
    `คะแนนรายวิชา<br>คณิตศาสตร์: ${math}<br>ฟิสิกส์: ${physics}<br>
    เทคโนโลยีสารสนเทศ: ${informationalTechnology}<br>คะแนนเฉลี่ย: ${averageScore.toFixed(2)}`;

// LAB 2.3
// ฟังก์ชันตรวจเลขคู่หรือเลขคี่
function calculatoddandeven() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        alert("กรุณากรอกตัวเลข");
        return;
    }

    if (number % 2 === 0) {
        alert(`เลข ${number} เป็นเลขคู่`);
    } else {
        alert(`เลข ${number} เป็นเลขคี่`);
    }
};

// Loop for สูตรคูณแม่ 2 และแม่ 3
function displayMultiplicationTables() {
    let output = "<h3>สูตรคูณแม่ 2:</h3>";
    for (let i = 1; i <= 12; i++) {
        output += `2 x ${i} = ${2 * i}<br>`;
    }

    output += "<h3>สูตรคูณแม่ 3:</h3>";
    let j = 1;
    while (j <= 12) {
        output += `3 x ${j} = ${3 * j}<br>`;
        j++;
    }
    document.getElementById("multiplicationTables").innerHTML = output;
};
displayMultiplicationTables();

// LAB 2.4.1
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const heightMeters = height / 100; 

    if (isNaN(weight) || isNaN(height)) {
        alert("กรุณากรอกน้ำหนักและส่วนสูงเป็นตัวเลข");
        return;
    }

    const bmi = weight / (heightMeters * heightMeters);
    const result = `Your BMI is ${bmi.toFixed(2)}`;

    document.getElementById("bmiResult").innerText = result;
};

function gretuser() {
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);

    if (name === "" || isNaN(age)) {
        alert("กรุณากรอกชื่อและอายุให้ถูกต้อง");
        return;
    }
    if (age < 13){
        alert(`สวัสดี ${name} คุณยังเด็กอยู่เลยยินดีที่ได้รู้จัก`);
    }else if (age >= 13 && age < 18){
        alert(`สวัสดี ${name} ว้าวโตขึ้นเป็นหนุ่มแล้วนะ`);
    }else {
        alert(`สวัสดี ${name} วันนี้ก็เริ่มเป็นผู้ใหญ่แล้วนะ`);
    }
};

function validatePassword() {
    const password = document.getElementById("passwordInput").value;
    if (password.length < 8) {
        alert("รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร");
    } else {
        alert("รหัสผ่านถูกต้อง");
    }   
};

// LAB 2.4.2
const calculateBMI2 = () => {
    const weight = parseFloat(document.getElementById("weight2").value);
    const height = parseFloat(document.getElementById("height2").value);
    const heightMeters = height / 100; 

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("กรุณากรอกน้ำหนักและส่วนสูงในช่อง Arrow Functions ให้ถูกต้อง");
        return;
    }
    const bmi = weight / (heightMeters * heightMeters);
    document.getElementById("bmiResult2").innerText = `Your BMI is ${bmi.toFixed(2)}`;
};

const greetUser2 = () => {
    const name = document.getElementById("nameInput2").value;
    const age = parseInt(document.getElementById("ageInput2").value);

    if (name === "" || isNaN(age)) {
        alert("กรุณากรอกชื่อและอายุในช่อง Arrow Functions ให้ถูกต้อง");
        return;
    }
    if (age < 13) {
        alert(`สวัสดี ${name} คุณยังเด็กอยู่เลย ยินดีที่ได้รู้จัก`);
    } else if (age >= 13 && age < 18) {
        alert(`สวัสดี ${name} ว้าว! โตขึ้นเป็นวัยรุ่นแล้วนะ`);
    } else {
        alert(`สวัสดี ${name} วันนี้ก็เริ่มเป็นผู้ใหญ่แล้วนะ`);
    }
};

const validatePassword2 = () => {
    const password = document.getElementById("passwordInput2").value;
    if (password.length < 8) {
        alert("รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร");
    } else {
        alert("รหัสผ่านถูกต้อง");
    }   
};