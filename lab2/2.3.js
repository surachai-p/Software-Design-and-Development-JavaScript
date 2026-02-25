function checkNumber() {
    let number = 7;
    let output = "";

    if (number % 2 === 0) {
        output = number + " เป็นเลขคู่";
    } else {
        output = number + " เป็นเลขคี่";
    }

    document.getElementById("result").innerHTML = output;
}


function showMultiplication() {
    let output = "<b>สูตรคูณแม่ 2</b><br>";

    for (let i = 1; i <= 12; i++) {
        output += "2 x " + i + " = " + (2 * i) + "<br>";
    }

    output += "<br><b>สูตรคูณแม่ 3</b><br>";

    let i = 1;
    while (i <= 12) {
        output += "3 x " + i + " = " + (3 * i) + "<br>";
        i++;
    }

    document.getElementById("result").innerHTML = output;
}



function countDown() {
    let output = "";

    for (let i = 10; i >= 1; i--) {
        output += i + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}


function checkAge() {
    let age = 18;
    let output = "";

    if (age < 13) {
        output = age + " วัยเด็ก";
    } else if (age <= 19) {
        output = age + " วัยรุ่น";
    } else {
        output = age + " วัยผู้ใหญ่";
    }

    document.getElementById("result").innerHTML = output;
}
