# การทดลอง พื้นฐาน JavaScript และการใช้งานร่วมกับ HTML/CSS
## การทดลองที่ 1 : ทำความรู้จักกับ JavaScript
###  การเพิ่ม JavaScript ลงในเว็บเพจ

JavaScript สามารถเพิ่มลงในเว็บเพจได้ 3 วิธี:

1. แบบ Inline: แทรก scipt ในแต่ละบรรทัดของ HTML Element
```html
<button onclick="alert('สวัสดี!')">คลิกที่นี่</button>
```

2. แบบ Internal Script: เขียน script ใน block   <script> </script>
```html
<script>
    alert('สวัสดี!');
</script>
```

3. แบบ External Script: เขียน script ในไฟล์แล้วเรียกใช้ใน HTML
   ไฟล์ script.js มีข้อมูลดังนี้
```javascript
    alert('สวัสดี!');
```
   ไฟล์ HTML มีการเรียกใช้ script ดังนี้
```html
<script src="script.js"></script>
```

### การทดลองที่ 1.1 : สร้างไฟล์ HTML และทดลองใช้ JavaScript ทั้ง 3 แบบ

สร้างไฟล์ `index.html`:
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ทดลอง JavaScript</title>
</head>
<body>
    <!-- Inline JavaScript -->
    <button onclick="alert('คลิกปุ่มที่ 1!')">ปุ่มที่ 1</button>

    <!-- ทดสอบ Internal JavaScript -->
    <button id="btn2">ปุ่มที่ 2</button>

    <!-- ทดสอบ External JavaScript -->
    <button id="btn3" onclick="hello3();">ปุ่มที่ 3</button>

    <!-- Internal JavaScript -->
    <script>
        document.getElementById('btn2').onclick = function() {
            alert('คลิกปุ่มที่ 2!');
        };
    </script>

    <!-- External JavaScript -->
  <!-- ต้องสร้างไฟล์ script.js มีโค้ดโปรแกรมในไฟล์ดังนี้
   function hello3(){
    alert('คลิกปุ่มที่ 3!');
    }
 -->
    <script src="script.js"></script>
</body>
</html>
```

### แบบฝึกปฏิบัติที่ 1: การใช้งาน JavaScript เบื้องต้น

1. สร้างหน้าเว็บที่มีปุ่ม 3 ปุ่ม:
   - ปุ่มที่ 1: ใช้ Inline JavaScript แสดงชื่อนักศึกษา
   - ปุ่มที่ 2: ใช้ Internal JavaScript แสดงวันที่ปัจจุบัน
   - ปุ่มที่ 3: ใช้ External JavaScript แสดงเวลาปัจจุบัน

2. เพิ่มกล่องข้อความและปุ่มสำหรับแสดงผล:
   - มีช่องกรอกข้อความ
   - มีปุ่มเมื่อคลิกแล้วจะแสดงข้อความที่กรอกในช่องข้อความ  (สามารถใช้ document.getElementById('id ของ textbox').value เพื่อดึงข้อมูลในช่อง)
### บันทึกผลการทดลอง 
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบฝึกปฏิบัติที่ 1</title>
</head>
<body>
    <h3>ทดสอบปุ่ม 3 แบบ</h3>
    <button onclick="alert('ชื่อ: อัครพนธ อรุณ ')">ปุ่มที่ 1 (ชื่อนักศึกษา)</button>

    <button id="btnDate">ปุ่มที่ 2 (วันที่ปัจจุบัน)</button>

    <button onclick="showTime()">ปุ่มที่ 3 (เวลาปัจจุบัน)</button>

    <hr>
    <h3>ทดสอบรับค่าจาก Textbox</h3>
    <input type="text" id="myInput" placeholder="พิมพ์ข้อความที่นี่...">
    <button onclick="showInput()">แสดงข้อความ</button>
    <p id="output"></p>

    <script>
        // โค้ดสำหรับปุ่มที่ 2 (วันที่)
        document.getElementById('btnDate').onclick = function() {
            let today = new Date();
            alert('วันที่ปัจจุบัน: ' + today.toLocaleDateString('th-TH'));
        };

        // โค้ดสำหรับดึงข้อมูลจาก Textbox
        function showInput() {
            let text = document.getElementById('myInput').value;
            document.getElementById('output').innerHTML = "คุณพิมพ์ว่า: " + text;
        }
    </script>

    <script src="script.js"></script>
</body>
</html>
```
```javascript
function showTime() {
    let now = new Date();
    alert('เวลาปัจจุบัน: ' + now.toLocaleTimeString('th-TH'));
}
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f560f00d-1e6f-4700-8089-620a309a4801" />


## การทดลองที่ 2: พื้นฐาน JavaScript
### 2.1 การประกาศตัวแปรและชนิดข้อมูล

JavaScript มีวิธีการประกาศตัวแปร 3 แบบ:
- `var`: ประกาศตัวแปรแบบเดิม (legacy) - ไม่แนะนำให้ใช้ในโค้ดสมัยใหม่
- `let`: ประกาศตัวแปรที่สามารถเปลี่ยนแปลงค่าได้ - เหมาะสำหรับค่าที่ต้องการเปลี่ยนแปลงในภายหลัง
- `const`: ประกาศตัวแปรที่ไม่สามารถเปลี่ยนแปลงค่าได้ - เหมาะสำหรับค่าคงที่

ชนิดข้อมูลพื้นฐานใน JavaScript:
1. Number: ตัวเลขทั้งจำนวนเต็มและทศนิยม
2. String: ข้อความ ใช้เครื่องหมาย '' หรือ ""
3. Boolean: ค่าความจริง true/false
4. Undefined: ตัวแปรที่ยังไม่ได้กำหนดค่า
5. Null: ตัวแปรที่ไม่มีค่า (ต่างจาก undefined)
6. Array
7. Object
   
### ตัวอย่าง การประกาศตัวแปรแต่ละแบบ
```javascript
// ประกาศตัวแปรแบบ let - สามารถเปลี่ยนแปลงค่าได้ในภายหลัง
let name = "สมชาย";     // String เก็บข้อความ
let age = 25;           // Number เก็บตัวเลข
let isStudent = true;   // Boolean เก็บค่าจริง/เท็จ

