function checkmod(num){
    if (num % 2 == 0){
        console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }
}
cal = checkmod(4);
cal = checkmod(7);

function mp(){
    console.log("Multiplication Table of 2");
    for (let i = 1; i <= 12; i++){
        console.log(`2 x ${i} = ${i*2}`);
    }
    console.log("Multiplication Table of 3");
    for (let i = 1; i <= 12; i++){
        console.log(`3 x ${i} = ${i*3}`);
    }
}

let cal2 = mp();

function nub(){
    for (let i = 10; i >= 1; i--){
        console.log(`นับ ${i}`);
    }
}
let cal3 = nub();

function ch_age(age){
    if (age >= 18){
        console.log("You are an adult.");
    }
    else{
        console.log("You are a minor.");
    }
}
let cal4 = ch_age(20);