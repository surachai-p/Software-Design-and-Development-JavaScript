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
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ทดลอง JavaScript</title>
</head>
<body>

    <h2>ทดลอง JavaScript 3 แบบ</h2>

    <!-- ปุ่มที่ 1: Inline JavaScript -->
    <button onclick="alert('ชื่อ: ณัชพล')">
        ปุ่มที่ 1 (แสดงชื่อ)
    </button>

    <br><br>

    <!-- ปุ่มที่ 2: Internal JavaScript -->
    <button id="btn2">
        ปุ่มที่ 2 (แสดงวันที่)
    </button>

    <br><br>

    <!-- ปุ่มที่ 3: External JavaScript -->
    <button onclick="showTime()">
        ปุ่มที่ 3 (แสดงเวลา)
    </button>

    <hr>

    <h3>แสดงข้อความจากช่องกรอก</h3>

    <!-- กล่องข้อความ -->
    <input type="text" id="textbox" placeholder="พิมพ์ข้อความที่นี่">

    <!-- ปุ่มแสดงข้อความ -->
    <button onclick="showText()">แสดงข้อความ</button>

    <!-- พื้นที่แสดงผล -->
    <p id="result"></p>

    <!-- Internal JavaScript -->
    <script>
        // ปุ่มที่ 2 แสดงวันที่
        document.getElementById('btn2').onclick = function () {
            const today = new Date();
            alert("วันที่วันนี้: " + today.toLocaleDateString());
        };

        // แสดงข้อความจาก textbox
        function showText() {
            const text = document.getElementById('textbox').value;
            document.getElementById('result').innerText = "คุณพิมพ์: " + text;
        }
    </script>

    <!-- External JavaScript -->
    <script src="script.js"></script>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 1](![alt text](image.png))

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
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ข้อมูลนักศึกษา</title>
</head>
<body>

<h2>ข้อมูลนักศึกษา</h2>
<p id="output"></p>

<script>
    // =========================
    // ตัวแปรเก็บข้อมูลพื้นฐาน
    // =========================
    const studentId = "68030084";
    const studentName = "ณัชพล อ่อนบาง";
    const midtermScore = 80;
    const finalScore = 88;

    // =========================
    // Object นักศึกษา
    // =========================
    const student = {
        id: studentId,
        name: studentName,
        major: "Information Technology",
        gpa: 3.45
    };

    // =========================
    // แสดงผลใน Console
    // =========================
    console.log(student);

    // =========================
    // แสดงผลบนหน้าเว็บ
    // =========================
    document.getElementById("output").innerHTML =
        "รหัสนักศึกษา: " + student.id + "<br>" +
        "ชื่อ: " + student.name + "<br>" +
        "คะแนนกลางภาค: " + midtermScore + "<br>" +
        "คะแนนปลายภาค: " + finalScore + "<br><br>" +
        "สาขาวิชา: " + student.major + "<br>" +
        "เกรดเฉลี่ย (GPA): " + student.gpa;
</script>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.1](![alt text](image-3.png))


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
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>คำนวณราคาสินค้ารวม VAT</title>
</head>
<body>

<h2>โปรแกรมคำนวณราคาสินค้ารวม VAT 7%</h2>

<p id="output"></p>

<script>
    // =========================
    // กำหนดข้อมูลสินค้า
    // =========================
    const productName = "เมาส์ไร้สาย";
    const productPrice = 500;

    // =========================
    // คำนวณ VAT
    // =========================
    const vat = productPrice * 0.07;
    const totalPrice = productPrice + vat;

    // =========================
    // แสดงผลใน Console
    // =========================
    console.log("ชื่อสินค้า:", productName);
    console.log("ราคาสินค้า:", productPrice);
    console.log("VAT:", vat);
    console.log("ราคารวม:", totalPrice);

    // =========================
    // แสดงผลบนหน้าเว็บ
    // =========================
    document.getElementById("output").innerHTML =
        "ชื่อสินค้า: " + productName + "<br>" +
        "ราคาสินค้า: " + productPrice + " บาท<br>" +
        "VAT 7%: " + vat.toFixed(2) + " บาท<br>" +
        "ราคารวมสุทธิ: " + totalPrice.toFixed(2) + " บาท";
