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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: สมชาย ใจดี')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">25 กุมภาพันธ์ 2566ต</button>

        <button onclick="showTime()">19.30 น.</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <script src="script.js"></script>

</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 1](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 19.30.46.png>))

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <script src="script.js"></script>

    <hr>
<h2>การทดลองที่ 2.1: ตัวแปรและ Object</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>
</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.1](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 19.51.52.png>)
![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.03.11.png>))


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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <script src="script.js"></script>

    <hr>
<h2>คะแนนสอบและเกรดเฉลี่ย</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>
</body>
</html>

<hr>
<h2>คะแนนเฉลี่ยและราคาสินค้า</h2>
<div class="section">
    <button onclick="calculateAverage()">1. คะแนนเฉลี่ย (3 วิชา)</button>
    <button onclick="calculateVat()">2. ราคาสินค้า + VAT 7%</button>
    
    <div id="calc-display" style="margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 5px;">
        ผลการคำนวณจะแสดงที่นี่...
    </div>
</div>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.2](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.02.56.png>)
![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.03.02.png>))

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <script src="script.js"></script>

    <hr>
<h2>คะแนนสอบและเกรดเฉลี่ย</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>
</body>
</html>

<hr>
<h2>คะแนนเฉลี่ยและราคาสินค้า</h2>
<div class="section">
    <button onclick="calculateAverage()">1. คะแนนเฉลี่ย (3 วิชา)</button>
    <button onclick="calculateVat()">2. ราคาสินค้า + VAT 7%</button>
    
    <div id="calc-display" style="margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 5px;">
        ผลการคำนวณจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>การควบคุมการทำงาน</h2>
<div class="section">
    <button onclick="checkEvenOdd()">1. ตรวจสอบเลขคู่/คี่</button>
    <button onclick="showMultiplication()">2. ตารางสูตรคูณ แม่ 2 และ 3</button>
    <button onclick="countDown()">3. นับถอยหลัง 10-1</button>
    <button onclick="checkAgeRange()">4. ตรวจสอบช่วงวัย</button>
    
    <div id="logic-display" style="margin-top: 15px; padding: 15px; background: #fff3e0; border-left: 5px solid #ff9800; border-radius: 5px; white-space: pre-line;">
        ผลการรันคำสั่งจะแสดงที่นี่...
    </div>
</div>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.3](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.15.32.png>)
![
    ![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.15.54.png>)
](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.15.43.png>)
![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.16.00.png>))

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <script src="script.js"></script>

    <hr>
<h2>คะแนนสอบและเกรดเฉลี่ย</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>
</body>
</html>

<hr>
<h2>คะแนนเฉลี่ยและราคาสินค้า</h2>
<div class="section">
    <button onclick="calculateAverage()">1. คะแนนเฉลี่ย (3 วิชา)</button>
    <button onclick="calculateVat()">2. ราคาสินค้า + VAT 7%</button>
    
    <div id="calc-display" style="margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 5px;">
        ผลการคำนวณจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>การควบคุมการทำงาน</h2>
<div class="section">
    <button onclick="checkEvenOdd()">1. ตรวจสอบเลขคู่/คี่</button>
    <button onclick="showMultiplication()">2. ตารางสูตรคูณ แม่ 2 และ 3</button>
    <button onclick="countDown()">3. นับถอยหลัง 10-1</button>
    <button onclick="checkAgeRange()">4. ตรวจสอบช่วงวัย</button>
    
    <div id="logic-display" style="margin-top: 15px; padding: 15px; background: #fff3e0; border-left: 5px solid #ff9800; border-radius: 5px; white-space: pre-line;">
        ผลการรันคำสั่งจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย)</h2>
<div class="section">
    <p><strong>1. ค่า BMI:</strong> 
        <input type="number" id="weight" placeholder="น้ำหนัก (kg)" style="width: 100px;">
        <input type="number" id="height" placeholder="ส่วนสูง (cm)" style="width: 100px;">
        <button onclick="displayBMI()">คำนวณ BMI</button>
    </p>

    <p><strong>2. ทักทายตามช่วงวัย:</strong> 
        <input type="text" id="guestName" placeholder="ชื่อ" style="width: 100px;">
        <input type="number" id="guestAge" placeholder="อายุ" style="width: 60px;">
        <button onclick="displayGreeting()">ส่งคำทักทาย</button>
    </p>

    <p><strong>3. ตรวจสอบรหัสผ่าน:</strong> 
        <input type="password" id="passInput" placeholder="กรอกรหัสผ่าน">
        <button onclick="displayPassCheck()">ตรวจสอบ</button>
    </p>
    
    <div id="func-display" style="margin-top: 15px; padding: 15px; background: #f1f8e9; border-left: 5px solid #4caf50; border-radius: 5px;">
        ผลการเรียกใช้ Function จะแสดงที่นี่...
    </div>