// ประกาศตัวแปรแบบ const - ไม่สามารถเปลี่ยนแปลงค่าได้หลังจากประกาศ
const PI = 3.14;            // ค่าคงที่ทางคณิตศาสตร์
const DAYS_IN_WEEK = 7;     // ค่าคงที่ที่ไม่ควรเปลี่ยนแปลง

// การเปลี่ยนแปลงค่าตัวแปร
name = "สมหญิง";   // ทำได้เพราะประกาศด้วย let
age = 26;          // สามารถเปลี่ยนค่าได้
// PI = 3.15;      // Error! ไม่สามารถเปลี่ยนค่า const ได้

// ตัวอย่างการใช้งาน undefined และ null
let uninitializedVar;           // มีค่าเป็น undefined โดยอัตโนมัติ
let emptyValue = null;          // กำหนดค่า null อย่างชัดเจน

// ตัวอย่างการประกาศ Array
let fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

// ตัวอย่างการประกาศ Object
let person = {
    name: "สมชาย",
    age: 25,
    isStudent: true
};
```

### 📝 แบบทดสอบที่ 2.1: การทดลองประกาศตัวแปร
1. สร้างตัวแปรเก็บข้อมูล รหัสนักศึกษา ชื่อนักศึกษา คะแนนสอบกลางภาค, คะแนนสอบปลายภาค โดยเลือกใช้ let หรือ const 
2. สร้าง Object สำหรับเก็บข้อมูลนักศึกษา  ประกอบด้วยข้อมูล รหัสนักศึกษา, ชื่อ, สาขาวิชา, เกรดเฉลี่ย

### บันทึกผลการทดลอง 2.1
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ 2.1</title>
</head>
<body>
    <h2>ผลการทดลอง 2.1: การประกาศตัวแปร</h2>
    <div id="result"></div>

    <script>
        let res = document.getElementById('result');
        
        // 1. ตัวแปรธรรมดา
        const studentId = "66012345";
        let studentName = "สมหญิง รักเรียน";
        let midterm = 25;
        let final = 45;
        
        res.innerHTML += `<p><b>ข้อมูลตัวแปร:</b> รหัส: ${studentId}, ชื่อ: ${studentName}, คะแนนกลางภาค: ${midterm}, ปลายภาค: ${final}</p>`;

        // 2. Object
        const studentObj = {
            id: "66012345",
            name: "สมหญิง รักเรียน",
            major: "เทคโนโลยีสารสนเทศ",
            gpa: 3.85
        };

        res.innerHTML += `<p><b>ข้อมูลจาก Object:</b><br>
        รหัส: ${studentObj.id} <br>
        ชื่อ: ${studentObj.name} <br>
        สาขา: ${studentObj.major} <br>
        เกรดเฉลี่ย: ${studentObj.gpa}</p>`;
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e6ba9bbb-53f9-4473-ac23-a15653ba367d" />



### 2.2 การดำเนินการทางคณิตศาสตร์

JavaScript มีตัวดำเนินการทางคณิตศาสตร์พื้นฐานดังนี้:
- `+` การบวก
- `-` การลบ
- `*` การคูณ
- `/` การหาร
- `%` การหารเอาเศษ (modulo)
- `**` การยกกำลัง (exponentiation)
- `++` การเพิ่มค่าทีละ 1 (increment)
- `--` การลดค่าทีละ 1 (decrement)

### แบบฝึกหัด 2.2: ทดลองใช้ตัวดำเนินการทางคณิตศาสตร์
```javascript
// กำหนดค่าตัวแปรเริ่มต้น
let x = 10;
let y = 5;

// การดำเนินการพื้นฐาน
let sum = x + y;      // บวก: 10 + 5 = 15
let diff = x - y;     // ลบ: 10 - 5 = 5
let product = x * y;  // คูณ: 10 * 5 = 50
let quotient = x / y; // หาร: 10 / 5 = 2
let remainder = x % y; // หารเอาเศษ: 10 % 5 = 0 (หาร 5 ลงตัว)

// การเพิ่ม/ลดค่าทีละ 1
let counter = 1;
counter++;            // เพิ่มค่าทีละ 1: counter = 2
counter--;            // ลดค่าทีละ 1: counter = 1

// การยกกำลัง
let squared = x ** 2;  // 10 ยกกำลัง 2 = 100
let cubed = x ** 3;    // 10 ยกกำลัง 3 = 1000

