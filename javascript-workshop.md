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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ทดลอง JavaScript</title>
</head>

<body>

    <h2>แบบฝึกปฏิบัติ JavaScript</h2>
    <button onclick="alert('ชื่อ: ณภัทร รัศมี')">
        ปุ่มที่ 1 (แสดงชื่อนักศึกษา)
    </button>

    <br><br>
    <button id="btn2">
        ปุ่มที่ 2 (แสดงวันที่ปัจจุบัน)
    </button>

    <br><br>
    <button onclick="showTime()">
        ปุ่มที่ 3 (แสดงเวลาปัจจุบัน)
    </button>

    <hr>

    <h3>ทดลองรับค่าจาก Textbox</h3>

    <input type="text" id="myText" placeholder="กรอกข้อความที่นี่">

    <button onclick="showText()">
        แสดงข้อความ
    </button>

    <p id="result"></p>

    <script>
        document.getElementById("btn2").onclick = function() {
            let today = new Date();
            alert("วันที่ปัจจุบันคือ: " + today.toLocaleDateString());
        };

        function showTime() {
            let now = new Date();
            alert("เวลาปัจจุบันคือ: " + now.toLocaleTimeString());
        }

        function showText() {
            let text = document.getElementById("myText").value;
            document.getElementById("result").innerHTML = "ข้อความที่คุณพิมพ์คือ: " + text;
        }
    </script>
    <script src="script.js"></script>

</body>
</html>

```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 1](images/image1.png)

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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
    <title>การทดลองที่ 2.1 แสดงผลบนหน้าเว็บ</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f9;
            padding: 30px;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            max-width: 500px;
            margin-bottom: 20px;
        }
        h2 {
            color: #333;
        }
        button {
            padding: 8px 15px;
            border: none;
            background: #007bff;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
        p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <div class="card">
        <h2>ข้อมูลตัวแปรนักศึกษา</h2>
        <p id="basicInfo"></p>
        <button onclick="showBasicInfo()">แสดงข้อมูล</button>
    </div>

    <div class="card">
        <h2>ข้อมูลแบบ Object</h2>
        <p id="objectInfo"></p>
        <button onclick="showObjectInfo()">แสดงข้อมูล Object</button>
    </div>

<script>
   

    const studentId = "68030079";
    let studentName = "ณภัทร รัศมี";
    let midtermScore = 35;
    let finalScore = 40;
    let totalScore = midtermScore + finalScore;

    function showBasicInfo() {
        document.getElementById("basicInfo").innerHTML =
            "รหัสนักศึกษา: " + studentId + "<br>" +
            "ชื่อ: " + studentName + "<br>" +
            "คะแนนกลางภาค: " + midtermScore + "<br>" +
            "คะแนนปลายภาค: " + finalScore + "<br>" +
            "คะแนนรวม: " + totalScore + "<br>" +
            "เกรด: " + calculateGrade(totalScore);
    }

    function calculateGrade(score) {
        if (score >= 80) return "A";
        else if (score >= 70) return "B";
        else if (score >= 60) return "C";
        else if (score >= 50) return "D";
        else return "F";
    }


    const student = {
        studentId: "68030079",
        name: "ณภัทร รัศมี",
        major: "เทคโนโลยีคอมพิวเตอร์",
        gpa: 4.00
    };

    function showObjectInfo() {
        document.getElementById("objectInfo").innerHTML =
            "รหัส: " + student.studentId + "<br>" +
            "ชื่อ: " + student.name + "<br>" +
            "สาขาวิชา: " + student.major + "<br>" +
            "เกรดเฉลี่ย: " + student.gpa;
    }

</script>

</body>
</html>

```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.1](images/image3.png)
![รูปผลการทดลองที่ 2.1](images/image2.png)

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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบฝึกหัด 2.2 การคำนวณพื้นฐาน</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f4f8;
            padding: 30px;
        }
        .card {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            max-width: 500px;
        }
        button {
            padding: 8px 15px;
            border: none;
            background-color: #646060;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #555;
        }
        h2 {
            margin-top: 0;
        }
        
        .container {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: flex-start;
        }

        .card {
            width: 450px;
        }

    </style>
</head>
<body>
<div class="container">
    <div class="card">
        <h2>คำนวณคะแนนเฉลี่ย 3 วิชา</h2>
        <p id="averageResult"></p>
        <button onclick="calculateAverage()">คำนวณคะแนนเฉลี่ย</button>
    </div>

    <div class="card">
        <h2>คำนวณราคาสินค้ารวม VAT 7%</h2>
        <p id="vatResult"></p>
        <button onclick="calculateVAT()">คำนวณราคา</button>
    </div>