</div>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.4.1](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.27.08.png>))



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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <script src="script.js"></script>

    <hr>
<h2>คะแนนสอบและเกรดเฉลี่ย</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>

<hr>
<h2>คะแนนเฉลี่ยและราคาสินค้า</h2>
<div class="section">
    <button onclick="calculateAverage()">1. คะแนนเฉลี่ย (3 วิชา)</button>
    <button onclick="calculateVat()">2. ราคาสินค้า + VAT 7%</button>
    
    <div id="calc-display" style="margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 5px;">
        ผลการคำนวณจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>การควบคุมการทำงาน</h2>
<div class="section">
    <button onclick="checkEvenOdd()">1. ตรวจสอบเลขคู่/คี่</button>
    <button onclick="showMultiplication()">2. ตารางสูตรคูณ แม่ 2 และ 3</button>
    <button onclick="countDown()">3. นับถอยหลัง 10-1</button>
    <button onclick="checkAgeRange()">4. ตรวจสอบช่วงวัย</button>
    
    <div id="logic-display" style="margin-top: 15px; padding: 15px; background: #fff3e0; border-left: 5px solid #ff9800; border-radius: 5px; white-space: pre-line;">
        ผลการรันคำสั่งจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย)</h2>
<div class="section">
    <p><strong>1. ค่า BMI:</strong> 
        <input type="number" id="weight" placeholder="น้ำหนัก (kg)" style="width: 100px;">
        <input type="number" id="height" placeholder="ส่วนสูง (cm)" style="width: 100px;">
        <button onclick="displayBMI()">คำนวณ BMI</button>
    </p>

    <p><strong>2. ทักทายตามช่วงวัย:</strong> 
        <input type="text" id="guestName" placeholder="ชื่อ" style="width: 100px;">
        <input type="number" id="guestAge" placeholder="อายุ" style="width: 60px;">
        <button onclick="displayGreeting()">ส่งคำทักทาย</button>
    </p>

    <p><strong>3. ตรวจสอบรหัสผ่าน:</strong> 
        <input type="password" id="passInput" placeholder="กรอกรหัสผ่าน">
        <button onclick="displayPassCheck()">ตรวจสอบ</button>
    </p>
    
    <div id="func-display" style="margin-top: 15px; padding: 15px; background: #f1f8e9; border-left: 5px solid #4caf50; border-radius: 5px;">
        ผลการเรียกใช้ Function จะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย) (Arrow)</h2>
<div class="section">
    <button onclick="displayArrowBMI()">1. ค่า BMI (ดัชนีมวลกาย) (Arrow)</button>
    <button onclick="displayArrowGreeting()">2. Greeting (Arrow)</button>
    <button onclick="displayArrowPass()">3. Password Check (Arrow)</button>
    
    <div id="arrow-display" style="margin-top: 15px; padding: 15px; background: #fffde7; border-left: 5px solid #fbc02d; border-radius: 5px;">
        ผลการรัน Arrow Function จะแสดงที่นี่...
    </div>
</div>
</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.4.2](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.36.41.png>))


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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <hr>
<h2>คะแนนสอบและเกรดเฉลี่ย</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>

<hr>
<h2>คะแนนเฉลี่ยและราคาสินค้า</h2>
<div class="section">
    <button onclick="calculateAverage()">1. คะแนนเฉลี่ย (3 วิชา)</button>
    <button onclick="calculateVat()">2. ราคาสินค้า + VAT 7%</button>
    
    <div id="calc-display" style="margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 5px;">
        ผลการคำนวณจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>การควบคุมการทำงาน</h2>
<div class="section">
    <button onclick="checkEvenOdd()">1. ตรวจสอบเลขคู่/คี่</button>
    <button onclick="showMultiplication()">2. ตารางสูตรคูณ แม่ 2 และ 3</button>
    <button onclick="countDown()">3. นับถอยหลัง 10-1</button>
    <button onclick="checkAgeRange()">4. ตรวจสอบช่วงวัย</button>
    
    <div id="logic-display" style="margin-top: 15px; padding: 15px; background: #fff3e0; border-left: 5px solid #ff9800; border-radius: 5px; white-space: pre-line;">
        ผลการรันคำสั่งจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย)</h2>