// การใช้ตัวดำเนินการร่วมกับการกำหนดค่า
let number = 5;
number += 3;          // เท่ากับ number = number + 3
number -= 2;          // เท่ากับ number = number - 2
number *= 4;          // เท่ากับ number = number * 4
number /= 2;          // เท่ากับ number = number / 2

```

### 📝 แบบทดสอบที่ 2.2: การคำนวณพื้นฐาน
1. เขียนโปรแกรม กำหนดคะแนน  3 วิชา แล้วหาค่าคะแนนเฉลี่ย แล้วแสดงผลการคำนวณ
2. เขียนโปรแกรม กำหนดชื่อสินค้า ราคาสินค้า คำนวณราคาสินค้าที่รวม VAT 7% แล้วแสดงผลการคำนวณ

### บันทึกผลการทดลอง 2.2
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ 2.2</title>
</head>
<body>
    <h2>ผลการทดลอง 2.2: การคำนวณ</h2>
    <div id="result"></div>

    <script>
        let res = document.getElementById('result');

        // 1. คำนวณคะแนนเฉลี่ย 3 วิชา
        let math = 80;
        let science = 75;
        let english = 88;
        let avg = (math + science + english) / 3;
        
        res.innerHTML += `<h3>1. คำนวณเกรดเฉลี่ย</h3>`;
        res.innerHTML += `<p>คะแนน 3 วิชา: Math=${math}, Science=${science}, English=${english}</p>`;
        res.innerHTML += `<p>คะแนนเฉลี่ยคือ: <b>${avg.toFixed(2)}</b></p>`;

        // 2. คำนวณ VAT 7%
        let productName = "เมาส์ไร้สาย";
        let price = 500;
        let vat = price * 0.07;
        let total = price + vat;

        res.innerHTML += `<h3>2. คำนวณราคาสินค้า (VAT 7%)</h3>`;
        res.innerHTML += `<p>สินค้า: ${productName} <br> ราคาป้าย: ${price} บาท <br> ภาษี (VAT 7%): ${vat} บาท <br> <b>ราคาสุทธิ: ${total} บาท</b></p>`;
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cb0575db-b023-4545-8bb8-ff068fb2f664" />


### 2.3 การควบคุมการทำงาน

JavaScript มีโครงสร้างควบคุมการทำงานหลักๆ ดังนี้:

1. เงื่อนไข (Conditionals):
   - `if`: ตรวจสอบเงื่อนไขเดียว
   - `if...else`: ตรวจสอบเงื่อนไขและมีทางเลือก
   - `if...else if...else`: ตรวจสอบหลายเงื่อนไข
   - `switch`: เลือกทำงานตามค่าที่กำหนด

2. การวนซ้ำ (Loops):
   - `for`: วนซ้ำตามจำนวนรอบที่กำหนด
   - `while`: วนซ้ำตราบใดที่เงื่อนไขเป็นจริง
   - `do...while`: ทำงานอย่างน้อย 1 ครั้ง แล้ววนซ้ำตามเงื่อนไข
   - `for...of`: วนซ้ำสำหรับข้อมูลแบบ iterable
   - `for...in`: วนซ้ำสำหรับ properties ใน object


```javascript
// 1. การใช้ if-else
let score = 75;

// ตรวจสอบเงื่อนไขตามลำดับ
if (score >= 80) {         // ถ้าคะแนน >= 80
    console.log("เกรด A");
} else if (score >= 70) {  // ถ้าคะแนน >= 70 แต่ < 80
    console.log("เกรด B");
} else {                   // ถ้าไม่ตรงเงื่อนไขใดเลย
    console.log("เกรด C");
}

// 2. การใช้ switch
let day = 1;
switch (day) {
    case 1:
        console.log("วันจันทร์");
        break;              // break เพื่อออกจาก switch
    case 2:
        console.log("วันอังคาร");
        break;
    default:               // ค่าเริ่มต้นถ้าไม่ตรงกับ case ใดๆ
        console.log("วันอื่นๆ");
}

// 3. การใช้ for loop
// วนซ้ำ 5 รอบ: เริ่มที่ 1, ทำจนถึง 5, เพิ่มค่าทีละ 1
for (let i = 1; i <= 5; i++) {
    console.log("รอบที่", i);
}

// 4. การใช้ while loop
// วนซ้ำตราบใดที่เงื่อนไขเป็นจริง
let count = 1;
while (count <= 3) {      // ทำซ้ำตราบใดที่ count <= 3
    console.log("นับ:", count);
    count++;              // เพิ่มค่า count ทีละ 1
}

// 5. การใช้ do...while loop
// ทำงานอย่างน้อย 1 ครั้ง แล้วค่อยตรวจสอบเงื่อนไข
let num = 1;
do {
    console.log("ตัวเลข:", num);
    num++;
} while (num <= 3);

// 6. การใช้ for...of loop กับ array
let fruits = ['แอปเปิ้ล', 'กล้วย', 'ส้ม'];
for (let fruit of fruits) {
    console.log("ผลไม้:", fruit);
}

// 7. การใช้ for...in loop กับ object
let person = {
    name: 'สมชาย',
    age: 25,
    job: 'โปรแกรมเมอร์'
};
for (let key in person) {
    console.log(key + ":", person[key]);
}

