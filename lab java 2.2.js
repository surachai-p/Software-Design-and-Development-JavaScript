// ฟังก์ชันคำนวณคะแนนเฉลี่ย
function calculateScores() {
    // ดึงค่าจาก input (แปลงเป็นตัวเลขด้วย Number)
    const sci = Number(document.getElementById("sciIn").value);
    const math = Number(document.getElementById("mathIn").value);
    const eng = Number(document.getElementById("engIn").value);
    
    const average = (sci + math + eng) / 3;

    console.log("--- คำนวณคะแนนใหม่ ---");
    console.log(`เฉลี่ย: ${average.toFixed(2)}`);

    document.getElementById("subjectScore").innerHTML = 
        "คะแนนเฉลี่ยของคุณคือ: " + average.toFixed(2);
}

// ฟังก์ชันคำนวณราคาสินค้า
function calculateProduct() {
    const name = document.getElementById("pNameIn").value;
    const price = Number(document.getElementById("pPriceIn").value);
    const vatRate = 0.07;
    
    const vatAmount = price * vatRate;
    const totalPrice = price + vatAmount;

    console.log("--- คำนวณราคาสินค้าใหม่ ---");
    console.log(`สินค้า: ${name}, ราคาสุทธิ: ${totalPrice.toLocaleString()}`);

    document.getElementById("product").innerHTML = 
        name + " ราคาสินค้ารวม VAT 7% เท่ากับ: " + totalPrice.toLocaleString() + " บาท";
}

calculateScores();
calculateProduct();