<div class="section">
    <p><strong>1. ค่า BMI:</strong> 
        <input type="number" id="weight" placeholder="น้ำหนัก (kg)" style="width: 100px;">
        <input type="number" id="height" placeholder="ส่วนสูง (cm)" style="width: 100px;">
        <button onclick="displayBMI()">คำนวณ BMI</button>
    </p>

    <p><strong>2. ทักทายตามช่วงวัย:</strong> 
        <input type="text" id="guestName" placeholder="ชื่อ" style="width: 100px;">
        <input type="number" id="guestAge" placeholder="อายุ" style="width: 60px;">
        <button onclick="displayGreeting()">ส่งคำทักทาย</button>
    </p>

    <p><strong>3. ตรวจสอบรหัสผ่าน:</strong> 
        <input type="password" id="passInput" placeholder="กรอกรหัสผ่าน">
        <button onclick="displayPassCheck()">ตรวจสอบ</button>
    </p>
    
    <div id="func-display" style="margin-top: 15px; padding: 15px; background: #f1f8e9; border-left: 5px solid #4caf50; border-radius: 5px;">
        ผลการเรียกใช้ Function จะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย) (Arrow)</h2>
<div class="section">
    <button onclick="displayArrowBMI()">1. ค่า BMI (ดัชนีมวลกาย) (Arrow)</button>
    <button onclick="displayArrowGreeting()">2. Greeting (Arrow)</button>
    <button onclick="displayArrowPass()">3. Password Check (Arrow)</button>
    
    <div id="arrow-display" style="margin-top: 15px; padding: 15px; background: #fffde7; border-left: 5px solid #fbc02d; border-radius: 5px;">
        ผลการรัน Arrow Function จะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย)</h2>
<div class="section" style="background-color: #f0f7ff; padding: 20px; border-radius: 10px;">
    <p>
        น้ำหนัก (กก.): <input type="number" id="weight_input" placeholder="ตัวอย่าง: 65"> 
    </p>
    <p>
        ส่วนสูง (ซม.): <input type="number" id="height_input" placeholder="ตัวอย่าง: 170">
    </p>
    
    <button onclick="processBMI()">คำนวณและวิเคราะห์ผล</button>
    
    <div style="margin-top: 20px; font-size: 1.2em;">
        <p id="bmi_result" style="font-weight: bold; color: #007bff;"></p>
        <p id="bmi_status" style="font-weight: bold;"></p>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.1](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.47.00.png>))

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลของนักศึกษา</title>
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        button { margin: 5px; padding: 10px; cursor: pointer; }
        input { padding: 8px; width: 250px; }
    </style>
</head>
<body>

    <h2>ข้อมูลของนักศึกษา</h2>
    <div class="section">
        <button onclick="alert('ชื่อนักศึกษา: นางสาวนภัสสร คำปัน')">นางสาวนภัสสร คำปัน</button>

        <button id="btn-date">แสดงวันที่</button>

        <button onclick="showTime()">แสดงเวลา</button>
    </div>

    <h2>Search</h2>
    <div class="section">
        <input type="text" id="userInput" placeholder="กรอกข้อความที่นี่...">
        <button id="btn-show-text">แสดงผลข้อความ</button>
    </div>

    <script>
        document.getElementById('btn-date').onclick = function() {
            const today = new Date().toLocaleDateString('th-TH');
            alert('วันที่ปัจจุบันคือ: ' + today);
        };

        document.getElementById('btn-show-text').onclick = function() {
            const textValue = document.getElementById('userInput').value;
            if(textValue === "") {
                alert('กรุณากรอกข้อความก่อนครับ');
            } else {
                alert('คุณกรอกว่า: ' + textValue);
            }
        };
    </script>

    <hr>
<h2>คะแนนสอบและเกรดเฉลี่ย</h2>
<div class="section">
    <button onclick="showStudentData()">1. คะแนนสอบ</button>
    <button onclick="showObjectData()">2. เกรดเฉลี่ย</button>
    <div id="display-area" style="margin-top: 15px; padding: 10px; background: #f4f4f4; border-radius: 5px; min-height: 50px;">
        รอการคลิกปุ่ม...
    </div>
</div>

<hr>
<h2>คะแนนเฉลี่ยและราคาสินค้า</h2>
<div class="section">
    <button onclick="calculateAverage()">1. คะแนนเฉลี่ย (3 วิชา)</button>
    <button onclick="calculateVat()">2. ราคาสินค้า + VAT 7%</button>
    
    <div id="calc-display" style="margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 5px;">
        ผลการคำนวณจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>การควบคุมการทำงาน</h2>
