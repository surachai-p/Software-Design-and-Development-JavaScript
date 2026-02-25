let math = 5
let program = 10
let english = 15

let sum = math + program + english
let average = sum / 3

console.log("Average Subject: " + average)

let vat = calculateVAT(10000, "laptop");
function calculateVAT(price, product){ 
    let vat = price * 0.07;
    console.log("VAT for " + product + " is " + vat);
}