</script>

</body>
</html>
]
```
Js
```
[// ตัวแปรพื้นฐาน
let studentId = "68030084";
let studentName = "ณัชพล อ่อนบาง";
let midtermScore = 80;
let finalScore = 88;

// Object นักศึกษา
const student = {
    id: studentId,
    name: studentName,
    major: "Information Technology",
    gpa: 3.45
};

console.log(student);
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.2](![alt text](image-1.png))


![รูปผลการทดลองที่ js](![alt text](image-2.png))

```
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
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบฝึก JavaScript</title>
</head>
<body>

<h2>ผลลัพธ์โปรแกรม</h2>
<div id="output"></div>

<script>
let result = "";

// ===============================
// 1. ตรวจเลขคู่ / เลขคี่
// ===============================
let number = 8;
if (number % 2 === 0) {
    result += number + " เป็นเลขคู่<br>";
} else {
    result += number + " เป็นเลขคี่<br>";
}


// ===============================
// 2. สูตรคูณแม่ 8 (for)
// ===============================
result += "<br><b>สูตรคูณแม่ 8</b><br>";
for (let i = 1; i <= 12; i++) {
    result += "8 x " + i + " = " + (8 * i) + "<br>";
}


// ===============================
// 3. สูตรคูณแม่ 3 (while)
// ===============================
result += "<br><b>สูตรคูณแม่ 3</b><br>";
let i = 1;
while (i <= 12) {
    result += "3 x " + i + " = " + (3 * i) + "<br>";
    i++;
}


// ===============================
// 4. นับถอยหลัง 10 → 1
// ===============================
result += "<br><b>นับถอยหลัง</b><br>";
for (let i = 10; i >= 1; i--) {
    result += i + "<br>";
}


// ===============================
// 5. ตรวจช่วงวัย
// ===============================
let age = 16;
result += "<br><b>ช่วงวัย</b><br>";

if (age <= 12) {
    result += "วัยเด็ก";
} else if (age <= 18) {
    result += "วัยรุ่น";
} else {
    result += "วัยผู้ใหญ่";
}


// แสดงผล
document.getElementById("output").innerHTML = result;
</script>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.3](image.png)

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
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบฝึก Function</title>
</head>
<body>

<h2>ผลลัพธ์ Function</h2>
<div id="output"></div>

<script>
let result = "";

// ===============================
// 1. Function คำนวณ BMI
// ===============================
function calculateBMI(weight, height) {
    return weight / (height * height);
}

let bmi = calculateBMI(54, 1.75);
result += "<b>BMI:</b> " + bmi.toFixed(2) + "<br>";


// ===============================
// 2. Function ทักทายตามอายุ
// ===============================
function greetByAge(name, age) {
    if (age <= 12) {
        return "สวัสดีเด็กน้อย " + name;
    } else if (age <= 18) {
        return "สวัสดีวัยรุ่น " + name;
    } else {
        return "สวัสดีคุณ " + name;
    }
}

result += greetByAge("นัท", 16) + "<br>";


// ===============================
// 3. Function ตรวจสอบรหัสผ่าน
// ===============================
function checkPassword(password) {
    if (password.length > 8) {
        return "รหัสผ่านปลอดภัย";
    } else {
        return "รหัสผ่านสั้นเกินไป";
    }
}

result += checkPassword("12345678") + "<br>";
result += checkPassword("mypassword123");


// แสดงผล
document.getElementById("output").innerHTML = result;
</script>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.4.1](![alt text](image-1.png))



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
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบฝึก Function</title>
</head>
<body>

<h2>ผลลัพธ์ Function</h2>
<div id="output"></div>

<script>
let result = "";

// ===============================
// 1. Function คำนวณ BMI
// ===============================
function calculateBMI(weight, height) {
    return weight / (height * height);
}

let bmi = calculateBMI(54, 1.75);
result += "<b>BMI:</b> " + bmi.toFixed(2) + "<br>";


// ===============================
// 2. Function ทักทายตามอายุ
// ===============================
function greetByAge(name, age) {
    if (age <= 12) {
        return "สวัสดีเด็กน้อย " + name;
    } else if (age <= 18) {
        return "สวัสดีวัยรุ่น " + name;
    } else {
        return "สวัสดีคุณ " + name;
    }
}

result += greetByAge("นัท", 16) + "<br>";


// ===============================
// 3. Function ตรวจสอบรหัสผ่าน
// ===============================
function checkPassword(password) {
    if (password.length > 8) {
        return "รหัสผ่านปลอดภัย";
    } else {
        return "รหัสผ่านสั้นเกินไป";
    }
}

result += checkPassword("12345678") + "<br>";
result += checkPassword("mypassword123");


// แสดงผล
document.getElementById("output").innerHTML = result;
</script>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.4.2](image-1.png)


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
[<!DOCTYPE html>
<html>
<head>
    <title>BMI Arrow Function</title>
</head>
<body>

<h3>คำนวณค่า BMI</h3>

น้ำหนัก (kg): 
<input type="number" id="weight"><br><br>

ส่วนสูง (เมตร): 
<input type="number" step="0.01" id="height"><br><br>

<p id="output_value"></p>

<button onclick="calculateBMI()">คำนวณ BMI</button>

<script>
// Arrow Function
const calculateBMI = () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height) {
        document.getElementById('output_value').innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    const bmi = weight / (height * height);

    let status = "";

    if (bmi < 18.5) {
        status = "ผอม";
    } else if (bmi < 25) {
        status = "สมส่วน";
    } else {
        status = "อ้วน";
    }

    document.getElementById('output_value').innerHTML =
        "BMI = " + bmi.toFixed(2) + "<br>สถานะ: " + status;
};
</script>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.1](![alt text](image-2.png))

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
[<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ระบบจองห้องพักออนไลน์</title>

<style>
body {
    font-family: 'Sarabun', sans-serif;
    max-width: 600px;
    margin: 0 auto; /* จัดกึ่งกลาง */
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    text-align: center;
    color: #2c3e50;
}

form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15); /* เพิ่มมิติ */
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block; /* จัด layout */
    font-weight: bold;
    margin-bottom: 5px;
}

input, select {
    width: 100%; /* เต็มความกว้าง */
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: 0.3s;
}

/* focus effect */
input:focus, select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52,152,219,0.4);
}

/* ปุ่ม */
button {
    width: 100%;
    padding: 12px;
    background: #2980b9;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

/* hover effect */
button:hover {
    background: #3498db;
}

/* Responsive มือถือ */
@media (max-width: 480px) {
    body {
        padding: 10px;
    }

    form {
        padding: 15px;
    }
}
</style>
</head>

<body>

<h1>แบบฟอร์มจองห้องพัก</h1>

<form>
    <div class="form-group">
        <label>ชื่อ-นามสกุล</label>
        <input type="text" placeholder="กรอกชื่อ" required>
    </div>

    <div class="form-group">
        <label>อีเมล</label>
        <input type="email" placeholder="example@email.com" required>
    </div>

    <div class="form-group">
        <label>เบอร์โทรศัพท์</label>
        <input type="tel" required>
    </div>

    <div class="form-group">
        <label>วันที่เช็คอิน</label>
        <input type="date" required>
    </div>

    <div class="form-group">
        <label>วันที่เช็คเอาท์</label>
        <input type="date" required>
    </div>

    <div class="form-group">
        <label>ประเภทห้องพัก</label>
        <select required>
            <option value="">-- เลือกห้อง --</option>
            <option>ห้องมาตรฐาน</option>
            <option>ห้องดีลักซ์</option>
            <option>ห้องสวีท</option>
        </select>
    </div>

    <div class="form-group">
        <label>จำนวนผู้เข้าพัก</label>
        <input type="number" min="1" max="4" required>
    </div>

    <button type="submit">จองห้องพัก</button>
</form>

</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.2.2](![alt text](image-3.png))(![alt text](image-4.png))
[ในการทดลองครั้งนี้ได้ทดลองแก้ไขโค้ดจากรูปแบบฟังก์ชันปกติให้เป็น Arrow Function และเพิ่มการรับค่าน้ำหนักกับส่วนสูงผ่าน input บนหน้าเว็บ จากนั้นคำนวณค่า BMI แบบอัตโนมัติและแสดงผลลัพธ์ทันที พบว่าโค้ดสั้นลง อ่านง่ายขึ้น และสามารถใช้งานได้ทั้งบนคอมพิวเตอร์และมือถือ]


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
[<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ระบบจองห้องพัก</title>

<style>
body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 500px;
    background: white;
    margin: auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2 {
    text-align: center;
}

label {
    font-weight: bold;
}

input, select, button {
    width: 100%;
    padding: 10px;
    margin: 6px 0 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

button {
    background: #007bff;
    color: white;
    border: none;
    font-size: 16px;
}

button:hover {
    background: #0056b3;
}
</style>
</head>

<body>

<div class="container">
    <h2>จองห้องพัก</h2>

    <form id="bookingForm">

        <label>ชื่อผู้จอง</label>
        <input type="text" id="fullname" required>

        <label>เบอร์โทรศัพท์</label>
        <input type="text" id="phone" placeholder="10 หลัก" required>

        <label>ประเภทห้อง</label>
        <select id="roomtype">
            <option value="standard">Standard (2 คน)</option>
            <option value="deluxe">Deluxe (3 คน)</option>
            <option value="suite">Suite (4 คน)</option>
        </select>

        <label>วันที่เช็คอิน</label>
        <input type="date" id="checkin" required>

        <label>วันที่เช็คเอาท์</label>
        <input type="date" id="checkout" required>

        <label>จำนวนผู้เข้าพัก</label>
        <input type="number" id="guests" min="1" value="1">

        <button type="submit">จองห้องพัก</button>
    </form>
</div>

<script>
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const today = new Date();
    today.setHours(0,0,0,0);

    // ตรวจสอบวันที่
    if (checkin < today) {
        alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
        return;
    }

    if (checkout <= checkin) {
        alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
        return;
    }

    // ตรวจสอบเบอร์โทร
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
        return;
    }

    // คำนวณจำนวนวัน
    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));

    const roomtype = document.getElementById('roomtype');
    const roomText = roomtype.options[roomtype.selectedIndex].text;

    const summary = `
