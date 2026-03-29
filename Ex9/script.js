
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // ตรวจสอบวันที่
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const today = new Date();
    
    if (checkin < today) {
        alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
        return;
    }
    
    if (checkout <= checkin) {
        alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
        return;
    }
    
    // ตรวจสอบรูปแบบเบอร์โทร
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
        return;
    }
    
    // คำนวณจำนวนวันที่พัก
    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    
    // แสดงสรุปการจอง
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

// เพิ่มการตรวจสอบวันที่แบบ Real-time
document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
});

// จำกัดจำนวนผู้เข้าพักตามประเภทห้อง
document.getElementById('roomtype').addEventListener('change', function() {
    const guestsInput = document.getElementById('guests');
    if (this.value === 'standard') {
        guestsInput.max = 2;
    } else if (this.value === 'deluxe') {
        guestsInput.max = 3;
    } else if (this.value === 'suite') {
        guestsInput.max = 4;
    }
    
    if (guestsInput.value > guestsInput.max) {
        guestsInput.value = guestsInput.max;
    }
});

// เพิ่มปุ่มล้างแบบฟอร์ม
document.getElementById('bookingForm').addEventListener('reset', function() {
    // รีเซ็ตค่าของ input ต่างๆ
    document.getElementById('checkout').min = '';
    document.getElementById('guests').max = '';
});