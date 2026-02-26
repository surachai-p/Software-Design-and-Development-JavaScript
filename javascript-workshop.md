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
    <!-- Inline JavaScript -->
    <button onclick="alert('นางสาวกันติชา ย๋องชา')">name</button>

    <!-- ทดสอบ Internal JavaScript -->
    <button id="btn2">วันที่</button>

    <!-- ทดสอบ External JavaScript -->
    <button id="btn3" onclick="hello3();">เวลา</button>

    <!-- Internal JavaScript -->
    <script>
    document.getElementById('btn2').onclick = function() {
        const today = new Date();
        alert("วันที่ปัจจุบัน: " + today.toLocaleDateString('th-TH'));
    };
    </script>
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
```javascript
[const studentID = "68030020";           
let studentName = "นางสาวกันติชา ย๋องชา";  
let midtermScore = 78;                  
let finalExamScore = 82;                


const student = {
    id: "68030020",
    name: "นางสาวกันติชา ย๋องชา",
    major: "เทคโนโลยีคอมพิวเตอร์",
    gpa: 3.45 ่]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.1](![alt text](image-1.png))


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
    <h3>แบบทดสอบที่ 2.2: การคำนวณพื้นฐาน</h3>

    <!-- โปรแกรม 1: คำนวณคะแนนเฉลี่ย 3 วิชา -->
    <h4>โปรแกรมที่ 1: คำนวณคะแนนเฉลี่ย 3 วิชา</h4>
    <label>คะแนนวิชาที่ 1: <input type="number" id="score1" placeholder="กรอกคะแนน"></label><br>
    <label>คะแนนวิชาที่ 2: <input type="number" id="score2" placeholder="กรอกคะแนน"></label><br>
    <label>คะแนนวิชาที่ 3: <input type="number" id="score3" placeholder="กรอกคะแนน"></label><br>
    <button onclick="calculateAverageScore();">คำนวณคะแนนเฉลี่ย</button>
    <p id="avgOutput"></p>

    <hr>

    <!-- โปรแกรม 2: คำนวณราคาสินค้าที่รวม VAT 7% -->
    <h4>โปรแกรมที่ 2: คำนวณราคาสินค้าที่รวม VAT 7%</h4>
    <label>ชื่อสินค้า: <input type="text" id="productName" placeholder="กรอกชื่อสินค้า"></label><br>
    <label>ราคาสินค้า: <input type="number" id="productPrice" placeholder="กรอกราคา"></label><br>
    <button onclick="calculateVAT();">คำนวณราคาที่รวม VAT</button>
    <p id="vatOutput"></p>

     <script src="script.js"></script>
</body>
</html>]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.2](![alt text](image-2.png))

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
   
    <h3>แบบทดสอบที่ 2.3: การควบคุมการทำงาน (Conditionals & Loops)</h3>
    <!-- โปรแกรม 1: ตรวจสอบเลขคู่/เลขคี่ -->
    <h4>โปรแกรมที่ 1: ตรวจสอบเลขคู่/เลขคี่</h4>
    <label>กรอกตัวเลข: <input type="number" id="evenOddNumber" placeholder="กรอกตัวเลข"></label><br>
    <button onclick="checkEvenOdd();">ตรวจสอบเลขคู่/คี่</button>
    <p id="evenOddOutput"></p>

    <hr>

    <!-- โปรแกรม 2: สูตรคูณแม่ 2 (for loop) และแม่ 3 (while loop) -->
    <h4>โปรแกรมที่ 2: ตารางสูตรคูณ</h4>
    <button onclick="showMultiplicationTables();">แสดงสูตรคูณแม่ 2 (for) และแม่ 3 (while)</button>
    <pre id="tablesOutput" style="border: 1px solid #ccc; padding: 10px; overflow: auto; max-height: 200px;"></pre>

    <hr>

    <!-- โปรแกรม 3: นับถอยหลัง 10-1 -->
    <h4>โปรแกรมที่ 3: นับถอยหลังจาก 10 ถึง 1</h4>
    <button onclick="countdown();">เริ่มนับถอยหลัง</button>
    <p id="countdownOutput"></p>

    <hr>

    <!-- โปรแกรม 4: ตรวจสอบช่วงวัย -->
    <h4>โปรแกรมที่ 4: ตรวจสอบช่วงวัย</h4>
    <label>กรอกอายุ: <input type="number" id="ageInput" placeholder="กรอกอายุ"></label><br>
    <button onclick="checkAgeGroup();">ตรวจสอบช่วงวัย</button>
    <p id="ageOutput"></p>
     <script src="script.js"></script>
</body>
</html>
]
```
**รูปผลการทดลอง**
![รูปผลการทดลองที่ 2.3](![alt text](image-3.png))

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
    <title>แบบทดสอบที่ 2.4.1: Functions</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            color: white;
            margin-bottom: 30px;
            font-size: 2.5em;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
        }

        .card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .card h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.5em;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 600;
            font-size: 0.95em;
        }

        input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1em;
            transition: border-color 0.3s ease;
        }

        input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            margin-bottom: 10px;
        }

        button:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        button:active {
            transform: scale(0.98);
        }

        .output {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            min-height: 60px;
            display: flex;
            align-items: center;
            color: #333;
            font-weight: 500;
        }

        .output.success {
            background: #d4edda;
            border-left-color: #28a745;
            color: #155724;
        }

        .output.error {
            background: #f8d7da;
            border-left-color: #dc3545;
            color: #721c24;
        }

        .output.warning {
            background: #fff3cd;
            border-left-color: #ffc107;
            color: #856404;
        }

        .bmi-category {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 15px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
        }

        .bmi-underweight {
            background: #87CEEB;
        }

        .bmi-normal {
            background: #90EE90;
            color: #333;
        }

        .bmi-overweight {
            background: #FFD700;
            color: #333;
        }

        .bmi-obese {
            background: #FF6347;
        }

        .reset-btn {
            background: #6c757d;
            margin-top: 15px;
        }

        .reset-btn:hover {
            box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4);
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 1.8em;
            }

            .card {
                padding: 20px;
            }

            .card-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📋 แบบทดสอบที่ 2.4.1: Functions</h1>

        <div class="card-grid">
            <!-- Card 1: BMI Calculator -->
            <div class="card">
                <h2>1️⃣ คำนวณ BMI</h2>
                <div class="form-group">
                    <label for="weight">น้ำหนัก (kg):</label>
                    <input type="number" id="weight" placeholder="เช่น 70" step="0.1">
                </div>
                <div class="form-group">
                    <label for="height">ส่วนสูง (cm):</label>
                    <input type="number" id="height" placeholder="เช่น 175" step="0.1">
                </div>
                <button onclick="testBMI()">คำนวณ BMI</button>
                <button class="reset-btn" onclick="resetBMI()">เคลียร์</button>
                <div id="bmiOutput" class="output" style="display: none;"></div>
            </div>

            <!-- Card 2: Greeting by Age -->
            <div class="card">
                <h2>2️⃣ ทักทายตามอายุ</h2>
                <div class="form-group">
                    <label for="greetingName">ชื่อ:</label>
                    <input type="text" id="greetingName" placeholder="เช่น สมชาย">
                </div>
                <div class="form-group">
                    <label for="greetingAge">อายุ (ปี):</label>
                    <input type="number" id="greetingAge" placeholder="เช่น 25" min="0" max="150">
                </div>
                <button onclick="testGreeting()">ทักทาย</button>
                <button class="reset-btn" onclick="resetGreeting()">เคลียร์</button>
                <div id="greetingOutput" class="output" style="display: none;"></div>
            </div>

            <!-- Card 3: Password Validation -->
            <div class="card">
                <h2>3️⃣ ตรวจสอบรหัสผ่าน</h2>
                <div class="form-group">
                    <label for="password">รหัสผ่าน:</label>
                    <input type="password" id="password" placeholder="ป้อนรหัสผ่าน">
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="showPassword" onchange="togglePasswordVisibility()">
                        แสดงรหัสผ่าน
                    </label>
                </div>
                <button onclick="testPassword()">ตรวจสอบรหัสผ่าน</button>
                <button class="reset-btn" onclick="resetPassword()">เคลียร์</button>
                <div id="passwordOutput" class="output" style="display: none;"></div>
            </div>
        </div>
    </div>

    <script>
        // ========== Functions from lab4-1.js ==========

        // 1. Function คำนวณ BMI (ดัชนีมวลกาย) จากน้ำหนักและส่วนสูง
        function calculateBMI(weight, height) {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            return parseFloat(bmi.toFixed(2));
        }

        // 2. Function ที่รับชื่อและอายุ แล้วแสดงข้อความทักทายที่เหมาะสมกับอายุ
        function greetByAge(name, age) {
            let greeting = '';

            if (age < 6) {
                greeting = `สวัสดี เด็กน้อย ${name} ครับ`;
            } else if (age < 13) {
                greeting = `สวัสดี เด็ก ${name} ครับ`;
            } else if (age < 18) {
                greeting = `สวัสดี เยาวชน ${name} ครับ`;
            } else if (age < 60) {
                greeting = `สวัสดีค่ะท่าน ${name}`;
            } else {
                greeting = `สวัสดีครับ ท่านผู้เฒ่า ${name}`;
            }

            return greeting;
        }

        // 3. Function ตรวจสอบรหัสผ่านว่ามีความยาวมากกว่า 8 ตัวอักษรหรือไม่
        function validatePassword(password) {
            return password.length > 8;
        }

    

        // BMI Test Function
        function testBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const output = document.getElementById('bmiOutput');

            if (!weight || !height || weight <= 0 || height <= 0) {
                output.className = 'output error';
                output.style.display = 'block';
                output.innerHTML = '❌ กรุณาป้อนน้ำหนักและส่วนสูงที่ถูกต้อง';
                return;
            }

            const bmi = calculateBMI(weight, height);
            let category = '';
            let categoryClass = '';

            if (bmi < 18.5) {
                category = 'ผอม';
                categoryClass = 'bmi-underweight';
            } else if (bmi < 24.9) {
                category = 'สมส่วน';
                categoryClass = 'bmi-normal';
            } else if (bmi < 29.9) {
                category = 'อ้วน';
                categoryClass = 'bmi-overweight';
            } else {
                category = 'อ้วนมาก';
                categoryClass = 'bmi-obese';
            }

            output.className = 'output success';
            output.style.display = 'block';
            output.innerHTML = `
                <div>
                    <div><strong>✓ ผลการคำนวณ BMI</strong></div>
                    <div>น้ำหนัก: ${weight} kg | ส่วนสูง: ${height} cm</div>
                    <div style="font-size: 1.2em; margin-top: 8px;">
                        <strong>BMI: ${bmi}</strong>
                        <span class="bmi-category ${categoryClass}"> ${category}</span>
                    </div>
                </div>
            `;
        }

        function resetBMI() {
            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
            document.getElementById('bmiOutput').style.display = 'none';
        }

        // Greeting Test Function
        function testGreeting() {
            const name = document.getElementById('greetingName').value.trim();
            const age = parseInt(document.getElementById('greetingAge').value);
            const output = document.getElementById('greetingOutput');

            if (!name || isNaN(age) || age < 0 || age > 150) {
                output.className = 'output error';
                output.style.display = 'block';
                output.innerHTML = '❌ กรุณาป้อนชื่อและอายุที่ถูกต้อง';
                return;
            }

            const greeting = greetByAge(name, age);

            output.className = 'output success';
            output.style.display = 'block';
            output.innerHTML = `
                <div>
                    <div><strong>✓ ${greeting}</strong></div>
                    <div style="font-size: 0.9em; margin-top: 8px; color: rgba(0,0,0,0.7);">อายุ: ${age} ปี</div>
                </div>
            `;
        }

        function resetGreeting() {
            document.getElementById('greetingName').value = '';
            document.getElementById('greetingAge').value = '';
            document.getElementById('greetingOutput').style.display = 'none';
        }

        // Password Test Function
        function testPassword() {
            const password = document.getElementById('password').value;
            const output = document.getElementById('passwordOutput');

            if (password.length === 0) {
                output.className = 'output error';
                output.style.display = 'block';
                output.innerHTML = `
                    <div>
                        <div><strong>❌ กรุณาป้อนรหัสผ่าน</strong></div>
                    </div>
                `;
                return;
            }

            const isValid = validatePassword(password);
            const strength = password.length;

            if (!isValid) {
                output.className = 'output error';
                output.innerHTML = `
                    <div>
                        <div><strong>❌ รหัสผ่านไม่ปลอดภัย</strong></div>
                        <div style="font-size: 0.9em; margin-top: 8px;">ความยาว: ${password.length} ตัวอักษร (ต้องมากกว่า 8)</div>
                    </div>
                `;
            } else if (strength <= 10) {
                output.className = 'output warning';
                output.innerHTML = `
                    <div>
                        <div><strong>⚠️ รหัสผ่านปลานศนี</strong></div>
                        <div style="font-size: 0.9em; margin-top: 8px;">ความยาว: ${password.length} ตัวอักษร</div>
                    </div>
                `;
            } else {
                output.className = 'output success';
                output.innerHTML = `
                    <div>
                        <div><strong>✓ รหัสผ่านปลอดภัย</strong></div>
                        <div style="font-size: 0.9em; margin-top: 8px;">ความยาว: ${password.length} ตัวอักษร</div>
                    </div>
                `;
            }

            output.style.display = 'block';
        }

        function resetPassword() {
            document.getElementById('password').value = '';
            document.getElementById('showPassword').checked = false;
            document.getElementById('password').type = 'password';
            document.getElementById('passwordOutput').style.display = 'none';
        }

        // Toggle password visibility
        function togglePasswordVisibility() {
            const passwordInput = document.getElementById('password');
            const showPassword = document.getElementById('showPassword').checked;
            passwordInput.type = showPassword ? 'text' : 'password';
        }

        // Allow Enter key to trigger functions
        document.getElementById('weight')?.addEventListener('keypress', (e) => e.key === 'Enter' && testBMI());
        document.getElementById('height')?.addEventListener('keypress', (e) => e.key === 'Enter' && testBMI());
        document.getElementById('greetingName')?.addEventListener('keypress', (e) => e.key === 'Enter' && testGreeting());
        document.getElementById('greetingAge')?.addEventListener('keypress', (e) => e.key === 'Enter' && testGreeting());
        document.getElementById('password')?.addEventListener('keypress', (e) => e.key === 'Enter' && testPassword());
    </script>
