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
    <title>ทดลอง JavaScript กับ NATTHAPONG</title>
</head>
<body>
    <!-- Inline JavaScript -->
    <button onclick="alert('ชื่อนักศึกษา: NATTHAPONG')">ชื่อนักศึกษา</button>

    <!-- Internal JavaScript -->
    <button id="btn2">วันที่ปัจจุบัน</button>

    <!-- External JavaScript -->
    <button id="btn3" onclick="hello3();">เวลาปัจจุบัน</button>

    <!-- ช่องกรอกข้อความ -->
    <input type="text" id="textInput" placeholder="กรอกข้อความที่นี่">
    <button onclick="showText();">แสดงข้อความ</button>

    <!-- Internal JavaScript -->
    <script>
        document.getElementById('btn2').onclick = function() {
            alert('วันที่ปัจจุบัน: ' + new Date().toLocaleDateString());
        };

        function showText() {
            var text = document.getElementById('textInput').value;
            alert('ข้อความที่กรอก: ' + text);
        }
    </script>

    <!-- External JavaScript -->
    <script src="script.js"></script>
</body>
</html>
]
```
[![image](https://github.com/user-attachments/assets/4d7aa3f8-9fa5-44a8-9c02-4ed565ec129b)
]
[![image](https://github.com/user-attachments/assets/118494e2-8f6d-458f-88d1-ac21d00a2ee6)
]
[![image](https://github.com/user-attachments/assets/c512e03a-4765-42a2-9098-b15c9ea16405)
]
[![image](https://github.com/user-attachments/assets/d37788ff-c5bf-4a7c-a400-9185b67408c2)
]
  
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
    <title>การทดลองประกาศตัวแปร</title>
</head>
<body>
    <h1>บันทึกผลการทดลอง 2.1: การทดลองประกาศตัวแปร</h1>

    <script>
       
        let studentID = "67030073";         
        let studentName = "Natthapong Niampradit";
        let midTermScore = 60;             
        let finalTermScore = 80;           

        
        const student = {
            studentID: "67030073",          
            studentName: "ณัฐพงศ์ เนียมประดิษฐ",  
            major: "เทคโนโลยีตอมพิวเตอร์",  
            GPA: 3.09                   
        };
    </script>
</body>
</html>]
```
[รูปผลการทดลองที่ 2.1]


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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>การคำนวณคะแนนเฉลี่ย</title>
</head>
<body>
    <h1>การคำนวณคะแนนเฉลี่ย</h1>
    <form id="scoreForm">
        <label for="subject1">คะแนนวิชาที่ 1:</label>
        <input type="number" id="subject1" name="subject1"><br><br>
        <label for="subject2">คะแนนวิชาที่ 2:</label>
        <input type="number" id="subject2" name="subject2"><br><br>
        <label for="subject3">คะแนนวิชาที่ 3:</label>
        <input type="number" id="subject3" name="subject3"><br><br>
        <button type="button" onclick="calculateAverage()">คำนวณคะแนนเฉลี่ย</button>
    </form>
    <p id="result">ผลการคำนวณ: </p>

    <script>
        function calculateAverage() {
            let subject1 = parseFloat(document.getElementById('subject1').value);
            let subject2 = parseFloat(document.getElementById('subject2').value);
            let subject3 = parseFloat(document.getElementById('subject3').value);
            let average = (subject1 + subject2 + subject3) / 3;
            document.getElementById('result').innerHTML = "ผลการคำนวณ: " + average.toFixed(2);
        }
    </script>