</div>
<script>


    function calculateAverage() {
        let score1 = 80;
        let score2 = 75;
        let score3 = 90;

        let total = score1 + score2 + score3;
        let average = total / 3;

        document.getElementById("averageResult").innerHTML =
            "คะแนนวิชา 1: " + score1 + "<br>" +
            "คะแนนวิชา 2: " + score2 + "<br>" +
            "คะแนนวิชา 3: " + score3 + "<br><br>" +
            "คะแนนรวม: " + total + "<br>" +
            "คะแนนเฉลี่ย: " + average.toFixed(2);
    }

    function calculateVAT() {
        let productName = "เมาส์ไร้สาย";
        let price = 500;
        let vatRate = 0.07;

        let vatAmount = price * vatRate;
        let totalPrice = price + vatAmount;

        document.getElementById("vatResult").innerHTML =
            "สินค้า: " + productName + "<br>" +
            "ราคา: " + price + " บาท<br>" +
            "VAT 7%: " + vatAmount.toFixed(2) + " บาท<br><br>" +
            "ราคารวมสุทธิ: " + totalPrice.toFixed(2) + " บาท";
    }

</script>

</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.2](images/image4.png)
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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
    <style>
        body {
            font-family: Arial;
            background: #f4f6f9;
            padding: 30px;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            width: 400px;
        }
    </style>
</head>
<body>


<div class="container">

    <div class="card">
        <h3>ตรวจสอบเลขคู่ / เลขคี่</h3>
        <p id="evenOddResult"></p>
    </div>

    <div class="card">
        <h3>ตารางสูตรคูณ</h3>
        <p id="multiplicationResult"></p>
    </div>

    <div class="card">
        <h3>นับถอยหลัง 10 ถึง 1</h3>
        <p id="countdownResult"></p>
    </div>

    <div class="card">
        <h3>ตรวจสอบช่วงวัย</h3>
        <p id="ageResult"></p>
    </div>

</div>

<script>

window.onload = function() {
    checkEvenOdd();
    showMultiplication();
    countdown();
    checkAge();
};

function checkEvenOdd() {
    let number = 7;
    let result = (number % 2 === 0) ? "เลขคู่" : "เลขคี่";

    document.getElementById("evenOddResult").innerHTML =
        "ตัวเลข: " + number + "<br>ผลลัพธ์: " + result;
}


function showMultiplication() {
    let output = "";

    output += "<b>แม่ 2</b><br>";
    for (let i = 1; i <= 12; i++) {
        output += "2 x " + i + " = " + (2 * i) + "<br>";
    }

    output += "<br><b>แม่ 3</b><br>";

    let j = 1;
    while (j <= 12) {
        output += "3 x " + j + " = " + (3 * j) + "<br>";
        j++;
    }

    document.getElementById("multiplicationResult").innerHTML = output;
}


function countdown() {
    let output = "";
    for (let i = 10; i >= 1; i--) {
        output += i + " ";
    }

    document.getElementById("countdownResult").innerHTML = output;
}


function checkAge() {
    let age = 18;

    let message;

    if (age <= 12) {
        message = "วัยเด็ก";
    } else if (age <= 19) {
        message = "วัยรุ่น";
    } else {
        message = "วัยผู้ใหญ่";
    }

    document.getElementById("ageResult").innerHTML =
        "อายุ: " + age + "<br>ช่วงวัย: " + message;
}

</script>