</body>
</html>
]
```
**รูปผลการทดลอง**
![![alt text](image-4.png)]



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
    <title>แบบทดสอบที่ 2.4.2: Arrow Functions</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .test { margin-bottom: 30px; border: 1px solid #ccc; padding: 15px; }
        label { display: block; margin: 10px 0 5px 0; font-weight: bold; }
        input { padding: 8px; width: 300px; }
        button { padding: 8px 15px; margin-right: 10px; cursor: pointer; }
        .output { margin-top: 10px; color: green; font-weight: bold; }
        .error { color: red; }
    </style>
</head>
<body>
    <h1>แบบทดสอบที่ 2.4.2: Arrow Functions</h1>

    <!-- Test 1: BMI -->
    <div class="test">
        <h2>1. คำนวณ BMI (Arrow Function)</h2>
        <label>น้ำหนัก (kg):</label>
        <input type="number" id="weight" placeholder="70">
        <label>ส่วนสูง (cm):</label>
        <input type="number" id="height" placeholder="175">
        <button onclick="testBMI()">คำนวณ</button>
        <div id="bmiOutput" class="output"></div>
    </div>

    <!-- Test 2: Greeting -->
    <div class="test">
        <h2>2. ทักทายตามอายุ (Arrow Function)</h2>
        <label>ชื่อ:</label>
        <input type="text" id="name" placeholder="สมชาย">
        <label>อายุ (ปี):</label>
        <input type="number" id="age" placeholder="25">
        <button onclick="testGreeting()">ทักทาย</button>
        <div id="greetingOutput" class="output"></div>
    </div>

    <!-- Test 3: Password -->
    <div class="test">
        <h2>3. ตรวจสอบรหัสผ่าน (Arrow Function)</h2>
        <label>รหัสผ่าน:</label>
        <input type="password" id="password">
        <button onclick="testPassword()">ตรวจสอบ</button>
        <div id="passwordOutput" class="output"></div>
    </div>

    <script>
        // 1. Arrow Function คำนวณ BMI
        const calculateBMI = (weight, height) => {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            return parseFloat(bmi.toFixed(2));
        };

        // 2. Arrow Function ทักทายตามอายุ
        const greetByAge = (name, age) => {
            if (age < 6) return `สวัสดี เด็กน้อย ${name} ครับ`;
            if (age < 13) return `สวัสดี เด็ก ${name} ครับ`;
            if (age < 18) return `สวัสดี เยาวชน ${name} ครับ`;
            if (age < 60) return `สวัสดีค่ะท่าน ${name}`;
            return `สวัสดีครับ ท่านผู้เฒ่า ${name}`;
        };

        // 3. Arrow Function ตรวจสอบรหัสผ่าน
        const validatePassword = (password) => password.length > 8;

        // UI Functions
        function testBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const output = document.getElementById('bmiOutput');

            if (!weight || !height || weight <= 0 || height <= 0) {
                output.className = 'output error';
                output.textContent = ' กรุณาป้อนน้ำหนักและส่วนสูงที่ถูกต้อง';
                return;
            }

            const bmi = calculateBMI(weight, height);
            let category = '';
            if (bmi < 18.5) category = 'ผอม';
            else if (bmi < 24.9) category = 'สมส่วน';
            else if (bmi < 29.9) category = 'อ้วน';
            else category = 'อ้วนมาก';

            output.className = 'output';
            output.textContent = ` ${bmi} (${category})`;
        }

        function testGreeting() {
            const name = document.getElementById('name').value.trim();
            const age = parseInt(document.getElementById('age').value);
            const output = document.getElementById('greetingOutput');

            if (!name || isNaN(age) || age < 0 || age > 150) {
                output.className = 'output error';
                output.textContent = ' กรุณาป้อนชื่อและอายุที่ถูกต้อง';
                return;
            }

            const greeting = greetByAge(name, age);
            output.className = 'output';
            output.textContent = ` ${greeting}`;
        }

        function testPassword() {
            const password = document.getElementById('password').value;
            const output = document.getElementById('passwordOutput');

            if (password.length === 0) {
                output.className = 'output error';
                output.textContent = ' กรุณาป้อนรหัสผ่าน';
                return;
            }

            const isValid = validatePassword(password);
            if (!isValid) {
                output.className = 'output error';
                output.textContent = ` รหัสผ่านไม่ปลอดภัย (${password.length} ตัวอักษร, ต้องมากกว่า 8)`;
            } else {
                output.className = 'output';
                output.textContent = ` รหัสผ่านปลอดภัย (${password.length} ตัวอักษร)`;
            }
        }
    </script>
</body>
</html>
]
```
**รูปผลการทดลอง**
![![alt text](image-5.png)]


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
    <title>แบบทดสอบ 3.1 - BMI Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        input { padding: 8px; margin: 5px; }
        button { padding: 8px 15px; cursor: pointer; }
        #output { margin-top: 15px; font-weight: bold; color: green; }
        .error { color: red; }
    </style>
