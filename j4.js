function bmical(weight, height) {
    let bmi = weight / (height * height);
    console.log("BMI is: " + bmi.toFixed(2)); 
}
bmical(67, 1.75);

function x(name, age){
    if(age < 13){
        console.log(`ว่าไง ${name} ยังเล็กอยู่เลย ;)`);
    }
    else if(age >= 13 && age < 20){
        console.log(`ว่าไงวัยรุ่น ${name} `);
    }
    else if(age >= 20 && age < 30){
        console.log(`ว่าไง ${name} วัยทำงานแล้วนะ`);
    }
}
x("John", 10);
x("Jane", 15);
x("Doe", 25);

function yaa(password) {
    if(password.length > 8){
        console.log("รหัสผ่านต้องมีความยาวอย่างมากกว่า 8 ตัวอักษร");
    }
    else{
        console.log("รหัสผ่านยาวไม่พอไม่ถึง 8 ตัวอักษร");
    }
}
yaa("hahaha");