// 8. การใช้เงื่อนไขซ้อน (Nested Conditions)
let age = 18;
let hasPermission = true;

if (age >= 18) {
    if (hasPermission) {
        console.log("สามารถเข้าใช้งานได้");
    } else {
        console.log("ต้องได้รับอนุญาตก่อน");
    }
} else {
    console.log("อายุไม่ถึงเกณฑ์");
}

// 9. การใช้ตัวดำเนินการลอจิคัล (Logical Operators)
let isStudent = true;
let isMember = false;

if (isStudent && isMember) {           // AND (&&)
    console.log("เป็นทั้งนักเรียนและสมาชิก");
} else if (isStudent || isMember) {    // OR (||)
    console.log("เป็นอย่างใดอย่างหนึ่ง");
} else {
    console.log("ไม่เป็นทั้งสองอย่าง");
}

// 10. การใช้ break และ continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;    // ข้ามการทำงานที่เหลือในรอบนี้
    }
    if (i === 4) {
        break;       // ออกจาก loop ทันที
    }
    console.log("ตัวเลข:", i);
}
```


### 📝 แบบทดสอบที่ 2.3: การควบคุมการทำงาน
1. กำหนดตัวเลข และตรวจสอบว่าตัวเลขที่กำหนดเป็นเลขคู่หรือเลขคี่
2. สร้าง loop แบบ for แสดงตารางสูตรคูณ แม่ 2 และ loop แบบ while แสดงสูตรคูณ แม่ 3
3. เขียนโปรแกรมนับถอยหลังจาก 10 ถึง 1
4. เขียนโปรแกรมกำหนดอายุ และตรวจสอบช่วงวัยตามอายุที่กำหนด (กำหนดอายุแต่ละช่วงวัย วัยเด็ก วัยรุ่น วัยผู้ใหญ่)

### บันทึกผลการทดลอง 2.3
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ 2.3</title>
</head>
<body>
    <h2>ผลการทดลอง 2.3: ควบคุมการทำงาน</h2>
    <div id="result"></div>

    <script>
        let res = document.getElementById('result');
        let html = "";

        // 1. เช็คเลขคู่/คี่
        let num = 15;
        html += `<h3>1. เลขคู่/เลขคี่</h3>`;
        if(num % 2 === 0) html += `<p>${num} เป็น <b>เลขคู่</b></p>`;
        else html += `<p>${num} เป็น <b>เลขคี่</b></p>`;

        // 2. สูตรคูณแม่ 2 (for) และแม่ 3 (while)
        html += `<h3>2. สูตรคูณ</h3><div style="display:flex; gap:20px;"><div>`;
        html += `<b>แม่ 2 (ใช้ for)</b><br>`;
        for(let i=1; i<=12; i++) { html += `2 x ${i} = ${2*i}<br>`; }
        html += `</div><div><b>แม่ 3 (ใช้ while)</b><br>`;
        let j = 1;
        while(j <= 12) { html += `3 x ${j} = ${3*j}<br>`; j++; }
        html += `</div></div>`;

        // 3. นับถอยหลัง 10 ถึง 1
        html += `<h3>3. นับถอยหลัง 10 ถึง 1</h3>`;
        for(let k=10; k>=1; k--) { html += `${k} `; }

        // 4. ตรวจสอบช่วงวัย
        let age = 16;
        html += `<h3>4. ตรวจสอบช่วงวัย (อายุ ${age} ปี)</h3>`;
        if(age <= 12) html += `<p>วัยเด็ก</p>`;
        else if(age <= 19) html += `<p>วัยรุ่น</p>`;
        else html += `<p>วัยผู้ใหญ่</p>`;

        res.innerHTML = html;
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/30ac519a-bd10-4a9c-b7dd-d58d788e8748" />


### 2.4 Functions และ Arrow Functions

Functions คือกลุ่มคำสั่งที่สามารถนำมาใช้ซ้ำได้ ใน JavaScript มีวิธีการเขียน function 2 แบบหลักๆ:

1. Function แบบปกติ (Regular Functions):
   - ใช้คำสั่ง `function` ในการประกาศ
   - สามารถมีหรือไม่มีพารามิเตอร์ก็ได้
   - สามารถ return ค่ากลับหรือไม่ก็ได้
   - มี `this` context ของตัวเอง

2. Arrow Functions:
   - เป็นวิธีเขียนแบบสั้นที่มาใน ES6
   - ไม่มี `this` context ของตัวเอง
   - เหมาะสำหรับ function สั้นๆ
   - มักใช้ใน callback functions

#### ตัวอย่างการสร้างและเรียกใช้ Function 

```javascript
// 1. Function พื้นฐาน - ไม่มีพารามิเตอร์และไม่ return ค่า
function sayHello() {
    console.log("สวัสดี!");
}
sayHello();  // เรียกใช้ function: แสดง "สวัสดี!"

// 2. Function ที่รับพารามิเตอร์
function greet(name) {
    console.log("สวัสดี " + name);
}
greet("สมชาย");  // แสดง: "สวัสดี สมชาย"

// 3. Function ที่ return ค่า
function add(a, b) {
    return a + b;  // ส่งค่าผลบวกกลับ
}
let sum = add(5, 3);  // sum = 8