</head>
<body>
    <h1>คำนวณค่า BMI (ดัชนีมวลกาย)</h1>
    
    <label>น้ำหนัก (kg):</label>
    <input type="number" id="weight" placeholder="70">
    
    <label>ส่วนสูง (cm):</label>
    <input type="number" id="height" placeholder="175">
    
    <br><br>
    
    <button onclick="calculateBMI()">คำนวณ BMI</button>
    
    <p id="output"></p>
    
    <script src="lab3.js"></script>
</body>
</html>
]
```
**รูปผลการทดลอง**
![![alt text](image-6.png)]

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
### บันทึกผลการทดลอง 3.2.3
```html
[<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>
    <link rel="stylesheet" href="style.css">
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

    <div id="message"></div>

    <script src="script.js"></script>
</body>
</html>

]
```
## การปรับ CSS ครั้งนี้ทำให้หน้าเว็บดูทันสมัยและเป็นมืออาชีพมากขึ้น โดยเปลี่ยนพื้นหลังเป็นแบบไล่สี เพิ่มเอฟเฟกต์ให้ช่องกรอกข้อมูลและปุ่มมีการตอบสนองต่อการโต้ตอบ เช่น การเปลี่ยนสี เงา และการขยับเล็กน้อยเมื่อโฟกัสหรือวางเมาส์ รวมถึงเพิ่มแอนิเมชันให้ข้อความแสดงผล ทำให้เว็บไซต์ดูสวยงาม ใช้งานง่าย และมีประสบการณ์ผู้ใช้ที่ดีขึ้น

**รูปผลการทดลอง**

[![alt text](image-7.png)]

#### ส่วนที่ 1: การปรับแต่งพื้นหลัง (Background)
**การเปลี่ยนแปลง:**
- เปลี่ยนจาก: `background-color: #f5f5f5` (สีพื้นหลังสีเทาอย่างเดียว)
- เปลี่ยนเป็น: `background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)` (gradient สีน้ำเงินอ่อน)
- เพิ่ม: `min-height: 100vh` (ให้พื้นหลังครอบคลุมทั้งหน้าจอ)