<div class="section">
    <button onclick="checkEvenOdd()">1. ตรวจสอบเลขคู่/คี่</button>
    <button onclick="showMultiplication()">2. ตารางสูตรคูณ แม่ 2 และ 3</button>
    <button onclick="countDown()">3. นับถอยหลัง 10-1</button>
    <button onclick="checkAgeRange()">4. ตรวจสอบช่วงวัย</button>
    
    <div id="logic-display" style="margin-top: 15px; padding: 15px; background: #fff3e0; border-left: 5px solid #ff9800; border-radius: 5px; white-space: pre-line;">
        ผลการรันคำสั่งจะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย)</h2>
<div class="section">
    <p><strong>1. ค่า BMI:</strong> 
        <input type="number" id="weight" placeholder="น้ำหนัก (kg)" style="width: 100px;">
        <input type="number" id="height" placeholder="ส่วนสูง (cm)" style="width: 100px;">
        <button onclick="displayBMI()">คำนวณ BMI</button>
    </p>

    <p><strong>2. ทักทายตามช่วงวัย:</strong> 
        <input type="text" id="guestName" placeholder="ชื่อ" style="width: 100px;">
        <input type="number" id="guestAge" placeholder="อายุ" style="width: 60px;">
        <button onclick="displayGreeting()">ส่งคำทักทาย</button>
    </p>

    <p><strong>3. ตรวจสอบรหัสผ่าน:</strong> 
        <input type="password" id="passInput" placeholder="กรอกรหัสผ่าน">
        <button onclick="displayPassCheck()">ตรวจสอบ</button>
    </p>
    
    <div id="func-display" style="margin-top: 15px; padding: 15px; background: #f1f8e9; border-left: 5px solid #4caf50; border-radius: 5px;">
        ผลการเรียกใช้ Function จะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย) (Arrow)</h2>
<div class="section">
    <button onclick="displayArrowBMI()">1. ค่า BMI (ดัชนีมวลกาย) (Arrow)</button>
    <button onclick="displayArrowGreeting()">2. Greeting (Arrow)</button>
    <button onclick="displayArrowPass()">3. Password Check (Arrow)</button>
    
    <div id="arrow-display" style="margin-top: 15px; padding: 15px; background: #fffde7; border-left: 5px solid #fbc02d; border-radius: 5px;">
        ผลการรัน Arrow Function จะแสดงที่นี่...
    </div>
</div>

<hr>
<h2>ค่า BMI (ดัชนีมวลกาย)</h2>
<div class="section" style="background-color: #f0f7ff; padding: 20px; border-radius: 10px;">
    <p>
        น้ำหนัก (กก.): <input type="number" id="weight_input" placeholder="ตัวอย่าง: 65"> 
    </p>
    <p>
        ส่วนสูง (ซม.): <input type="number" id="height_input" placeholder="ตัวอย่าง: 170">
    </p>
    
    <button onclick="processBMI()">คำนวณและวิเคราะห์ผล</button>
    
    <div style="margin-top: 20px; font-size: 1.2em;">
        <p id="bmi_result" style="font-weight: bold; color: #007bff;"></p>
        <p id="bmi_status" style="font-weight: bold;"></p>
    </div>
</div>

<hr>
<div class="booking-container">
    <h1>ระบบจองห้องพักออนไลน์</h1>
    
    <form id="bookingForm">
        <div>
            <label for="fullname">ชื่อ-นามสกุล:</label>
            <input type="text" id="fullname" name="fullname" placeholder="นายสมชาย ใจดี" required>
        </div>

        <div>
            <label for="email">อีเมล:</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required>
        </div>

        <div>
            <label for="phone">เบอร์โทรศัพท์:</label>
            <input type="tel" id="phone" name="phone" placeholder="08x-xxx-xxxx" required>
        </div>

        <div style="display: flex; gap: 10px;">
            <div style="flex: 1;">
                <label for="checkin">วันที่เช็คอิน:</label>
                <input type="date" id="checkin" name="checkin" required>
            </div>
            <div style="flex: 1;">
                <label for="checkout">วันที่เช็คเอาท์:</label>
                <input type="date" id="checkout" name="checkout" required>
            </div>
        </div>

        <div>
            <label for="roomtype">ประเภทห้องพัก:</label>
            <select id="roomtype" name="roomtype" required>
                <option value="">กรุณาเลือกประเภทห้องพัก</option>
                <option value="standard">ห้องมาตรฐาน (1,200.-)</option>
                <option value="deluxe">ห้องดีลักซ์ (2,500.-)</option>
                <option value="suite">ห้องสวีท (5,000.-)</option>
            </select>
        </div>

        <div>
            <label for="guests">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="guests" name="guests" min="1" max="4" value="1" required>
        </div>

        <button type="submit" id="submitBooking">ยืนยันการจองห้องพัก</button>
    </form>
    
    <div id="bookingSummary" style="display:none; margin-top: 20px; padding: 15px; background: #e7f3fe; border-radius: 8px; border: 1px solid #bde5fb;">
        <h3 style="margin-top:0; color: #2980b9;">สรุปการจองของคุณ</h3>
        <p id="summaryText"></p>
    </div>
