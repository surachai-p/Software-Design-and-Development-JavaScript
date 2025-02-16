document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateBtn").addEventListener("click", calculateTotalPrice);
});

function calculateTotalPrice() {
    // รับค่าจาก input
    let productName = document.getElementById("productName").value;
    let productPrice = parseFloat(document.getElementById("productPrice").value);

    // ตรวจสอบว่าผู้ใช้กรอกข้อมูลถูกต้องหรือไม่
    if (productName.trim() === "" || isNaN(productPrice) || productPrice <= 0) {
        document.getElementById("result").innerText = "⚠ กรุณากรอกชื่อสินค้าและราคาสินค้าให้ถูกต้อง";
        return;
    }

    // คำนวณราคาสินค้ารวม VAT 7%
    let vat = productPrice * 0.07;
    let totalPrice = productPrice + vat;

    // แสดงผลลัพธ์
    document.getElementById("result").innerHTML = 
        `สินค้า: ${productName} <br>
         ราคา: ${productPrice.toFixed(2)} บาท <br>
         VAT 7%: ${vat.toFixed(2)} บาท <br>
         ราคาสุทธิ: ${totalPrice.toFixed(2)} บาท`;
}