**ผลลัพธ์:** ทำให้หน้าเว็บดูสวยงามและมีมิติมากขึ้น พื้นหลังมีการไล่สีที่นุ่มนวลทำให้ดูเป็นมืออาชีพมากขึ้น

#### ส่วนที่ 2: การปรับแต่งช่องป้อนข้อมูล (Input/Select)
**การเปลี่ยนแปลง:**
- เพิ่ม padding จาก `8px` เป็น `12px` (เพื่อให้มีพื้นที่ว่างมากขึ้น)
- เปลี่ยน border จาก `1px solid #ddd` เป็น `2px solid #e0e0e0` (ขอบที่ชัดเจนขึ้น)
- เปลี่ยน border-radius จาก `4px` เป็น `8px` (โค้งมนมากขึ้น)
- เพิ่ม `transition: all 0.3s ease` (สร้างการเปลี่ยนแปลงอย่างนุ่มนวล)
- เพิ่ม `:hover` state เพื่อเปลี่ยนสีขอบจากสีเทาเป็นสีฟ้า

**ผลลัพธ์:** ช่องป้อนข้อมูลมีลักษณะที่ดีขึ้น มีการตอบสนองต่อการไล่เมาส์ (hover) ทำให้ผู้ใช้รู้ว่าช่องนี้สามารถคลิกได้

