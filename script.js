document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const today = new Date();
    today.setHours(0,0,0,0);

    if (checkin < today) {
        alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
        return;
    }

    if (checkout <= checkin) {
        alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
        return;
    }

    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{9}$/;

    if (!phoneRegex.test(phone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (9 หลัก)');
        return;
    }

    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));

    const roomtype = document.getElementById('roomtype');
    const roomtypeText = roomtype.options[roomtype.selectedIndex].text;

    const summary = `
สรุปการจอง:
- ชื่อผู้จอง: ${document.getElementById('fullname').value}
- ประเภทห้อง: ${roomtypeText}
- วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}
- วันที่ออก: ${checkout.toLocaleDateString('th-TH')}
- จำนวนวันที่พัก: ${days} วัน
- จำนวนผู้เข้าพัก: ${document.getElementById('guests').value} ท่าน
`;

    if (confirm(summary + '\n\nยืนยันการจองห้องพัก?')) {
        alert('จองห้องพักเรียบร้อยแล้ว');
        this.reset();
    }
});