</body>
</html>
]
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>การคำนวณราคาสินค้ารวม VAT</title>
</head>
<body>
    <h1>การคำนวณราคาสินค้ารวม VAT</h1>
    <form id="priceForm">
        <label for="productName">ชื่อสินค้า:</label>
        <input type="text" id="productName" name="productName"><br><br>
        <label for="productPrice">ราคาสินค้า:</label>
        <input type="number" id="productPrice" name="productPrice"><br><br>
        <button type="button" onclick="calculateVAT()">คำนวณราคาสินค้ารวม VAT</button>
    </form>
    <p id="resultVAT">ผลการคำนวณ: </p>

    <script>
        function calculateVAT() {
            let productPrice = parseFloat(document.getElementById('productPrice').value);
            let vat = productPrice * 0.07;
            let totalPrice = productPrice + vat;
            document.getElementById('resultVAT').innerHTML = "ผลการคำนวณ: " + totalPrice.toFixed(2) + " (รวม VAT 7%)";
        }
    </script>
</body>
</html>
]
```
[![Screenshot 2025-02-16 213914](https://github.com/user-attachments/assets/e04f4166-a3bc-4bb7-8339-5b96ad9f17e2)
]
[![image](https://github.com/user-attachments/assets/5715ede4-2cc4-4a07-9488-e27e67bb0147)
]

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบทดสอบ 2.3</title>
</head>
<body>
    <h2>โปรแกรมทดสอบ</h2>

    <button onclick="checkEvenOdd()">ตรวจสอบเลขคู่-คี่</button>
    <button onclick="showMultiplication2()">แสดงสูตรคูณแม่ 2</button>
    <button onclick="showMultiplication3()">แสดงสูตรคูณแม่ 3</button>
    <button onclick="countDown()">นับถอยหลัง</button>
    <button onclick="checkAge()">ตรวจสอบช่วงวัย</button>

    <p id="result"></p>

    <script>
        function checkEvenOdd() {
            let number = prompt("กรอกตัวเลข:");
            number = parseInt(number);
            if (number % 2 === 0) {
                document.getElementById("result").innerHTML = number + " เป็นเลขคู่";
            } else {
                document.getElementById("result").innerHTML = number + " เป็นเลขคี่";
            }
        }

        function showMultiplication2() {
            let text = "<b> ตารางสูตรคูณแม่ 2</b><br>";
            for (let i = 1; i <= 12; i++) {
                text += "2 × " + i + " = " + (2 * i) + "<br>";
            }
            document.getElementById("result").innerHTML = text;
        }

        function showMultiplication3() {
            let text = "<b> ตารางสูตรคูณแม่ 3</b><br>";
            let j = 1;
            while (j <= 12) {
                text += "3 × " + j + " = " + (3 * j) + "<br>";
                j++;
            }
            document.getElementById("result").innerHTML = text;
        }

        function countDown() {
            let text = "<b> นับถอยหลังจาก 10 ถึง 1</b><br>";
            for (let k = 10; k >= 1; k--) {
                text += k + "<br>";
            }
            document.getElementById("result").innerHTML = text;
        }

        function checkAge() {
            let age = prompt("กรอกอายุของคุณ:");
            age = parseInt(age);
            let resultText = "";

            if (age >= 0 && age <= 12) {
                resultText = "อายุ " + age + " ปี: วัยเด็ก";
            } else if (age >= 13 && age <= 18) {
                resultText = "อายุ " + age + " ปี: วัยรุ่น";
            } else {
                resultText = "อายุ " + age + " ปี: วัยผู้ใหญ่";
            }

            document.getElementById("result").innerHTML = resultText;
        }
    </script>

</body>
</html>]
```
[![image](https://github.com/user-attachments/assets/07842b75-df28-44f2-be7b-0b7f7b6bc5aa)]
[![image](https://github.com/user-attachments/assets/5e3a62df-9e6e-4853-9916-036298919a57)]
[![image](https://github.com/user-attachments/assets/f2239f9e-7898-421e-8afd-639a7e8996f9)]
[![image](https://github.com/user-attachments/assets/b02b6de1-70fc-4cc9-b7b1-0a09f68ba1d0)]
[![image](https://github.com/user-attachments/assets/b981d3e9-901a-4991-9b35-d2279473b23c)]

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบทดสอบ Functions</title>
</head>
<body>
    <h1>แบบทดสอบที่ 2.4.1: Functions</h1>
    
    <h2>คำนวณ BMI</h2>
    <p>น้ำหนัก: <input type="number" id="weight" placeholder="น้ำหนัก (kg)" step="0.1"></p>
    <p>ส่วนสูง: <input type="number" id="height" placeholder="ส่วนสูง (m)" step="0.01">
    <button onclick="showBMI()">คำนวณ BMI</button>
    <p id="bmiResult"></p>
    
    <h2>ทักทายผู้ใช้ตามอายุ</h2>
    <p>ชื่อ: <input type="text" id="name" placeholder="ชื่อ"></p>
    <p>อายุ: <input type="number" id="age" placeholder="อายุ"></p>
    <button onclick="greetUser()">ทักทาย</button>
    <p id="greeting"></p>
    
    <h2>ตรวจสอบรหัสผ่าน</h2>
    <p>รหัสผ่าน: <input type="text" id="password" placeholder="รหัสผ่าน"></p>
    <button onclick="checkPassword()">ตรวจสอบ</button>
    <p id="passwordResult"></p>
    
    <script>
        function calculateBMI(weight, height) {
            return (weight / (height * height)).toFixed(2);
        }
        
        function showBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            
            if (!weight || !height || weight <= 0 || height <= 0) {
                alert("กรุณากรอกข้อมูลให้ถูกต้อง!");
                return;
            }
            
            // ตรวจสอบว่าส่วนสูงอยู่ในช่วงที่เป็นไปได้ (0.5m - 2.5m)
            if (height < 0.5 || height > 2.5) {
                alert("ส่วนสูงไม่อยู่ในช่วงที่เป็นไปได้ กรุณาตรวจสอบว่าคุณกรอกส่วนสูงในหน่วยเมตร (เช่น 1.65 สำหรับ 165 ซม.)");
                return;
            }
            
            const bmi = calculateBMI(weight, height);
            document.getElementById('bmiResult').innerText = `BMI ของคุณคือ: ${bmi}`;
        }
        
        function greetUser() {
            const name = document.getElementById('name').value.trim();
            const age = parseInt(document.getElementById('age').value);
            if (!name || isNaN(age) || age <= 0) {
                alert("กรุณากรอกข้อมูลให้ถูกต้อง!");
                return;
            }
            let greeting = age < 18 ? `สวัสดีครับ/ค่ะ ${name}! คุณยังเด็กมาก!` :
                        age <= 30 ? `สวัสดีครับ/ค่ะ ${name}! คุณกำลังอยู่ในช่วงวัยหนุ่มสาว!` :
                                    `สวัสดีครับ/ค่ะ ${name}! ยินดีที่ได้พบคุณ!`;
            document.getElementById('greeting').innerText = greeting;
        }
        
        function checkPassword() {
            const password = document.getElementById('password').value;
            document.getElementById('passwordResult').innerText = 
                password.length > 8 ? "รหัสผ่านยาวพอ" : "รหัสผ่านต้องยาวกว่า 8 ตัวอักษร";
        }
    </script>
</body>
</html>]
```
[![image](https://github.com/user-attachments/assets/58f11c85-0d5f-4279-a6b5-04fe9dcddb08)
]



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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบทดสอบ Arrow Functions</title>
</head>
<body>
    <h1>แบบทดสอบที่ 2.4.2: Arrow Functions</h1>
    
    <h2>คำนวณ BMI</h2>
    <p>น้ำหนัก: <input type="number" id="weight" placeholder="น้ำหนัก (kg)" step="0.1"></p>
    <p>ส่วนสูง: <input type="number" id="height" placeholder="ส่วนสูง (m)" step="0.01">
    <small>กรอกในหน่วยเมตร เช่น 1.65 สำหรับ 165 ซม.</small></p>
    <button onclick="showBMI()">คำนวณ BMI</button>
    <p id="bmiResult"></p>
    
    <h2>ทักทายผู้ใช้ตามอายุ</h2>
    <p>ชื่อ: <input type="text" id="name" placeholder="ชื่อ"></p>
    <p>อายุ: <input type="number" id="age" placeholder="อายุ"></p>
    <button onclick="greetUser()">ทักทาย</button>
    <p id="greeting"></p>
    
    <h2>ตรวจสอบรหัสผ่าน</h2>
    <p>รหัสผ่าน: <input type="text" id="password" placeholder="รหัสผ่าน"></p>
    <button onclick="checkPassword()">ตรวจสอบ</button>
    <p id="passwordResult"></p>
    
    <script>
        // 1. Arrow function คำนวณค่า BMI
        const calculateBMI = (weight, height) => (weight / (height * height)).toFixed(2);
        
        // ฟังก์ชันแสดงผล BMI
        const showBMI = () => {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            
            if (!weight || !height || weight <= 0 || height <= 0) {
                alert("กรุณากรอกข้อมูลให้ถูกต้อง!");
                return;
            }
            
            // ตรวจสอบว่าส่วนสูงอยู่ในช่วงที่เป็นไปได้ (0.5m - 2.5m)
            if (height < 0.5 || height > 2.5) {
                alert("ส่วนสูงไม่อยู่ในช่วงที่เป็นไปได้ กรุณาตรวจสอบว่าคุณกรอกส่วนสูงในหน่วยเมตร (เช่น 1.65 สำหรับ 165 ซม.)");
                return;
            }
            
            const bmi = calculateBMI(weight, height);
            document.getElementById('bmiResult').innerText = `BMI ของคุณคือ: ${bmi}`;
        };
        
        // 2. Arrow function รับชื่อและอายุ แล้วแสดงข้อความทักทายที่เหมาะสมกับอายุ
        const getGreeting = (name, age) => {
            if (age < 18) return `สวัสดีครับ/ค่ะ ${name}! คุณยังเด็กมาก!`;
            if (age <= 30) return `สวัสดีครับ/ค่ะ ${name}! คุณกำลังอยู่ในช่วงวัยหนุ่มสาว!`;
            return `สวัสดีครับ/ค่ะ ${name}! ยินดีที่ได้พบคุณ!`;
        };
        
        // ฟังก์ชันแสดงผลการทักทาย
        const greetUser = () => {
            const name = document.getElementById('name').value.trim();
            const age = parseInt(document.getElementById('age').value);
            if (!name || isNaN(age) || age <= 0) {
                alert("กรุณากรอกข้อมูลให้ถูกต้อง!");
                return;
            }
            
            const greeting = getGreeting(name, age);
            document.getElementById('greeting').innerText = greeting;
        };
        
        // 3. Arrow function ตรวจสอบรหัสผ่านว่ามีความยาวมากกว่า 8 ตัวอักษรหรือไม่
        const isPasswordValid = password => password.length > 8;
        
        // ฟังก์ชันแสดงผลการตรวจสอบรหัสผ่าน
        const checkPassword = () => {
            const password = document.getElementById('password').value;
            const isValid = isPasswordValid(password);
            document.getElementById('passwordResult').innerText = 
                isValid ? "รหัสผ่านยาวพอ" : "รหัสผ่านต้องยาวกว่า 8 ตัวอักษร";
        };
    </script>
</body>
</html>]
```
[![image](https://github.com/user-attachments/assets/4e8f81c8-75f7-416d-849c-f2d1ccaa8ec5)
]


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
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>คำนวณค่า BMI</title>
</head>
<body>
    <h1>คำนวณค่า BMI (ดัชนีมวลกาย)</h1>

    <label for="weight">น้ำหนัก (กก.):</label>
    <input type="number" id="weight" required>
    
    <label for="height">ส่วนสูง (ม.):</label>
    <input type="number" id="height" step="0.01" required>
    
    <button onclick="calculateBMI()">คำนวณ BMI</button>
    
    <p id="result"></p>

    <script>
        const calculateBMI = () => {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);

            if (!weight || !height) {
                document.getElementById('result').innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน!";
                return;
            }

            const bmi = weight / (height * height);

            let status = '';
            if (bmi < 18.5) {
                status = "ผอม";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                status = "สมส่วน";
            } else {
                status = "อ้วน";
            }

            document.getElementById('result').innerHTML = `ค่า BMI ของคุณคือ: ${bmi.toFixed(2)} - สถานะ: ${status}`;
        }
    </script>
</body>
</html>]
```
[![image](https://github.com/user-attachments/assets/c72c9429-6801-4ac5-a1c5-5a701f343e6b)]

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
        
        .success-message {
            background-color: #2ecc71;
            color: white;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
            display: none;
        }
        
        .error-message {
            color: #e74c3c;
            margin-top: 5px;
            font-size: 14px;
        }
        
        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <h1>แบบฟอร์มจองห้องพัก</h1>
    
    <form id="bookingForm">
        <div>
            <label for="fullname">ชื่อ-นามสกุล:</label>
            <input type="text" id="fullname" name="fullname" required>
            <span class="error-message" id="fullname-error"></span>
        </div>
        
        <div>
            <label for="email">อีเมล:</label>
            <input type="email" id="email" name="email" required>
            <span class="error-message" id="email-error"></span>
        </div>
        
        <div>
            <label for="phone">เบอร์โทรศัพท์:</label>
            <input type="tel" id="phone" name="phone" required>
            <span class="error-message" id="phone-error"></span>
        </div>
        
        <div>
            <label for="checkin">วันที่เช็คอิน:</label>
            <input type="date" id="checkin" name="checkin" required>
            <span class="error-message" id="checkin-error"></span>
        </div>
        
        <div>
            <label for="checkout">วันที่เช็คเอาท์:</label>
            <input type="date" id="checkout" name="checkout" required>
            <span class="error-message" id="checkout-error"></span>
        </div>
        
        <div>
            <label for="roomtype">ประเภทห้องพัก:</label>
            <select id="roomtype" name="roomtype" required>
                <option value="">กรุณาเลือกประเภทห้องพัก</option>
                <option value="standard">ห้องมาตรฐาน</option>
                <option value="deluxe">ห้องดีลักซ์</option>
                <option value="suite">ห้องสวีท</option>
            </select>
            <span class="error-message" id="roomtype-error"></span>
        </div>
        
        <div>
            <label for="guests">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="guests" name="guests" min="1" max="4" required>
            <span class="error-message" id="guests-error"></span>
        </div>
        
        <button type="submit">จองห้องพัก</button>
    </form>
    
    <div id="success-message" class="success-message">
        การจองห้องพักเสร็จสมบูรณ์ ขอบคุณที่ใช้บริการ!
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('bookingForm');
            const successMessage = document.getElementById('success-message');
            
            // ตั้งค่าวันที่ต่ำสุดเป็นวันนี้
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('checkin').min = today;
            document.getElementById('checkout').min = today;
            
            // ตรวจสอบว่าวันที่เช็คเอาท์ต้องมากกว่าวันที่เช็คอิน
            document.getElementById('checkin').addEventListener('change', function() {
                document.getElementById('checkout').min = this.value;
                
                // หากวันที่เช็คเอาท์น้อยกว่าวันที่เช็คอินใหม่ ให้รีเซ็ต
                const checkout = document.getElementById('checkout');
                if (checkout.value && checkout.value < this.value) {
                    checkout.value = this.value;
                }
            });
            
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                // ล้างข้อความผิดพลาดเก่า
                const errorElements = document.querySelectorAll('.error-message');
                errorElements.forEach(element => {
                    element.textContent = '';
                });
                
                let isValid = true;
                
                // ตรวจสอบรูปแบบอีเมล
                const email = document.getElementById('email').value;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    document.getElementById('email-error').textContent = 'กรุณากรอกอีเมลให้ถูกต้อง';
                    isValid = false;
                }
                
                // ตรวจสอบเบอร์โทรศัพท์
                const phone = document.getElementById('phone').value;
                const phonePattern = /^0\d{9}$/;
                if (!phonePattern.test(phone)) {
                    document.getElementById('phone-error').textContent = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (เช่น 0812345678)';
                    isValid = false;
                }
                
                // ตรวจสอบวันที่
                const checkin = new Date(document.getElementById('checkin').value);
                const checkout = new Date(document.getElementById('checkout').value);
                if (checkout <= checkin) {
                    document.getElementById('checkout-error').textContent = 'วันที่เช็คเอาท์ต้องมากกว่าวันที่เช็คอิน';
                    isValid = false;
                }
                
                if (isValid) {
                    // ซ่อนฟอร์มและแสดงข้อความสำเร็จ
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // ในระบบจริงควรส่งข้อมูลไปยัง server ด้วย
                    // fetch('/api/booking', {
                    //     method: 'POST',
                    //     body: new FormData(form)
                    // })
                }
            });
        });
    </script>
</body>
</html>]
```
[![image](https://github.com/user-attachments/assets/be43e421-2eb6-42ef-bbac-a0138ce2541b)]
[![image](https://github.com/user-attachments/assets/52be77ce-a00f-4a01-ab27-3cb85a4c844e)]


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

        .error {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
        }

        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <h1>แบบฟอร์มจองห้องพัก</h1>
    
    <form id="bookingForm">
        <div>
            <label for="fullname">ชื่อ-นามสกุล:</label>
            <input type="text" id="fullname" name="fullname" required>
            <div id="fullname-error" class="error"></div>
        </div>

        <div>
            <label for="email">อีเมล:</label>
            <input type="email" id="email" name="email" required>
            <div id="email-error" class="error"></div>
        </div>

        <div>
            <label for="phone">เบอร์โทรศัพท์:</label>
            <input type="tel" id="phone" name="phone" required>
            <div id="phone-error" class="error"></div>
        </div>

        <div>
            <label for="checkin">วันที่เช็คอิน:</label>
            <input type="date" id="checkin" name="checkin" required>
            <div id="checkin-error" class="error"></div>
        </div>

        <div>
            <label for="checkout">วันที่เช็คเอาท์:</label>
            <input type="date" id="checkout" name="checkout" required>
            <div id="checkout-error" class="error"></div>
        </div>

        <div>
            <label for="roomtype">ประเภทห้องพัก:</label>
            <select id="roomtype" name="roomtype" required>
                <option value="">กรุณาเลือกประเภทห้องพัก</option>
                <option value="standard">ห้องมาตรฐาน</option>
                <option value="deluxe">ห้องดีลักซ์</option>
                <option value="suite">ห้องสวีท</option>
            </select>
            <div id="roomtype-error" class="error"></div>
        </div>

        <div>
            <label for="guests">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="guests" name="guests" min="1" max="4" required>
            <div id="guests-error" class="error"></div>
        </div>

        <button type="submit">จองห้องพัก</button>
    </form>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('bookingForm');
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            // ตั้งค่าวันที่ขั้นต่ำเป็นวันนี้
            const todayStr = today.toISOString().split('T')[0];
            document.getElementById('checkin').min = todayStr;
            document.getElementById('checkout').min = todayStr;
            
            // ล้างข้อความแสดงข้อผิดพลาด
            function clearErrors() {
                const errorElements = document.querySelectorAll('.error');
                errorElements.forEach(el => el.textContent = '');
            }
            
            // แสดงข้อความผิดพลาด
            function showError(fieldId, message) {
                document.getElementById(fieldId + '-error').textContent = message;
            }

            document.getElementById('checkin').addEventListener('change', function() {
                const checkoutInput = document.getElementById('checkout');
                checkoutInput.min = this.value;
                
                // ถ้าวันที่เช็คเอาท์น้อยกว่าวันที่เช็คอินใหม่ ให้กำหนดเป็นวันเช็คอิน
                if (checkoutInput.value && new Date(checkoutInput.value) < new Date(this.value)) {
                    checkoutInput.value = this.value;
                }
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

            form.addEventListener('submit', function(e) {
                e.preventDefault();
                clearErrors();
                
                let isValid = true;
                
                // ตรวจสอบชื่อ-นามสกุล
                const fullname = document.getElementById('fullname').value.trim();
                if (fullname.length < 3) {
                    showError('fullname', 'กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง');
                    isValid = false;
                }
                
                // ตรวจสอบอีเมล
                const email = document.getElementById('email').value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showError('email', 'กรุณากรอกอีเมลให้ถูกต้อง');
                    isValid = false;
                }
                
                // ตรวจสอบเบอร์โทรศัพท์
                const phone = document.getElementById('phone').value.trim();
                const phoneRegex = /^[0-9]{10}$/;
                if (!phoneRegex.test(phone)) {
                    showError('phone', 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
                    isValid = false;
                }
                
                // ตรวจสอบวันที่เช็คอิน
                const checkin = new Date(document.getElementById('checkin').value);
                if (isNaN(checkin.getTime()) || checkin < today) {
                    showError('checkin', 'กรุณาเลือกวันเช็คอินที่ถูกต้อง');
                    isValid = false;
                }
                
                // ตรวจสอบวันที่เช็คเอาท์
                const checkout = new Date(document.getElementById('checkout').value);
                if (isNaN(checkout.getTime())) {
                    showError('checkout', 'กรุณาเลือกวันเช็คเอาท์ที่ถูกต้อง');
                    isValid = false;
                } else if (checkout <= checkin) {
                    showError('checkout', 'วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
                    isValid = false;
                }
                
                // ตรวจสอบประเภทห้องพัก
                const roomtype = document.getElementById('roomtype');
                if (!roomtype.value) {
                    showError('roomtype', 'กรุณาเลือกประเภทห้องพัก');
                    isValid = false;
                }
                
                // ตรวจสอบจำนวนผู้เข้าพัก
                const guests = parseInt(document.getElementById('guests').value);
                const guestsInput = document.getElementById('guests');
                if (isNaN(guests) || guests < 1 || guests > guestsInput.max) {
                    showError('guests', `จำนวนผู้เข้าพักต้องอยู่ระหว่าง 1-${guestsInput.max} ท่าน`);
                    isValid = false;
                }
                
                if (isValid) {
                    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
                    const roomtypeText = roomtype.options[roomtype.selectedIndex].text;
                    
                    const summary = `
                        สรุปการจอง:
                        - ชื่อผู้จอง: ${fullname}
                        - ประเภทห้อง: ${roomtypeText}
                        - วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}
                        - วันที่ออก: ${checkout.toLocaleDateString('th-TH')}
                        - จำนวนวันที่พัก: ${days} วัน
                        - จำนวนผู้เข้าพัก: ${guests} ท่าน
                    `;
                    
                    if (confirm(summary + '\n\nยืนยันการจองห้องพัก?')) {
                        alert('จองห้องพักเรียบร้อยแล้ว');
                        form.reset();
                    }
                }
            });
        });
    </script>
</body>
</html>]
```
[![image](https://github.com/user-attachments/assets/32fc787b-7ced-4eb3-af29-29300224e455)]
[![image](https://github.com/user-attachments/assets/fb5d0bd6-1d71-41ec-8655-e4070e329e27)]
[![image](https://github.com/user-attachments/assets/d15bd1aa-aada-4deb-8b86-04d39167ddf0)]


## คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