#### ส่วนที่ 3: การปรับแต่งสถานะ Focus
**การเปลี่ยนแปลง:**
- เปลี่ยน box-shadow จาก `0 0 5px rgba(52,152,219,0.3)` เป็น `0 0 8px rgba(52, 152, 219, 0.4)` (เงามากขึ้น)
- เพิ่ม `background-color: #f0f8ff` (พื้นหลังสีฟ้าอ่อนเมื่อกดคลิก)
- เพิ่ม `transform: scale(1.01)` (ให้ช่องป้อนข้อมูลขยายขึ้นเล็กน้อย)

**ผลลัพธ์:** เมื่อผู้ใช้คลิกที่ช่องป้อนข้อมูล จะมีเอฟเฟกต์ที่ชัดเจนมากขึ้น ช่องจะขยายขึ้นเล็กน้อยและมีเงาที่อ่อนนวล ทำให้ประสบการณ์ผู้ใช้ดีขึ้น

#### ส่วนที่ 4: การปรับแต่งปุ่ม (Button)
**การเปลี่ยนแปลง:**
- เปลี่ยนจาก: `background-color: #2980b9` (สีฟ้าแข็ง)
- เปลี่ยนเป็น: `background: linear-gradient(135deg, #3498db 0%, #2980b9 100%)` (gradient สีฟ้า)
- เพิ่ม padding จาก `10px 20px` เป็น `14px 24px` (ใหญ่ขึ้น)
- เปลี่ยน border-radius จาก `4px` เป็น `8px` (โค้งมนมากขึ้น)
- เพิ่ม `font-weight: 600` (ตัวอักษรหนักขึ้น)
- เพิ่ม `box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3)` (เงาของปุ่ม)
- เพิ่ม `transition: all 0.3s ease` (การเปลี่ยนแปลงอย่างนุ่มนวล)