</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.3](images/image5.png)

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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
<style>
    body{font-family:Arial, sans-serif;max-width:720px;margin:20px auto;padding:16px}
    .row{margin-bottom:12px}
    label{display:block;margin-bottom:6px;font-weight:600}
    input[type="text"], input[type="number"], input[type="password"]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}
    button{padding:8px 12px;border:none;background:#007bff;color:#fff;border-radius:4px;cursor:pointer}
    p.result{background:#f8f9fb;padding:10px;border-radius:6px}
</style>
</head>
<body>
<section>
    <h3>1 คำนวณค่า BMI</h3>
    <div class="row">
        <label for="weight">น้ำหนัก (กก.)</label>
        <input id="weight" type="number" step="0.1" value="">
    </div>
    <div class="row">
        <label for="height">ส่วนสูง (ซม.)</label>
        <input id="height" type="number" step="0.1" value="">
    </div>
    <button onclick="handleBMI()">คำนวณ BMI</button>
    <p id="bmiResult" class="result"></p>
</section>

<hr>

<section>
    <h2>2 ทักทายตามชื่อและอายุ</h2>
    <div class="row">
        <label for="name">ชื่อ</label>
        <input id="name" type="text" value="">
    </div>
    <div class="row">
        <label for="age">อายุ</label>
        <input id="age" type="number" value="">
    </div>
    <button onclick="handleGreet()">แสดงข้อความทักทาย</button>
    <p id="greetResult" class="result"></p>
</section>

<hr>

<section>
    <h2>3 ตรวจสอบความยาวรหัสผ่าน (มากกว่า 8 ตัวอักษร)</h2>
    <div class="row">
        <label for="password">รหัสผ่าน</label>
        <input id="password" type="password" value="">
    </div>
    <button onclick="handlePasswordCheck()">ตรวจสอบรหัสผ่าน</button>
    <p id="pwdResult" class="result"></p>
</section>

<script>

function calculateBMI(weightKg, heightCm) {
    if (!weightKg || !heightCm) return null;
    var heightM = heightCm / 100;
    var bmi = weightKg / (heightM * heightM);
    return parseFloat(bmi.toFixed(2));
}

function bmiCategory(bmi) {
    if (bmi === null) return "ข้อมูลไม่ครบ";
    if (bmi < 18.5) return "ผอม (Underweight)";
    if (bmi < 25) return "สมส่วน (Normal)";
    if (bmi < 30) return "น้ำหนักเกิน (Overweight)";
    return "อ้วน (Obese)";
}

function handleBMI() {
    var w = parseFloat(document.getElementById('weight').value);
    var h = parseFloat(document.getElementById('height').value);
    var bmi = calculateBMI(w, h);
    var msg = (bmi === null) ? "กรุณากรอกค่าน้ำหนักและส่วนสูง" : "ค่า BMI: " + bmi + " — " + bmiCategory(bmi);
    document.getElementById('bmiResult').textContent = msg;
}

function greetByAge(name, age) {
    if (!name) name = "คุณ";
    var ageNum = Number(age);
    if (isNaN(ageNum)) return "อายุไม่ถูกต้อง";
    if (ageNum <= 12) return "สวัสดีเด็กน้อย " + name;
    if (ageNum <= 19) return "สวัสดีวัยรุ่น " + name;
    return "สวัสดีผู้ใหญ่ " + name;
}

function handleGreet() {
    var n = document.getElementById('name').value.trim();
    var a = document.getElementById('age').value;
    document.getElementById('greetResult').textContent = greetByAge(n, a);
}

function isPasswordLongEnough(pwd) {
    if (typeof pwd !== 'string') return false;
    return pwd.length > 8;
}

function handlePasswordCheck() {
    var p = document.getElementById('password').value || '';
    var ok = isPasswordLongEnough(p);
    document.getElementById('pwdResult').textContent = ok ? "รหัสผ่านผ่านเงื่อนไข (มากกว่า 8 ตัวอักษร)" : "รหัสผ่านต้องมีมากกว่า 8 ตัวอักษร";
}
</script>

</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.4.1](images/image6.png)

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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
<style>
    body{font-family:Arial, sans-serif;max-width:720px;margin:20px auto;padding:16px}
    .row{margin-bottom:12px}
    label{display:block;margin-bottom:6px;font-weight:600}
    input[type="text"], input[type="number"], input[type="password"]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}
    button{padding:8px 12px;border:none;background:#007bff;color:#fff;border-radius:4px;cursor:pointer}
    p.result{background:#f8f9fb;padding:10px;border-radius:6px}
</style>
</head>
<body>
<section>
        <h3>1 คำนวณค่า BMI (Arrow)</h3>
        <div class="row">
            <label for="weight2">น้ำหนัก (กก.)</label>
            <input id="weight2" type="number" step="0.1" value="">
        </div>
        <div class="row">
            <label for="height2">ส่วนสูง (ซม.)</label>
            <input id="height2" type="number" step="0.1" value="">
        </div>
        <button onclick="handleBMIArrow()">คำนวณ BMI (Arrow)</button>
        <p id="bmiResult2" class="result"></p>

        <hr>

        <h3>2 ทักทายตามชื่อและอายุ (Arrow)</h3>
        <div class="row">
            <label for="name2">ชื่อ</label>
            <input id="name2" type="text" value="">
        </div>
        <div class="row">
            <label for="age2">อายุ</label>
            <input id="age2" type="number" value="">
        </div>
        <button onclick="handleGreetArrow()">แสดงข้อความทักทาย (Arrow)</button>
        <p id="greetResult2" class="result"></p>

        <hr>
        <h3>3 ตรวจสอบความยาวรหัสผ่าน (Arrow)</h3>
        <div class="row">
            <label for="password2">รหัสผ่าน</label>
            <input id="password2" type="password" value="">
        </div>
        <button onclick="handlePasswordCheckArrow()">ตรวจสอบรหัสผ่าน (Arrow)</button>
        <p id="pwdResult2" class="result"></p>
    </section>

    <script>

    const calculateBMIArrow = (weightKg, heightCm) => {
        if (!weightKg || !heightCm) return null;
        const heightM = heightCm / 100;
        const bmi = weightKg / (heightM * heightM);
        return parseFloat(bmi.toFixed(2));
    };

    const bmiCategoryArrow = (bmi) => {
        if (bmi === null) return "ข้อมูลไม่ครบ";
        if (bmi < 18.5) return "ผอม (Underweight)";
        if (bmi < 25) return "สมส่วน (Normal)";
        if (bmi < 30) return "น้ำหนักเกิน (Overweight)";
        return "อ้วน (Obese)";
    };

    const handleBMIArrow = () => {
        const w = parseFloat(document.getElementById('weight2').value);
        const h = parseFloat(document.getElementById('height2').value);
        const bmi = calculateBMIArrow(w, h);
        const msg = (bmi === null) ? "กรุณากรอกค่าน้ำหนักและส่วนสูง" : `ค่า BMI: ${bmi} — ${bmiCategoryArrow(bmi)}`;
        document.getElementById('bmiResult2').textContent = msg;
    };

    const greetByAgeArrow = (name = "คุณ", age) => {
        const ageNum = Number(age);
        if (isNaN(ageNum)) return "อายุไม่ถูกต้อง";
        if (ageNum <= 12) return `สวัสดีเด็กน้อย ${name}`;
        if (ageNum <= 19) return `สวัสดีวัยรุ่น ${name}`;
        return `สวัสดีผู้ใหญ่ ${name}`;
    };

    const handleGreetArrow = () => {
        const n = document.getElementById('name2').value.trim() || "คุณ";
        const a = document.getElementById('age2').value;
        document.getElementById('greetResult2').textContent = greetByAgeArrow(n, a);
    };

    const isPasswordLongEnoughArrow = (pwd) => typeof pwd === 'string' && pwd.length > 8;

    const handlePasswordCheckArrow = () => {
        const p = document.getElementById('password2').value || '';
        const ok = isPasswordLongEnoughArrow(p);
        document.getElementById('pwdResult2').textContent = ok ? "รหัสผ่านผ่านเงื่อนไข (มากกว่า 8 ตัวอักษร)" : "รหัสผ่านต้องมีมากกว่า 8 ตัวอักษร";
    };
    </script>
</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.4.2](images/image7.png)
![รูปผลการทดลองที่ 2.4.2](images/image8.png)

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
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
<style>
    body{font-family:Arial, sans-serif;max-width:720px;margin:20px auto;padding:16px}
    .row{margin-bottom:12px}
    label{display:block;margin-bottom:6px;font-weight:600}
    input[type="text"], input[type="number"], input[type="password"]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}
    button{padding:8px 12px;border:none;background:#007bff;color:#fff;border-radius:4px;cursor:pointer}
    p.result{background:#f8f9fb;padding:10px;border-radius:6px}
</style>
</head>
<body>
<section>
    <h2>การทดลอง 3.1 — คำนวณ BMI และแสดงผล (อ้วน/ผอม/สมส่วน)</h2>
    <div class="row">
        <label for="weight3">น้ำหนัก (กก.)</label>
        <input id="weight3" type="number" step="0.1" value="">
    </div>
    <div class="row">
        <label for="height3">ส่วนสูง (ซม.)</label>
        <input id="height3" type="number" step="0.1" value="">
    </div>
    <button onclick="handleBMI3()">คำนวณ BMI</button>
    <p id="bmiResult3" class="result"></p>
</section>

<script>

    function calculateBMI(weightKg, heightCm) {
        const w = parseFloat(weightKg);
        const h = parseFloat(heightCm);
        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;
        const heightM = h / 100;
        const bmi = w / (heightM * heightM);
        return parseFloat(bmi.toFixed(2));
    }

    function bmiCategory(bmi) {
        if (bmi === null || isNaN(bmi)) return "ข้อมูลไม่ครบหรือไม่ถูกต้อง";
        if (bmi < 18.5) return "ผอม (Underweight)";
        if (bmi < 25) return "สมส่วน (Normal)";
        if (bmi < 30) return "น้ำหนักเกิน (Overweight)";
        return "อ้วน (Obese)";
    }

    function handleBMI3() {
        const w = document.getElementById('weight3').value;
        const h = document.getElementById('height3').value;
        const bmi = calculateBMI(w, h);
        const output = (bmi === null)
            ? "กรุณากรอกค่าน้ำหนักและส่วนสูงให้ถูกต้อง"
            : `ค่า BMI: ${bmi} — ${bmiCategory(bmi)}`;
        document.getElementById('bmiResult3').textContent = output;
    }
</script>
</body>
</html>
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.1](images/image9.png)

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
---
## สรุป
### การจัดกึ่งกลางหน้าเว็บ

-ใช้ max-width: 600px; และ margin: 0 auto;

ผลที่ได้: ฟอร์มอยู่กึ่งกลางหน้าจอ ดูเป็นระเบียบและอ่านง่ายขึ้น

### การตกแต่งพื้นหลังและตัวอักษร

-เปลี่ยน background-color ของ body เป็นสีเทาอ่อน

-กำหนด font-family เป็น 'Sarabun'

ผลที่ได้: หน้าเว็บดูสบายตา และอ่านง่ายมากขึ้น

### การเพิ่มเงา (box-shadow)

-ใส่ box-shadow ให้กับ form

ผลที่ได้: ฟอร์มดูมีมิติ ไม่แบนราบ

### การปรับปุ่มกด

-เปลี่ยนสีปุ่มเป็นสีน้ำเงิน

-เพิ่ม hover effect

ผลที่ได้: เมื่อเอาเมาส์ไปวางบนปุ่ม สีจะเปลี่ยน ทำให้ดู interactive มากขึ้น

### การรองรับมือถือ

-ใช้ @media (max-width: 480px)

ผลที่ได้: เมื่อเปิดบนมือถือ ขอบหน้าจอไม่ล้น และแสดงผลเหมาะสม

---
```html
[บันทึกโค้ด ที่นี่]
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
</body>
</html>

```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.2.2](images/image10.png)
![รูปผลการทดลองที่ 3.2.2](images/image11.png)
![รูปผลการทดลองที่ 3.2.2](images/image12.png)

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
 ```
[บันทึกโค้ด ที่นี่]
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>
</head>

<body>

    <h2>ระบบจองห้องพักออนไลน์</h2>

    <form id="bookingForm">
        ชื่อ-นามสกุล:
        <input type="text" id="fullname" required><br><br>

        เบอร์โทร:
        <input type="text" id="phone" required><br><br>

        วันที่เช็คอิน:
        <input type="date" id="checkin" required><br><br>

        วันที่เช็คเอาท์:
        <input type="date" id="checkout" required><br><br>

        ประเภทห้อง:
        <select id="roomtype">
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
        </select><br><br>

        จำนวนผู้เข้าพัก:
        <input type="number" id="guests" min="1" max="2" required><br><br>

        <button type="submit">จองห้องพัก</button>
    </form>

    <script>
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const checkin = new Date(document.getElementById('checkin').value);
            const checkout = new Date(document.getElementById('checkout').value);
            const today = new Date();

            today.setHours(0,0,0,0);

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

            const summary = `