// 4. Function ที่มีค่าเริ่มต้นของพารามิเตอร์
function greetWithTitle(name, title = "คุณ") {
    console.log("สวัสดี " + title + " " + name);
}
greetWithTitle("สมชาย");          // แสดง: "สวัสดี คุณ สมชาย"
greetWithTitle("สมชาย", "ดร.");   // แสดง: "สวัสดี ดร. สมชาย"

// 5. Function ที่รับหลายพารามิเตอร์ (Rest Parameters)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));  // แสดง: 10

// 6. Function ที่ return หลายค่าโดยใช้ Object
function getPersonInfo() {
    return {
        name: "สมชาย",
        age: 25,
        job: "โปรแกรมเมอร์"
    };
}
let person = getPersonInfo();
console.log(person.name);  // แสดง: "สมชาย"

// 7. Function ที่เป็น Method ใน Object
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(5, 3));      // แสดง: 8
console.log(calculator.subtract(5, 3));  // แสดง: 2

// 8. Nested Function (Function ซ้อน Function)
function outer(x) {
    function inner(y) {
        return x + y;  // inner function สามารถเข้าถึงตัวแปรของ outer function
    }
    return inner;
}
let addFive = outer(5);
console.log(addFive(3));  // แสดง: 8

// 9. Callback Function
function process(callback) {
    console.log("กำลังประมวลผล...");
    callback();  // เรียกใช้ function ที่ส่งเข้ามา
}
process(function() {
    console.log("เสร็จสิ้น!");
});

// 10. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Function นี้ทำงานทันทีที่ถูกประกาศ");
})();
```


### 📝 แบบทดสอบที่ 2.4.1: Functions
1. สร้าง function คำนวณค่า BMI (ดัชนีมวลกาย) จากน้ำหนักและส่วนสูง
2. สร้าง function ที่รับชื่อและอายุ แล้วแสดงข้อความทักทายที่เหมาะสมกับอายุ
3. เขียน function ตรวจสอบรหัสผ่านว่ามีความยาวมากกว่า 8 ตัวอักษรหรือไม่

### บันทึกผลการทดลอง 2.4.1
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ 2.4.1</title>
</head>
<body>
    <h2>ผลการทดลอง 2.4.1: Regular Functions</h2>
    <div id="result"></div>

    <script>
        let res = document.getElementById('result');
        let html = "";

        // 1. Function คำนวณ BMI
        function calcBMI(weight, heightM) {
            return weight / (heightM * heightM);
        }
        html += `<p>1. คำนวณ BMI (นน. 70, สส. 1.75): <b>${calcBMI(70, 1.75).toFixed(2)}</b></p>`;

        // 2. Function ทักทายตามอายุ
        function greet(name, age) {
            if(age < 18) return `สวัสดีน้อง ${name}`;
            else return `สวัสดีคุณ ${name}`;
        }
        html += `<p>2. ทักทาย (สมชาย, อายุ 15): <b>${greet("สมชาย", 15)}</b></p>`;

        // 3. Function ตรวจสอบรหัสผ่าน (> 8 ตัว)
        function checkPassword(pass) {
            return pass.length > 8;
        }
        html += `<p>3. ตรวจสอบรหัสผ่าน '12345': <b>${checkPassword("12345")}</b></p>`;
        html += `<p>3. ตรวจสอบรหัสผ่าน 'P@ssw0rd99': <b>${checkPassword("P@ssw0rd99")}</b></p>`;

        res.innerHTML = html;
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/21ab6e80-58f1-4647-bd2e-8cbaef101395" />




#### 2.4.2 Arrow Function
Arrow Function เป็นวิธีการเขียน function แบบสั้นๆ ที่มาพร้อมกับ JavaScript เวอร์ชัน ES6

### ตัวอย่างการใช้ Arrow Function
```javascript
// Arrow Function แบบพื้นฐาน
const greet = (name) => {
    return "สวัสดี " + name;
};

// Arrow Function แบบย่อ (ถ้ามีคำสั่งเดียว)
const greetShort = name => "สวัสดี " + name;

// Arrow Function ที่มีหลายพารามิเตอร์
const multiply = (a, b) => a * b;

// Arrow Function ที่ไม่มีพารามิเตอร์
const getRandomNumber = () => Math.random();

// ตัวอย่างการใช้ Arrow Function กับ Array
const numbers = [1, 2, 3, 4, 5];

// การใช้ map กับ Arrow Function
const doubled = numbers.map(num => num * 2);
console.log("เลขคูณ 2:", doubled); // [2, 4, 6, 8, 10]