**ผลลัพธ์:** ปุ่มดูใหญ่ขึ้นและสวยงามขึ้น มีเงาที่ทำให้ดูเหมือนยกขึ้นมาจากหน้าจอ

#### ส่วนที่ 5: สถานะ Hover ของปุ่ม
**การเปลี่ยนแปลง:**
- เพิ่ม `transform: translateY(-2px)` (เมื่อชี้เมาส์ปุ่มจะเคลื่อนขึ้นมา 2 pixels)
- เปลี่ยน box-shadow เมื่อ hover เป็น `0 6px 12px rgba(52, 152, 219, 0.4)` (เงามากขึ้น)
- เพิ่ม `:active` state เพื่อคืนตำแหน่งปุ่มเมื่อกดลง

**ผลลัพธ์:** เมื่อผู้ใช้ชี้เมาส์ไปที่ปุ่ม ปุ่มจะเคลื่อนขึ้นและมีเงาที่มากขึ้น เมื่อกดลง ปุ่มจะกลับตำแหน่ง ทำให้รู้สึกเหมือนปุ่มเป็นปุ่มจริง

#### ส่วนที่ 6: การแสดงข้อความ (Message)
**การเปลี่ยนแปลง:**
- เปลี่ยน border จาก `1px solid` เป็น `border-left: 5px solid transparent` (ชายด้านซ้ายมีสีตามสภาพ)
- เพิ่ม padding จาก `15px` เป็น `16px` (เพิ่มพื้นที่ว่าง)
- เพิ่ม `animation: slideIn 0.3s ease` (ให้ข้อความเลื่อนเข้ามาจากด้านบน)
- สร้าง keyframe `slideIn` เพื่อให้ข้อความปรากฏขึ้นแบบนุ่มนวล

**ผลลัพธ์:** ข้อความแสดงผลแบบ animation ที่นุ่มนวล ข้อความจะเลื่อนเข้ามาจากด้านบนพร้อมกับค่อยๆ ปรากฏขึ้น ทำให้ดูมีชีวิตชีวามากขึ้น

#### ส่วนที่ 7: ปรับแต่งหัวข้อ (H1)
**การเปลี่ยนแปลง:**
- เพิ่ม `font-size: 28px` (ขนาดตัวอักษรใหญ่ขึ้น)
- เพิ่ม `text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1)` (เงาตัวอักษรอ่อน)

**ผลลัพธ์:** หัวข้อดูโดดเด่นขึ้น เงาข้อความอ่อน ๆ ทำให้ดูเหมือนตัวอักษรยกขึ้นมาจากพื้นหลัง

#### สรุปผลการทดลองทั้งหมด
การปรับแต่ง CSS ในแต่ละส่วนทำให้:
✓ หน้าเว็บสวยงามและเป็นมืออาชีพขึ้น
✓ ประสบการณ์ผู้ใช้ดีขึ้น เมื่อมีการตอบสนองต่อการไล่เมาส์และการคลิก
✓ ท่าทีการทำงาน (affordance) ชัดเจนขึ้น ผู้ใช้รู้ว่าสามารถโต้ตอบกับส่วนไหนของฟอร์ม
✓ การแสดงผลมีความเรียบร้อยและเรียบเนียนยิ่งขึ้น เนื่องจากการใช้ transition และ animation
✓ หน้าเว็บทำงานได้ดีบนอุปกรณ์ต่างขนาด (responsive design)


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

