// --- 1. ตรวจสอบเลขคู่หรือเลขคี่ ---
function checkEvenOdd() {
    var numStr = document.getElementById("numInput").value;
    
    if (numStr === "") {
        console.log("กรุณากรอกตัวเลขเพื่อตรวจสอบคู่/คี่");
        return;
    }

    var number = Number(numStr);
    var result = "";
    
    if (number % 2 === 0) {
        result = number + " เป็นเลขคู่";
    } else {
        result = number + " เป็นเลขคี่";
    }
    
    console.log("เลขคู่/คี่:", result);
    document.getElementById("evenOdd").innerText = result;
}

// --- 2. สูตรคูณแม่ 2 และ 3 ---
function displayMultiTable() {
    // แม่ 2 (for loop)
    var table2 = "<b>แม่ 2:</b><br>";
    for (var a = 1; a <= 12; a++) {
        table2 += "2 x " + a + " = " + (2 * a) + "<br>";
    }
    document.getElementById("Multitwo").innerHTML = table2;

    // แม่ 3 (while loop)
    var table3 = "<b>แม่ 3:</b><br>";
    var b = 1;
    while (b <= 12) {
        table3 += "3 x " + b + " = " + (3 * b) + "<br>";
        b++;
    }
    document.getElementById("Multithree").innerHTML = table3;
}

// --- 3. นับถอยหลัง ---
function countDown() {
    var countStr = "";
    for (var c = 10; c >= 1; c--) {
        countStr += c + (c > 1 ? ", " : "");
    }
    document.getElementById("countDownResult").innerText = countStr;
}

// --- 4. ตรวจสอบช่วงอายุ ---
function checkAgeGroup() {
    var ageStr = document.getElementById("ageInput").value;

    if (ageStr === "") {
        console.log("กรุณากรอกอายุก่อนตรวจสอบ");
        return;
    }

    var age = Number(ageStr);
    var ageGroup = "";
    
    if (age >= 0 && age <= 12) {
        ageGroup = "วัยเด็ก";
    } else if (age > 12 && age <= 19) {
        ageGroup = "วัยรุ่น";
    } else if (age > 19) {
        ageGroup = "วัยผู้ใหญ่";
    } else {
        ageGroup = "อายุไม่ถูกต้อง";
    }
    
    console.log("อายุ " + age + ": " + ageGroup);
    document.getElementById("age").innerText = "ช่วงวัยของคุณคือ: " + ageGroup;
}

displayMultiTable();
countDown();     
// checkEvenOdd();
// checkAgeGroup(); 