</div>

<style>
    /* CSS ตามโจทย์ที่กำหนด */
    .booking-container {
        font-family: 'Sarabun', sans-serif;
        max-width: 600px;
        margin: 40px auto;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 15px;
    }

    .booking-container h1 {
        color: #2c3e50;
        text-align: center;
        margin-bottom: 30px;
    }

    #bookingForm {
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .booking-container div {
        margin-bottom: 15px;
    }

    .booking-container label {
        display: block;
        margin-bottom: 8px;
        color: #34495e;
        font-weight: bold;
    }

    .booking-container input, 
    .booking-container select {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-sizing: border-box;
        transition: all 0.3s ease;
    }

    .booking-container input:focus, 
    .booking-container select:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 8px rgba(52,152,219,0.3);
    }

    .booking-container button {
        background-color: #2980b9;
        color: white;
        padding: 15px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    .booking-container button:hover {
        background-color: #3498db;
    }

    @media (max-width: 480px) {
        .booking-container { padding: 10px; }
        #bookingForm { padding: 15px; }
    }
</style>

<script src="script.js"></script>

<hr>
<div class="section">
    <h2>สรุปการทดลองปรับแต่ง CSS</h2>
    <p>ในการทดลองนี้ได้ปรับแต่ง CSS ของปุ่มและกล่องแสดงผลหลัก (content box) เพื่อให้มีสีและมุมโค้งที่สอดคล้องกัน รวมถึงเปลี่ยนสไตล์ของส่วน booking ให้ดูทันสมัยขึ้น</p>
    <ul>
        <li>เปลี่ยนสีปุ่มจากเทาเป็นสีน้ำเงิน (#2980b9) และเพิ่มมุมโค้ง</li>
        <li>เปลี่ยนพื้นหลังกล่องแสดงผลเป็นสีฟ้าอ่อน และเพิ่มเส้นขอบสีอ่อน</li>
        <li>เพิ่มการเปลี่ยนสีเมื่อเลื่อนเมาส์ (hover)</li>
    </ul>

    <p>รูปก่อนและหลังการปรับแต่ง:</p>
    <div style="display:flex; gap:20px; align-items:center;">
        <div>
            <img src="images/experiment-before.svg" alt="before" style="max-width:300px; border:1px solid #ccc; padding:8px; background:#fff;">
            <p style="text-align:center;">ก่อนปรับแต่ง</p>
        </div>
        <div>
            <img src="images/experiment-after.svg" alt="after" style="max-width:300px; border:1px solid #ccc; padding:8px; background:#fff;">
            <p style="text-align:center;">หลังปรับแต่ง</p>
        </div>
    </div>
</div>

</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.2.2](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 20.55.55.png>))


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
function showTime() {
    const now = new Date();
    alert('เวลาปัจจุบันคือ: ' + now.toLocaleTimeString('th-TH'));
}

function showStudentData() {
    const studentId = "68030129";
    const studentName = "นางสาวนภัสสร คำปัน";

    let midtermScore = 28; // คะแนนกลางภาค
    let finalScore = 45;   // คะแนนปลายภาค

    const totalScore = midtermScore + finalScore;

    const display = document.getElementById('display-area');
    if (!display) {
        alert('ไม่พบพื้นที่แสดงผล (display-area)');
        return;
    }

    display.innerHTML = `
        <strong>ข้อมูลตัวแปร (let / const):</strong><br>
        รหัส: ${studentId} <br>
        ชื่อ: ${studentName} <br>
        คะแนนกลางภาค: ${midtermScore} <br>
        คะแนนปลายภาค: ${finalScore} <br>
        <strong>คะแนนรวม:</strong> ${totalScore} คะแนน
    `;
}


function showObjectData() {
    const studentProfile = {
        id: "68030129",
        name: "นางสาวนภัสสร คำปัน",
        major: "สาขาวิชา เทคโนโลยีคอมพิวเตอร์",
        gpa: 3.00
    };

    const display = document.getElementById('display-area');
    if (!display) {
        alert('ไม่พบพื้นที่แสดงผล (display-area)');
        return;
    }

    display.innerHTML = `
        <strong>ข้อมูลจาก Object:</strong><br>
        รหัส: ${studentProfile.id} <br>
        ชื่อ: ${studentProfile.name} <br>
        สาขา: ${studentProfile.major} <br>
        เกรดเฉลี่ย: ${studentProfile.gpa}
    `;
}