// การใช้ filter กับ Arrow Function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("เลขคู่:", evenNumbers); // [2, 4]
```
### แบบทดสอบ 2.4.2 เขียนฟังก์ชันต่อไปนี้ในรูปแบบ Arrow function
1. สร้าง function คำนวณค่า BMI (ดัชนีมวลกาย) จากน้ำหนักและส่วนสูง
2. สร้าง function ที่รับชื่อและอายุ แล้วแสดงข้อความทักทายที่เหมาะสมกับอายุ
3. เขียน function ตรวจสอบรหัสผ่านว่ามีความยาวมากกว่า 8 ตัวอักษรหรือไม่

### บันทึกผลการทดลอง 2.4.2
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ 2.4.2</title>
</head>
<body>
    <h2>ผลการทดลอง 2.4.2: Arrow Functions</h2>
    <div id="result"></div>

    <script>
        let res = document.getElementById('result');
        let html = "";

        // 1. Arrow Function คำนวณ BMI
        const calcBMI = (weight, heightM) => weight / (heightM * heightM);
        html += `<p>1. คำนวณ BMI (นน. 65, สส. 1.70): <b>${calcBMI(65, 1.70).toFixed(2)}</b></p>`;

        // 2. Arrow Function ทักทายตามอายุ
        const greet = (name, age) => age < 18 ? `สวัสดีน้อง ${name}` : `สวัสดีคุณ ${name}`;
        html += `<p>2. ทักทาย (สมหญิง, อายุ 20): <b>${greet("สมหญิง", 20)}</b></p>`;

        // 3. Arrow Function ตรวจสอบรหัสผ่าน
        const checkPassword = pass => pass.length > 8;
        html += `<p>3. ตรวจสอบรหัสผ่าน 'Secret123': <b>${checkPassword("Secret123")}</b></p>`;

        res.innerHTML = html;
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7e2ffbf5-b771-421e-ba06-f7aecc6b194b" />



## การทดลองที่ 3 : การใช้ JavaScript กับ HTML และ CSS
### การทดลองที่ 3.1 การสร้างปุ่มและจัดการ Event ด้วย JavaScript
### ตัวอย่างที่ 1 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    <button onclick="showMessage()">คลิกที่นี่</button>
    
    <script>
    function showMessage() {
        alert("สวัสดีครับ/ค่ะ!");
    }
    </script>
</body>
</html>
```
### ตัวอย่างที่ 2
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    Enter name<input type="text" id="name">
    <button onclick="showMessage(document.getElementById('name').value)">คลิกที่นี่</button>
    
    <script>
    function showMessage(name) {
        alert("สวัสดีครับ/ค่ะ คุณ :",name);
    }
    </script>
</body>
</html>
```
### ตัวอย่างที่ 3 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    Enter name<input type="text" id="name">
    <p id="output_value"></p>
    <button onclick="showMessage(document.getElementById('name').value)">คลิกที่นี่</button>
    
    <script>
    function showMessage(name) {
        document.getElementById('output_value').innerHTML='Hello' + name;
    }
    </script>
</body>
</html>
```

### แบบทดสอบ 3.1 
1. เขียนเว็บ รับค่าน้ำหนักและส่วนสูง ทำการ คำนวณค่า BMI (ดัชนีมวลกาย) แล้วแสดงผลว่า อ้วน, ผอม หรือ สมส่วน โดยเขียนฟังก์ชันแบบ Arrow function

### บันทึกผลการทดลอง 3.1
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ 3.1</title>
</head>
<body>
    <h2>โปรแกรมคำนวณ BMI (Arrow Function)</h2>
    น้ำหนัก (kg): <input type="number" id="weight"><br><br>
    ส่วนสูง (cm): <input type="number" id="height"><br><br>
    <button onclick="processBMI()">คำนวณ</button>
    
    <h3 id="result"></h3>

    <script>
        const getBMI = (w, hCm) => {
            let hM = hCm / 100;
            return w / (hM * hM);
        };

        const processBMI = () => {
            let w = document.getElementById('weight').value;
            let h = document.getElementById('height').value;
            
            if(!w || !h) { alert("กรอกข้อมูลให้ครบ!"); return; }

            let bmi = getBMI(w, h);
            let status = bmi < 18.5 ? "ผอม" : (bmi <= 24.9 ? "สมส่วน" : "อ้วน");

            document.getElementById('result').innerHTML = `BMI: ${bmi.toFixed(2)} -> ${status}`;
        };
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/08fccf51-6729-4d50-8a26-ad64d580164c" />


## การทดลองที่ 3.2 : การสร้างฟอร์มสำหรับจองห้องพัก
การสร้างฟอร์มลงทะเบียนเพื่อรวบรวมข้อมูลที่จำเป็นสำหรับการจองห้องพัก

### ขั้นตอนที่ 3.2.1: สร้างโครงสร้าง HTML พื้นฐาน

สร้างไฟล์ `index.html` และใส่โค้ดต่อไปนี้:

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>
</head>
<body>
    <h1>แบบฟอร์มจองห้องพัก</h1>
    
    <form id="bookingForm">
        <div>
            <label for="fullname">ชื่อ-นามสกุล:</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>

        <div>
            <label for="email">อีเมล:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div>
            <label for="phone">เบอร์โทรศัพท์:</label>
            <input type="tel" id="phone" name="phone" required>
        </div>

        <div>
            <label for="checkin">วันที่เช็คอิน:</label>
            <input type="date" id="checkin" name="checkin" required>
        </div>

        <div>
            <label for="checkout">วันที่เช็คเอาท์:</label>
            <input type="date" id="checkout" name="checkout" required>
        </div>

        <div>
            <label for="roomtype">ประเภทห้องพัก:</label>
            <select id="roomtype" name="roomtype" required>
                <option value="">กรุณาเลือกประเภทห้องพัก</option>
                <option value="standard">ห้องมาตรฐาน</option>
                <option value="deluxe">ห้องดีลักซ์</option>
                <option value="suite">ห้องสวีท</option>
            </select>
        </div>

        <div>
            <label for="guests">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="guests" name="guests" min="1" max="4" required>
        </div>

        <button type="submit">จองห้องพัก</button>
    </form>
