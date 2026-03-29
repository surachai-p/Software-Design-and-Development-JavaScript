document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    console.log("ชื่อ:", name);
    console.log("อีเมล:", email);
    console.log("เบอร์โทร:", phone);

    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
});