function calculateAverage() {
    const score1 = 78;
    const score2 = 85;
    const score3 = 92;

    const average = (score1 + score2 + score3) / 3;

    const display = document.getElementById('calc-display');
    if (!display) {
        alert('ไม่พบพื้นที่แสดงผลการคำนวณ (calc-display)');
        return;
    }

    display.innerHTML = `
        <strong>ผลการคำนวณคะแนนเฉลี่ย (3 วิชา):</strong><br>
        วิชาคณิตศาสตร์: ${score1} <br>
        วิชาวิทยาศาสตร์: ${score2} <br>
        วิชาภาษาอังกฤษ: ${score3} <br>
        <strong>ค่าเฉลี่ย:</strong> ${average.toFixed(2)}
    `;
}

function calculateVat() {
    const productName = 'รองเท้าวิ่ง';
    const price = 1250.00; // ราคาสินค้า
    const vatRate = 0.07; // 7%

    const vatAmount = price * vatRate;
    const totalPrice = price + vatAmount;

    const display = document.getElementById('calc-display');
    if (!display) {
        alert('ไม่พบพื้นที่แสดงผลการคำนวณ (calc-display)');
        return;
    }

    display.innerHTML = `
        <strong>ผลการคำนวณราคาสินค้า + VAT 7%:</strong><br>
        สินค้า: ${productName} <br>
        ราคาสินค้า: ${price.toFixed(2)} บาท<br>
        VAT (7%): ${vatAmount.toFixed(2)} บาท<br>
        <strong>ราคารวม VAT:</strong> ${totalPrice.toFixed(2)} บาท
    `;
}

function checkEvenOdd() {
    const logicDisplay = document.getElementById('logic-display');
    if (!logicDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (logic-display)');
        return;
    }

    let number = 45;
    let result = "";
    
    if (number % 2 === 0) {
        result = `${number} เป็น "เลขคู่"`;
    } else {
        result = `${number} เป็น "เลขคี่"`;
    }
    
    logicDisplay.innerText = "ผลลัพธ์: " + result;
}

function showMultiplication() {
    const logicDisplay = document.getElementById('logic-display');
    if (!logicDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (logic-display)');
        return;
    }

    let output = "--- แม่ 2 (for loop) ---\n";
    for (let i = 1; i <= 12; i++) {
        output += `2 x ${i} = ${2 * i}\n`;
    }
    
    output += "\n--- แม่ 3 (while loop) ---\n";
    let j = 1;
    while (j <= 12) {
        output += `3 x ${j} = ${3 * j}\n`;
        j++;
    }
    
    logicDisplay.innerText = output;
}

function countDown() {
    const logicDisplay = document.getElementById('logic-display');
    if (!logicDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (logic-display)');
        return;
    }

    let output = "เริ่มการนับถอยหลัง:\n";
    for (let i = 10; i >= 1; i--) {
        output += i + (i === 1 ? " !" : ", ");
    }
    logicDisplay.innerText = output;
}

function checkAgeRange() {
    const logicDisplay = document.getElementById('logic-display');
    if (!logicDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (logic-display)');
        return;
    }

    let age = 20;
    let range = "";

    if (age >= 0 && age <= 15) {
        range = "วัยเด็ก";
    } else if (age >= 16 && age <= 19) {
        range = "วัยรุ่น";
    } else if (age >= 20 && age <= 60) {
        range = "วัยผู้ใหญ่";
    } else {
        range = "วัยสูงอายุ";
    }

    logicDisplay.innerText = `อายุ ${age} ปี จัดอยู่ในกลุ่ม: ${range}`;
}


const funcDisplay = document.getElementById('func-display');


function calculateBMI(weight, heightCm) {
    let heightM = heightCm / 100; 
    let bmi = weight / (heightM * heightM);
    return bmi.toFixed(2);
}

function displayBMI() {
    if (!funcDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (func-display)');
        return;
    }

    const wVal = document.getElementById('weight').value;
    const hVal = document.getElementById('height').value;
    const w = parseFloat(wVal);
    const h = parseFloat(hVal);

    if (!isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) {
        funcDisplay.innerText = "กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง";
        return;
    }

    const result = calculateBMI(w, h);
    funcDisplay.innerText = `ดัชนีมวลกาย (BMI) ของคุณคือ: ${result}`;
}