</body>
</html>
```

### ขั้นตอนที่ 3.2.2 : การปรับแต่งด้วย CSS

เพิ่มความสวยงามให้กับฟอร์มด้วย CSS โดยเพิ่ม `<style>` ในส่วน `<head>` ของไฟล์ HTML:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>
    <style>
        body {
            font-family: 'Sarabun', sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }

        form {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        div {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #34495e;
            font-weight: bold;
        }

        input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52,152,219,0.3);
        }

        button {
            background-color: #2980b9;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
        }

        button:hover {
            background-color: #3498db;
        }

        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
        }
    </style>
</head>
```

### คำอธิบาย CSS:

1. ใช้ `max-width` และ `margin: 0 auto` เพื่อจัดกึ่งกลางฟอร์ม
2. จัดการ layout ด้วย `display: block` และ `width: 100%`
3. เพิ่มเอฟเฟกต์ `hover` และ `focus`
4. ใช้ `box-shadow` เพื่อเพิ่มมิติการแสดงผล
5. รองรับการแสดงผลบนมือถือด้วย `@media`

### ผลการทดลอง
ทดสอบปรับแต่ง CSS ในแต่ละส่วน แล้วเขียน สรุปผลการทดลองว่าได้ทดลองเปลี่ยนส่วนใด แล้วผลเป็นอย่างไร พร้อมแนบรูปประกอบการทดลอง

### บันทึกผลการทดลอง 3.2.2
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ระบบจองห้องพักออนไลน์</title>
    <style>
        body { font-family: sans-serif; padding: 20px; background: #f5f5f5; }
        form { background: white; padding: 20px; max-width: 400px; border-radius: 8px; }
        div { margin-bottom: 15px; }
        input, select { width: 100%; padding: 8px; box-sizing: border-box; }
        button { background: #2980b9; color: white; padding: 10px; width: 100%; border: none; }
    </style>
</head>
<body>
    <h2>ฟอร์มจองห้องพัก</h2>
    <form id="bookingForm">
        <div><label>ชื่อ-นามสกุล:</label><input type="text" id="fullname" required></div>
        <div><label>เบอร์โทร:</label><input type="tel" id="phone" required></div>
        <div><label>วันที่เช็คอิน:</label><input type="date" id="checkin" required></div>
        <div><label>วันที่เช็คเอาท์:</label><input type="date" id="checkout" required></div>
        <div><label>ประเภทห้อง:</label>
            <select id="roomtype" required>
                <option value="">เลือกห้อง</option>
                <option value="standard">มาตรฐาน</option>
                <option value="deluxe">ดีลักซ์</option>
                <option value="suite">สวีท</option>
            </select>
        </div>
        <div><label>จำนวนคน (1-4):</label><input type="number" id="guests" min="1" max="4" required></div>
        <button type="submit">จองห้องพัก</button>
    </form>

    <script>
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const checkin = new Date(document.getElementById('checkin').value);
            const checkout = new Date(document.getElementById('checkout').value);
            const today = new Date(); today.setHours(0,0,0,0);
            
            if (checkin < today) { alert('ห้ามเลือกวันในอดีต'); return; }
            if (checkout <= checkin) { alert('เช็คเอาท์ต้องหลังเช็คอิน'); return; }
            
            const phone = document.getElementById('phone').value;
            if (!/^[0-9]{10}$/.test(phone)) { alert('เบอร์โทรต้อง 10 หลัก'); return; }
            
            alert('จองห้องพักเรียบร้อยแล้ว!');
            this.reset();
        });

        document.getElementById('checkin').addEventListener('change', function() {
            document.getElementById('checkout').min = this.value;
        });

        document.getElementById('roomtype').addEventListener('change', function() {
            const maxGuests = this.value === 'standard' ? 2 : (this.value === 'deluxe' ? 3 : 4);
            document.getElementById('guests').max = maxGuests;
        });
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5430c2c7-b06f-4479-8d6b-0a37246355fc" />



## ขั้นตอนที่ 3.2.3: การเพิ่มฟังก์ชันด้วย JavaScript

เพิ่มโค้ด JavaScript ก่อนปิด `</body>`:

```html
<script>
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // ตรวจสอบวันที่
        const checkin = new Date(document.getElementById('checkin').value);
        const checkout = new Date(document.getElementById('checkout').value);
        const today = new Date();
        
        if (checkin < today) {
            alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
            return;
        }
        
        if (checkout <= checkin) {
            alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
            return;
        }
        
        // ตรวจสอบรูปแบบเบอร์โทร
        const phone = document.getElementById('phone').value;
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
            return;
        }
        
        // คำนวณจำนวนวันที่พัก
        const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
        
        // แสดงสรุปการจอง
        const roomtype = document.getElementById('roomtype');
        const roomtypeText = roomtype.options[roomtype.selectedIndex].text;
        
        const summary = `
            สรุปการจอง:
            - ชื่อผู้จอง: ${document.getElementById('fullname').value}
            - ประเภทห้อง: ${roomtypeText}
            - วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}
            - วันที่ออก: ${checkout.toLocaleDateString('th-TH')}
            - จำนวนวันที่พัก: ${days} วัน
            - จำนวนผู้เข้าพัก: ${document.getElementById('guests').value} ท่าน
        `;
        
        if (confirm(summary + '\n\nยืนยันการจองห้องพัก?')) {
            alert('จองห้องพักเรียบร้อยแล้ว');
            this.reset();
        }
    });

    // เพิ่มการตรวจสอบวันที่แบบ Real-time
    document.getElementById('checkin').addEventListener('change', function() {
        document.getElementById('checkout').min = this.value;
    });

    // จำกัดจำนวนผู้เข้าพักตามประเภทห้อง
    document.getElementById('roomtype').addEventListener('change', function() {
        const guestsInput = document.getElementById('guests');
        if (this.value === 'standard') {
            guestsInput.max = 2;
        } else if (this.value === 'deluxe') {
            guestsInput.max = 3;
        } else if (this.value === 'suite') {
            guestsInput.max = 4;
        }
        
        if (guestsInput.value > guestsInput.max) {
            guestsInput.value = guestsInput.max;
        }
    });
</script>
```