สรุปการจอง
ชื่อ: ${document.getElementById('fullname').value}
ห้อง: ${roomText}
เช็คอิน: ${checkin.toLocaleDateString('th-TH')}
เช็คเอาท์: ${checkout.toLocaleDateString('th-TH')}
จำนวนวัน: ${days} วัน
จำนวนผู้เข้าพัก: ${document.getElementById('guests').value} คน
`;

    if (confirm(summary + "\n\nยืนยันการจอง?")) {
        alert('จองสำเร็จแล้ว 🎉');
        this.reset();
    }
});

// จำกัด checkout ตาม checkin
document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
});

// จำกัดจำนวนคนตามห้อง
document.getElementById('roomtype').addEventListener('change', function() {
    const guests = document.getElementById('guests');

    if (this.value === 'standard') guests.max = 2;
    else if (this.value === 'deluxe') guests.max = 3;
    else guests.max = 4;

    if (guests.value > guests.max) guests.value = guests.max;
});
</script>

</body>
</html>
]
```
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>รายงานผลการทดลอง JavaScript</title>

    <style>
        body {
            font-family: Sarabun, sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 25px;
            background: #f4f6f8;
            line-height: 1.8;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
        }

        h2 {
            color: #34495e;
            margin-top: 25px;
        }

        .box {
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 3px 8px rgba(0,0,0,0.1);
        }

        pre {
            background: #1e1e1e;
            color: #00ff9c;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            font-size: 14px;
        }

        .img-placeholder {
            border: 2px dashed #bbb;
            padding: 18px;
            text-align: center;
            color: #777;
            margin-top: 15px;
            border-radius: 6px;
            background: #fafafa;
        }

        .summary {
            background: #e8f4ff;
            border-left: 6px solid #3498db;
        }

        footer {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>

<h1>รายงานผลการทดลองปรับแต่ง JavaScript</h1>

<div class="box">
    <h2>1. ตรวจสอบวันที่เช็คอินและเช็คเอาท์</h2>
    <p>
        ได้เพิ่มโค้ด JavaScript เพื่อตรวจสอบว่าวันที่เช็คอินต้องไม่เป็นวันที่ผ่านมาแล้ว
        และวันที่เช็คเอาท์ต้องมาหลังวันเช็คอิน โดยใช้ Date() ในการเปรียบเทียบค่าเวลา
    </p>

<pre><code>
const checkin = new Date(document.getElementById('checkin').value);
const checkout = new Date(document.getElementById('checkout').value);
const today = new Date();

if (checkin < today) {
    alert('ห้ามเลือกวันย้อนหลัง');
    return;
}

if (checkout <= checkin) {
    alert('วันออกต้องหลังวันเข้า');
    return;
}
</code></pre>

</div>

<div class="box">
    <h2>2. ตรวจสอบเบอร์โทรศัพท์</h2>
    <p>
        ใช้ Regular Expression เพื่อตรวจสอบว่าเบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลักเท่านั้น
    </p>

<pre><code>
const phone = document.getElementById('phone').value;
const phoneRegex = /^[0-9]{10}$/;

if (!phoneRegex.test(phone)) {
    alert('เบอร์โทรต้องเป็นตัวเลข 10 หลัก');
    return;
}
</code></pre>

   

<div class="box">
    <h2>3. แสดงสรุปการจองก่อนยืนยัน</h2>
    <p>
        เพิ่มการใช้ confirm() เพื่อให้ผู้ใช้ตรวจสอบข้อมูลก่อนกดยืนยันการจอง
    </p>

<pre><code>
const summary = `
ชื่อ: ${fullname}
ห้อง: ${roomtype}
จำนวนวัน: ${days} วัน
`;

if (confirm(summary + '\nยืนยันการจอง?')) {
    alert('จองสำเร็จ');
}
</code></pre>

<div class="box">
    <h2>4. รีเซ็ตฟอร์มหลังจองสำเร็จ</h2>
    <p>
        ใช้คำสั่ง reset() เพื่อคืนค่าฟอร์มกลับสู่ค่าเริ่มต้นหลังจองสำเร็จ
    </p>

<pre><code>
document.getElementById('bookingForm').reset();
</code></pre>


<div class="box">
    <h2>5. การตรวจสอบแบบ Real-time</h2>
    <p>
        เพิ่ม EventListener เพื่อตรวจสอบข้อมูลทันทีเมื่อมีการเปลี่ยนค่า เช่น
        การกำหนดวันเช็คเอาท์ขั้นต่ำ และการจำกัดจำนวนผู้เข้าพักตามประเภทห้อง
    </p>

<pre><code>
document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
});
</code></pre>


<div class="box summary">
    <h2>สรุปผลการทดลอง</h2>
    <p>
        จากการทดลองปรับแต่ง JavaScript ในแต่ละส่วน พบว่าระบบสามารถตรวจสอบความถูกต้องของข้อมูลได้อย่างมีประสิทธิภาพ
        ลดข้อผิดพลาดจากการกรอกข้อมูล และเพิ่มความสะดวกในการใช้งานผ่านการตรวจสอบแบบ Real-time
        รวมถึงการแสดงสรุปก่อนยืนยัน ทำให้หน้าเว็บมีความสมบูรณ์ ถูกต้อง และเป็นมิตรต่อผู้ใช้งานมากยิ่งขึ้น
    </p>
</div>

<footer>
    รายงานวิชาเขียนโปรแกรมเว็บ | จัดทำเพื่อการศึกษา
</footer>

</body>
</html>
]

**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.2.3](![alt text](image.png))(![alt text](image-1.png))


## คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