JavaScript ในฟอร์มจองห้องพักมี 4 ส่วนหลักดังต่อไปนี้:

#### 1. การจัดการ Form Submit (event listener)
```javascript
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // หยุดการ refresh หน้าเว็บ
    // ทำการตรวจสอบและส่งข้อมูล
});
```
**ที่ทำ:** รอการคลิกปุ่ม "จองห้องพัก" แล้วจะเรียกใช้ฟังก์ชันนี้ เหตุการณ์ `e.preventDefault()` ป้องกันการ refresh หน้าเว็บปรกติ ที่อนุญาต

#### 2. การตรวจสอบข้อมูล (Validation)
**ตรวจสอบ 5 ประเภท:**

**ก. วันที่เช็คอิน:**
```javascript
if (checkin < today) {
    showMessage('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา', 'error');
    return;
}
```
✓ **ผล:** ป้องกันผู้ใช้เลือกวันที่ผ่านมาแล้ว ตรวจสอบโดยเปรียบเทียบกับวันปัจจุบัน

**ข. วันที่เช็คเอาท์:**
```javascript
if (checkout <= checkin) {
    showMessage('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน', 'error');
    return;
}
```
✓ **ผล:** ตรวจสอบว่าวันเช็คเอาท์มาหลังวันเช็คอิน (ไม่สามารถจองห้องสำหรับวันเดียวกัน)

**ค. เบอร์โทรศัพท์:**
```javascript
const phoneRegex = /^[0-9]{10}$/;
if (!phoneRegex.test(phone)) {
    showMessage('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)', 'error');
    return;
}
```
✓ **ผล:** ใช้ regex pattern ตรวจสอบว่าเบอร์โทรมี 10 หลักพอดี และเป็นตัวเลขทั้งหมด

**ง. ประเภทห้อง:**
```javascript
if (!roomtype) {
    showMessage('กรุณาเลือกประเภทห้องพัก', 'error');
    return;
}
```
✓ **ผล:** ตรวจสอบว่าผู้ใช้ได้เลือกประเภทห้องแล้ว

**จ. จำนวนผู้เข้าพัก:**
```javascript
if (guests <= 0) {
    showMessage('กรุณากรอกจำนวนผู้เข้าพัก', 'error');
    return;
}
```
✓ **ผล:** ตรวจสอบว่าจำนวนผู้เข้าพักมากกว่า 0

#### 3. การคำนวณจำนวนวัน
```javascript
const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
```
**ที่ทำ:** 
- ลบวันเช็คเอาท์ กับ วันเช็คอิน = ระยะเวลา (milliseconds)
- หารด้วย 1000*60*60*24 เพื่อแปลงเป็นวัน
- ใช้ `Math.ceil()` ปัดขึ้นให้เป็นจำนวนเต็ม

**ผล:** คำนวณจำนวนคืนที่แม่นยำ เช่น ถ้าเช็คอิน 24 เมื่อเช็คเอาท์ 25 = 1 วัน

#### 4. การตรวจสอบแบบ Real-time
**ก. ตรวจสอบวันที่อัตโนมัติ:**
```javascript
document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
});
```
✓ **ผล:** เมื่อผู้ใช้เลือกวันเช็คอิน วันเช็คเอาท์จะอัปเดต min date โดยอัตโนมัติ

**ข. ปรับจำนวนผู้เข้าพักตามประเภทห้อง:**
```javascript
if (this.value === 'standard') {
    guestsInput.max = 2; // ห้องมาตรฐาน: สูงสุด 2 ท่าน
} else if (this.value === 'deluxe') {
    guestsInput.max = 3; // ห้องดีลักซ์: สูงสุด 3 ท่าน
} else if (this.value === 'suite') {
    guestsInput.max = 4; // ห้องสวีท: สูงสุด 4 ท่าน
}
```
✓ **ผล:** เมื่อเลือกประเภทห้อง จำนวนผู้เข้าพักสูงสุดจะเปลี่ยนโดยอัตโนมัติ ถ้าเกินกว่าที่อนุญาตจะลดลงเอง

#### ฟังก์ชันแสดงข้อความ:
```javascript
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // error, success, info
    messageDiv.style.display = 'block';
}
```
✓ **ผล:** แสดงข้อความแจ้งเตือนเมื่อมีข้อผิดพลาดหรือสำเร็จ

### บันทึกผลการทดลอง 3.2.3

#### ผลการทดลองของ JavaScript:

