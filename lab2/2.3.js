/*
1. กำหนดตัวเลข และตรวจสอบว่าตัวเลขที่กำหนดเป็นเลขคู่หรือเลขคี่
2. สร้าง loop แบบ for แสดงตารางสูตรคูณ แม่ 2 และ loop แบบ while แสดงสูตรคูณ แม่ 3
3. เขียนโปรแกรมนับถอยหลังจาก 10 ถึง 1
4. เขียนโปรแกรมกำหนดอายุ และตรวจสอบช่วงวัยตามอายุที่กำหนด (กำหนดอายุแต่ละช่วงวัย วัยเด็ก วัยรุ่น วัยผู้ใหญ่) 
*/

function check_odd_or(num) {
        if (num % 2 == 0) {
            console.log(num, "เป็นเลขคู่");
        } else {
            console.log(num, "เป็นเลขคี่");
        }
}

Call3 = check_odd_or(5)
Call3 = check_odd_or(2)

function multiplication_table() {
    console.log("ตารางสูตรคูณ แม่ 2");
    for (let i = 1; i <= 10; i++) {
        console.log("2 x", i, "=", 2 * i);
    }

    console.log("ตารางสูตรคูณ แม่ 3");
    let j = 1;
    while (j <= 10) {
        console.log("3 x", j, "=", 3 * j);
        j++;
    }
}

let Call1 = multiplication_table()


function Ten_to_one() {
    for (let i = 10; i >= 1; i--) {
    console.log("รอบที่", i);
}
}

let Call = Ten_to_one()

function checkAge(age) {
    if (age < 15 ) {
        console.log("คุณเป็นเด็ก")
    } else if (age >=16 && age < 20 ) {
        console.log('คุณเป็นวัยรุ่น')
    } else {
        console.log('คุณเป็นผู้ใหญ่')
    }

    
}

let Call2 = checkAge(20)