function getGreeting(name, age) {
    let message = "";
    const a = Number(age);
    if (isNaN(a) || a < 0) {
        return 'อายุไม่ถูกต้อง';
    }

    if (a < 13) {
        message = `สวัสดีจ๊ะหนู ${name}`;
    } else if (a < 20) {
        message = `สวัสดีวัยรุ่น ${name}!`;
    } else {
        message = `สวัสดีคุณ ${name} ยินดีที่ได้พบครับ`;
    }
    return message;
}

function displayGreeting() {
    if (!funcDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (func-display)');
        return;
    }

    const name = document.getElementById('guestName').value.trim();
    const ageVal = document.getElementById('guestAge').value;
    const age = parseInt(ageVal, 10);

    if (!name || !isFinite(age) || age < 0) {
        funcDisplay.innerText = "กรุณากรอกชื่อและอายุให้ครบถ้วน";
        return;
    }

    funcDisplay.innerText = getGreeting(name, age);
}

function isPasswordValid(password) {
    if (typeof password !== 'string') return false;
    return password.length > 8;
}

function displayPassCheck() {
    if (!funcDisplay) {
        alert('ไม่พบพื้นที่แสดงผล (func-display)');
        return;
    }

    const pass = document.getElementById('passInput').value || '';
    const isValid = isPasswordValid(pass);
    
    if (isValid) {
        funcDisplay.innerHTML = `<span style="color: green;">✔ รหัสผ่านปลอดภัย (ยาว ${pass.length} ตัวอักษร)</span>`;
    } else {
        funcDisplay.innerHTML = `<span style="color: red;">✘ รหัสผ่านสั้นเกินไป (ต้องมากกว่า 8 ตัวอักษร)</span>`;
    }
}


const arrowDisplay = document.getElementById('arrow-display');

const calculateBMIArrow = (weight, height) => {
    const w = Number(weight);
    const h = Number(height);
    if (!isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) return null;
    return (w / ((h / 160) ** 2)).toFixed(2);
};

const displayArrowBMI = () => {
    if (!arrowDisplay) { alert('ไม่พบพื้นที่แสดงผล (arrow-display)'); return; }
    const wVal = document.getElementById('weight').value;
    const hVal = document.getElementById('height').value;
    const bmi = calculateBMIArrow(wVal, hVal);
    arrowDisplay.style.color = '';
    arrowDisplay.innerText = bmi ? `[Arrow] BMI ของคุณคือ: ${bmi}` : 'กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง';
};

const getGreetingArrow = (name, age) => {
    const a = Number(age);
    const n = (name || '').toString().trim();
    if (!n || !isFinite(a) || a < 0) return 'ข้อมูลไม่ครบถ้วน';
    return a < 13 ? `หวัดดีเจ้าหนู ${n} (Arrow)`
         : a < 20 ? `โย่! ว่าไงวัยรุ่น ${n} (Arrow)`
         : `สวัสดีครับคุณ ${n} (Arrow)`;
};

const displayArrowGreeting = () => {
    if (!arrowDisplay) { alert('ไม่พบพื้นที่แสดงผล (arrow-display)'); return; }
    const name = document.getElementById('guestName').value;
    const age = document.getElementById('guestAge').value;
    arrowDisplay.style.color = '';
    arrowDisplay.innerText = getGreetingArrow(name, age);
};


const isPassValidArrow = pass => typeof pass === 'string' && pass.length > 8;

const displayArrowPass = () => {
    if (!arrowDisplay) { alert('ไม่พบพื้นที่แสดงผล (arrow-display)'); return; }
    const pass = document.getElementById('passInput').value || '';
    const isValid = isPassValidArrow(pass);
    arrowDisplay.style.color = isValid ? 'green' : 'red';
    arrowDisplay.innerText = isValid
        ? `[Arrow] ผ่าน! รหัสยาว ${pass.length} ตัว`
        : `[Arrow] ไม่ผ่าน! รหัสสั้นเกินไป (ต้องมากกว่า 8 ตัวอักษร)`;
};



const calculateBMIValue = (w, h) => {
    const W = Number(w);
    const H = Number(h);
    if (!isFinite(W) || !isFinite(H) || W <= 0 || H <= 0) return null;
    return Number((W / ((H / 100) ** 2)).toFixed(2));
};


const getBMIStatus = (bmi) => {
    const b = Number(bmi);
    if (!isFinite(b)) return { text: "ข้อมูล BMI ไม่ถูกต้อง", color: "#000" };
    if (b < 18.5) return { text: "ผอมเกินไป", color: "#ffc107" };
    if (b >= 18.5 && b <= 22.9) return { text: "สมส่วน (สุขภาพดี)", color: "#28a745" };
    if (b >= 23.0 && b <= 24.9) return { text: "น้ำหนักเกิน", color: "#fd7e14" };
    return { text: "อ้วน", color: "#dc3545" };
};