สรุปการจอง:
ชื่อผู้จอง: ${document.getElementById('fullname').value}
ประเภทห้อง: ${roomtypeText}
วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}
วันที่ออก: ${checkout.toLocaleDateString('th-TH')}
จำนวนวันที่พัก: ${days} วัน
จำนวนผู้เข้าพัก: ${document.getElementById('guests').value} ท่าน
            `;

            if (confirm(summary + '\n\nยืนยันการจองห้องพัก?')) {
                alert('จองห้องพักเรียบร้อยแล้ว');
                this.reset();
            }
        });

        document.getElementById('checkin').addEventListener('change', function() {
            document.getElementById('checkout').min = this.value;
        });

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

</body>
</html>
```
## สรุป 
### 1. เพิ่มการตรวจสอบวันที่

ผลที่ได้:ไม่สามารถเลือกวันย้อนหลัง
ลดข้อผิดพลาดในการจอง

### 2. เพิ่มการตรวจสอบเบอร์โทรศัพท์

ผลที่ได้:ต้องกรอกตัวเลข 10 หลักเท่านั้น
ป้องกันข้อมูลผิดรูปแบบ

### 3. เพิ่มสรุปการจองก่อนยืนยัน

ผลที่ได้:ผู้ใช้สามารถตรวจสอบข้อมูลก่อนกดยืนยัน
ลดความผิดพลาดในการจอง

### 4. เพิ่มการตรวจสอบแบบ Real-time

ผลที่ได้:วันเช็คเอาท์ถูกจำกัดอัตโนมัติ

จำนวนผู้เข้าพักถูกจำกัดตามประเภทห้อง
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 3.2.3](images/image.png)


### คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
