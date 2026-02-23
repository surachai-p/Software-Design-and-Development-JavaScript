
function calculateAverage(Comnetwork, softwareDev1, digitalSystem) {
    return (Comnetwork + softwareDev1 + digitalSystem) / 3;
}

let average = calculateAverage(85, 98, 90);
console.log("ค่าเฉลี่ยคะแนน3 วิชารวมกัน:", average)

function calVat7(price, Product) {
    let vat = price * 0.07;
    console.log("ซื้อสินค้า:", Product, "ราคา:", price, "ภาษี:", vat);
}
let vat = calVat7(100, "Computer");