const processBMI = () => {
    const weightVal = document.getElementById('weight_input')?.value;
    const heightVal = document.getElementById('height_input')?.value;
    const resultElement = document.getElementById('bmi_result');
    const statusElement = document.getElementById('bmi_status');

    if (!resultElement || !statusElement) {
        alert('ไม่พบพื้นที่แสดงผล BMI ในหน้า HTML (bmi_result / bmi_status)');
        return;
    }

    const bmi = calculateBMIValue(weightVal, heightVal);
    if (bmi === null) {
        resultElement.innerText = 'กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง (มากกว่า 0)';
        statusElement.innerText = '';
        statusElement.style.color = '';
        return;
    }

    const status = getBMIStatus(bmi);
    resultElement.innerHTML = `ค่า BMI ของคุณคือ: <strong>${bmi}</strong>`;
    statusElement.innerHTML = `สถานะ: <strong>${status.text}</strong>`;
    statusElement.style.color = status.color;
};


(function() {
    const bookingForm = document.getElementById('bookingForm');
    const bookingSummary = document.getElementById('bookingSummary');
    const summaryText = document.getElementById('summaryText');

    if (!bookingForm) return;

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const checkinVal = document.getElementById('checkin').value;
        const checkoutVal = document.getElementById('checkout').value;
        const roomtypeEl = document.getElementById('roomtype');
        const roomtype = roomtypeEl ? roomtypeEl.value : '';
        const guestsInput = document.getElementById('guests');
        const guests = guestsInput ? parseInt(guestsInput.value, 10) || 1 : 1;


        if (!fullname || !email || !phone || !checkinVal || !checkoutVal || !roomtype) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
            return;
        }

        const checkin = new Date(checkinVal);
        const checkout = new Date(checkoutVal);
        const today = new Date();
        today.setHours(0,0,0,0); 

        if (isNaN(checkin) || isNaN(checkout)) {
            alert('วันที่ไม่ถูกต้อง กรุณาเลือกวันที่ให้ถูกต้อง');
            return;
        }

        if (checkin < today) {
            alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
            return;
        }

        if (checkout <= checkin) {
            alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
            return;
        }

    
        const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));

        
        const roomtypeText = roomtypeEl.options[roomtypeEl.selectedIndex].text;

      
        const summary = `สรุปการจอง:\n- ชื่อผู้จอง: ${fullname}\n- ประเภทห้อง: ${roomtypeText}\n- วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}\n- วันที่ออก: ${checkout.toLocaleDateString('th-TH')}\n- จำนวนวันที่พัก: ${days} วัน\n- จำนวนผู้เข้าพัก: ${guests} ท่าน`;

        if (confirm(summary + '\n\nยืนยันการจองห้องพัก?')) {
            if (bookingSummary && summaryText) {
                summaryText.innerHTML = `
                    <strong>คุณ ${fullname}</strong> ได้จอง <strong>${roomtypeText}</strong><br>
                    วันที่: ${checkin.toLocaleDateString('th-TH')} - ${checkout.toLocaleDateString('th-TH')}<br>
                    จำนวนวันที่พัก: <strong>${days}</strong> คืน<br>
                    จำนวนผู้เข้าพัก: ${guests}
                `;
                bookingSummary.style.display = 'block';
                bookingSummary.scrollIntoView({ behavior: 'smooth' });
            }

            alert('จองห้องพักเรียบร้อยแล้ว');
            bookingForm.reset();
            document.getElementById('checkout').min = '';
        }
    });

    const checkinEl = document.getElementById('checkin');
    const checkoutEl = document.getElementById('checkout');
    if (checkinEl && checkoutEl) {
        checkinEl.addEventListener('change', function() {
            checkoutEl.min = this.value;
            if (checkoutEl.value && checkoutEl.value <= this.value) {
                checkoutEl.value = this.value;
            }
        });
    }

    const roomtypeEl2 = document.getElementById('roomtype');
    const guestsEl = document.getElementById('guests');
    if (roomtypeEl2 && guestsEl) {
        roomtypeEl2.addEventListener('change', function() {
            if (this.value === 'standard') {
                guestsEl.max = 2;
            } else if (this.value === 'deluxe') {
                guestsEl.max = 3;
            } else if (this.value === 'suite') {
                guestsEl.max = 4;
            } else {
                guestsEl.max = 4;
            }

            if (Number(guestsEl.value) > Number(guestsEl.max)) {
                guestsEl.value = guestsEl.max;
            }
        });
    }
})();
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.2.3](![alt text](<ภาพถ่ายหน้าจอ 2569-02-25 เวลา 21.04.50.png>))


## คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
