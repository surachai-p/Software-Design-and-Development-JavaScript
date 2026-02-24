function calculate() {
    // คะแนนเฉลี่ย
    let score1 = 69;
    let score2 = 74;
    let score3 = 89;
    let average = (score1 + score2 + score3) / 3;

    // ราคาสินค้ารวม VAT
    let productName = "ปากกาไอแพด";
    let price = 2900;
    let totalPrice = price + (price * 0.07);

    alert(
        "คะแนนเฉลี่ย: " + average +
        "\nสินค้า: " + productName +
        "\nราคารวม VAT: " + totalPrice
    );
}