function calculateAverage() {

    let subject1 = 80;
    let subject2 = 75;
    let subject3 = 90;

    let total = subject1 + subject2 + subject3;
    let scoreaverage = total / 3;

    document.getElementById("result").innerHTML =
        "คะแนนวิชา 1: " + subject1 +
        "<br>คะแนนวิชา 2: " + subject2 +
        "<br>คะแนนวิชา 3: " + subject3 +
        "<br><b>คะแนนเฉลี่ย: " + scoreaverage.toFixed(2) + "</b>";
}


function calculateVAT() {

    let productName = "Formular1 Shirt";
    let price = 5000;

    let vat = price * 0.07;
    let totalPrice = price + vat;

    document.getElementById("result").innerHTML =
        "ชื่อสินค้า: " + productName +
        "<br>ราคาสินค้า: " + price + " บาท" +
        "<br>VAT 7%: " + vat.toFixed(2) + " บาท" +
        "<br><b>ราคารวม VAT: " + totalPrice.toFixed(2) + " บาท</b>";
}