### คำอธิบาย JavaScript:

1. ตรวจสอบความถูกต้องของข้อมูล:
   - วันที่เช็คอินต้องไม่เป็นวันที่ผ่านมาแล้ว
   - วันที่เช็คเอาท์ต้องมาหลังวันเช็คอิน
   - เบอร์โทรศัพท์ต้องมี 10 หลัก

2. เพิ่มฟังก์ชันการโต้ตอบ:
   - แสดงสรุปการจองก่อนยืนยัน
   - รีเซ็ตฟอร์มหลังการจอง
   - ปรับจำนวนผู้เข้าพักตามประเภทห้อง

3. การตรวจสอบแบบ Real-time:
   - ตรวจสอบวันที่เช็คอิน-เช็คเอาท์
   - ปรับจำนวนผู้เข้าพักสูงสุดตามประเภทห้อง
</body>
</html>
```

### ผลการทดลอง
ทดสอบปรับแต่ง JavaScript ในแต่ละส่วน แล้วอธิบายโค้ดในแต่ละส่วน เขียนสรุปผลการทดลองว่าได้ทดลองเปลี่ยนส่วนใด แล้วผลเป็นอย่างไร พร้อมแนบรูปประกอบการทดลอง

### บันทึกผลการทดลอง 3.2.3
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>

    <style>
        body {
            font-family: 'Sarabun', sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
        }

        form {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        div { margin-bottom: 15px; }

        label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }

        input, select {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ddd;
        }

        input:focus, select:focus {
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52,152,219,0.3);
            outline: none;
        }

        button {
            width: 100%;
            padding: 12px;
            background: #2980b9;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background: #3498db;
        }
    </style>
</head>
<body>

<h1>แบบฟอร์มจองห้องพัก</h1>

<form id="bookingForm">

    <div>
        <label>ชื่อ-นามสกุล</label>
        <input type="text" id="fullname" required>
    </div>

    <div>
        <label>อีเมล</label>
        <input type="email" id="email" required>
    </div>

    <div>
        <label>เบอร์โทรศัพท์</label>
        <input type="tel" id="phone" required>
    </div>

    <div>
        <label>วันที่เช็คอิน</label>
        <input type="date" id="checkin" required>
    </div>

    <div>
        <label>วันที่เช็คเอาท์</label>
        <input type="date" id="checkout" required>
    </div>

    <div>
        <label>ประเภทห้องพัก</label>
        <select id="roomtype" required>
            <option value="">เลือกประเภทห้อง</option>
            <option value="standard">ห้องมาตรฐาน</option>
            <option value="deluxe">ห้องดีลักซ์</option>
            <option value="suite">ห้องสวีท</option>
        </select>
    </div>

    <div>
        <label>จำนวนผู้เข้าพัก</label>
        <input type="number" id="guests" min="1" max="4" required>
    </div>

    <button type="submit">จองห้องพัก</button>

</form>

<script>
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const today = new Date();

    if (checkin < today) {
        alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
        return;
    }

    if (checkout <= checkin) {
        alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
        return;
    }

    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
        return;
    }

    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));

    const roomtype = document.getElementById('roomtype');
    const roomtypeText = roomtype.options[roomtype.selectedIndex].text;

    const summary =
`สรุปการจอง:
ชื่อผู้จอง: ${document.getElementById('fullname').value}
ประเภทห้อง: ${roomtypeText}
วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}
วันที่ออก: ${checkout.toLocaleDateString('th-TH')}
จำนวนวันที่พัก: ${days} วัน
จำนวนผู้เข้าพัก: ${document.getElementById('guests').value} ท่าน`;

    if (confirm(summary + '\n\nยืนยันการจอง?')) {
        alert('จองห้องพักเรียบร้อยแล้ว');
        this.reset();
    }
});


document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
});


document.getElementById('roomtype').addEventListener('change', function() {
    const guests = document.getElementById('guests');

    if (this.value === 'standard') guests.max = 2;
    else if (this.value === 'deluxe') guests.max = 3;
    else if (this.value === 'suite') guests.max = 4;

    if (guests.value > guests.max) {
        guests.value = guests.max;
    }
});
</script>

</body>
</html>
```
**รูปผลการทดลอง**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f049c485-1c51-4aba-af2f-60165c51d279" />



## คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