**✓ ผลการทดลองที่ 1: ตรวจสอบวันที่**
- **ทดลองเปลี่ยน:** เลือกวันที่ผ่านมาแล้ว
- **ผลลัพธ์:** แสดงข้อความ "กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา" (ข้อมูลไม่ถูกส่ง)
- **ประโยชน์:** ป้องกันการจองห้องในวันที่ผ่านไปแล้ว

**✓ ผลการทดลองที่ 2: ตรวจสอบลำดับวันที่**
- **ทดลองเปลี่ยน:** เลือกวันเช็คเอาท์ก่อนวันเช็คอิน
- **ผลลัพธ์:** แสดงข้อความ "วันเช็คเอาท์ต้องมาหลังวันเช็คอิน" (ไม่อนุญาตให้จอง)
- **ประโยชน์:** ขจัดข้อมูลที่ไม่มีเหตุผล

**✓ ผลการทดลองที่ 3: ตรวจสอบเบอร์โทร**
- **ทดลองเปลี่ยน:** 
  - กรอก "0981234567" (11 หลัก) → ถูกปฏิเสธ
  - กรอก "098123456" (9 หลัก) → ถูกปฏิเสธ
  - กรอก "0981234560" (10 หลัก) → ยอมรับ
- **ผลลัพธ์:** เบอร์โทรต้องเป็น 10 หลักพอดี
- **ประโยชน์:** ตรวจสอบรูปแบบเบอร์โทรไทยให้ถูกต้อง

**✓ ผลการทดลองที่ 4: การอัปเดตวันเช็คเอาท์**
- **ทดลองเปลี่ยน:** เลือกวันเช็คอิน 25 เม.ย.
- **ผลลัพธ์:** วันเช็คเอาท์จะเริ่มจาก 25 เม.ย. ขึ้นไป (ไม่สามารถเลือกวันก่อนหน้าได้)
- **ประโยชน์:** ไม่ต้องให้ผู้ใช้เลือกวันที่ไม่สำคัญ

**✓ ผลการทดลองที่ 5: ปรับจำนวนผู้เข้าพัก**
- **ทดลองเปลี่ยน:** เลือกห้องมาตรฐาน (standard)
- **ผลลัพธ์:** จำนวนผู้เข้าพักสูงสุด = 2 ท่าน
- **ทดลองเปลี่ยน:** เลือกห้องดีลักซ์ (deluxe)
- **ผลลัพธ์:** จำนวนผู้เข้าพักสูงสุด = 3 ท่าน
- **ทดลองเปลี่ยน:** เลือกห้องสวีท (suite)
- **ผลลัพธ์:** จำนวนผู้เข้าพักสูงสุด = 4 ท่าน
- **ประโยชน์:** กำหนดจำนวนผู้เข้าพักให้เหมาะสมกับขนาดห้อง

**✓ ผลการทดลองที่ 6: สรุปการจอง**
- **ทดลองเปลี่ยน:** กรอกข้อมูลทั้งหมดแล้วคลิกปุ่มจอง
- **ผลลัพธ์:** แสดง dialog box สรุปข้อมูล (มี option ยืนยัน/ยกเลิก)
- **ประโยชน์:** ให้ผู้ใช้ยืนยันข้อมูลก่อนส่ง

**✓ ผลการทดลองที่ 7: คำนวณจำนวนวัน**
- **ทดลองเปลี่ยน:** จอง 25 เม.ย. - 28 เม.ย.
- **ผลลัพธ์:** จำนวนวันที่พัก = 3 วัน (คำนวณอัตโนมัติ)
- **ประโยชน์:** อ้างอิงสำหรับคำนวณราคาหรือเก็บสถิตินำเข้า

### สรุปผลการทดลอง JavaScript ทั้งหมด
✅ ฟอร์มตรวจสอบข้อมูลอย่างครบถ้วน ป้องกันข้อมูลที่ไม่ถูกต้อง
✅ มีการตอบสนองแบบ Real-time ทำให้ผู้ใช้รู้ข้อมูลว่าสอดคล้องกับเงื่อนไขหรือไม่
✅ ข้อความแสดงข้อผิดพลาดชัดเจน ผู้ใช้รู้ว่าต้องแก้ไขส่วนไหน
✅ สรุปการจองสมบูรณ์ ผู้ใช้มีโอกาสยืนยันก่อนส่งข้อมูล
✅ ฟอร์มปลอดภัย ไม่ยอมรับข้อมูลที่ไม่เหมาะสม
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
    <link rel="stylesheet" href="style.css">
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

    <div id="message"></div>

    <script src="script.js"></script>
</body>
</html>
]
```
**รูปผลการทดลอง**
![![alt text](image-8.png)]


## คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
