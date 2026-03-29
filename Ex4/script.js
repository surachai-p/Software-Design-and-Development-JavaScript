
//หาเลขคู่และเลขคี่
document.getElementById("btn").onclick = function() {
    var checkv = parseInt(document.getElementById("num").value);
    if (isNaN(checkv)) {
        alert("กรุณาใส่ตัวเลข");
        
    }else if (checkv % 2 == 0){
        alert(checkv + " เป็นเลขคู่");
    }
    else {
        alert(checkv + " เป็นเลขคี่");
    }
}
    
//หาตารางสูตรคูณ แบบ for loop
document.getElementById("btnFor2").onclick = function() {
    var output = "";
    for (var i = 1; i <= 12; i++) {
        // ใช้ \n แทน <br>
        output += "2 x " + i + " = " + (2 * i) + "\n"; 
    }
    alert(output);
}

//หาตารางสูตรคูณ แบบ while loop
document.getElementById("btnWhile3").onclick = function() {
    var output = "";
    var i = 1;
    while (i <= 12) {
        output += "3 x " + i + " = " + (3 * i) + "\n";
        i++;
    }
    
    alert(output);
}

//นับถอยหลัง 10 - 1
document.getElementById("btn10t1").onclick = function() {
    var output = "";
    for (var i = 10; i >= 1; i--) {
        output += i + "\n";
    }
    alert(output);
}

//แบ่งช่วงวัย
document.getElementById("btnAge").onclick = function() {
    var age = parseInt(document.getElementById("age").value);
    if (isNaN(age)) {
        alert("กรุณาใส่อายุที่ถูกต้อง");
        return;
    }
    var ageGroup = "";
    if (age < 0) {
        ageGroup = "อายุไม่ถูกต้อง";
    } else if (age <= 12) {
        ageGroup = "วัยเด็ก";
    } else if (age <= 17) {
        ageGroup = "วัยรุ่น";
    } else if (age <= 59) {
        ageGroup = "วัยผู้ใหญ่";
    } else {
        ageGroup = "วัยชรา";
    }
    alert("คุณอยู่ในช่วงวัย: " + ageGroup);
}