//  จัดการ Form Submit 
// ฟังก์ชันหลักที่ทำการตรวจสอบและส่งข้อมูล
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // หยุดการ refresh หน้าเว็บ
    
    // ดึงค่าจากช่องฟอร์ม
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const roomtype = document.getElementById('roomtype').value;
    const guests = parseInt(document.getElementById('guests').value);
    
    // วันที่ปัจจุบัน (ตั้งค่าเวลาเป็น 0)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    checkin.setHours(0, 0, 0, 0);
    checkout.setHours(0, 0, 0, 0);
    
    // ตรวจสอบการป้อนข้อมูลเบื้องต้น 
    if (!fullname || !email || !phone) {
        showMessage('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
        return;
    }
    
    // ตรวจสอบวันที่เช็คอิน 
    // ตรวจสอบว่าวันที่เช็คอินไม่ได้เป็นวันที่ผ่านมาแล้ว
    if (checkin < today) {
        showMessage('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา', 'error');
        return;
    }
    
    // ตรวจสอบวันที่เช็คเอาท์
    // ตรวจสอบว่าวันที่เช็คเอาท์มาหลังวันที่เช็คอิน
    if (checkout <= checkin) {
        showMessage('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน', 'error');
        return;
    }
    
    //  ตรวจสอบรูปแบบเบอร์โทร
    // ใช้ regex pattern ตรวจสอบว่าเบอร์โทรมี 10 หลักและเป็นตัวเลขเท่านั้น
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        showMessage('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)', 'error');
        return;
    }
    
    //  ตรวจสอบการเลือกประเภทห้อง 
    if (!roomtype) {
        showMessage('กรุณาเลือกประเภทห้องพัก', 'error');
        return;
    }
    
    //  ตรวจสอบจำนวนผู้เข้าพัก 
    if (guests <= 0) {
        showMessage('กรุณากรอกจำนวนผู้เข้าพัก', 'error');
        return;
    }
    
    //  คำนวณจำนวนวันที่พัก 
    // คำนวณระหว่างวันที่เช็คเอาท์ กับ วันที่เช็คอิน
    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    
    //  ดึงข้อความประเภทห้อง 
    const roomtypeSelect = document.getElementById('roomtype');
    const roomtypeText = roomtypeSelect.options[roomtypeSelect.selectedIndex].text;
    
    //  สร้างสรุปการจอง 
    const summary = `ข้อมูลการจอง:\n\n` +
        `ชื่อผู้จอง: ${fullname}\n` +
        `อีเมล: ${email}\n` +
        `เบอร์โทร: ${phone}\n` +
        `ประเภทห้อง: ${roomtypeText}\n` +
        `วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}\n` +
        `วันที่ออกพัก: ${checkout.toLocaleDateString('th-TH')}\n` +
        `จำนวนวันที่พัก: ${days} วัน\n` +
        `จำนวนผู้เข้าพัก: ${guests} ท่าน\n\n` +
        `ยืนยันการจองห้องพัก?`;
    
    //  แสดงสรุปการจองและรอการยืนยัน 
    if (confirm(summary)) {
        showMessage('✓ จองห้องพักเรียบร้อยแล้ว', 'success');
        // รีเซ็ตฟอร์ม
        document.getElementById('bookingForm').reset();
        // ซ่อนข้อมูลหลังจาก 3 วินาที
        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
        }, 3000);
    }
});

//  ตรวจสอบวันที่แบบ Real-time 
// เมื่อผู้ใช้เลือกวันเช็คอิน จะอัปเดต min date ของวันเช็คเอาท์
document.getElementById('checkin').addEventListener('change', function() {
    const checkinDate = this.value;
    document.getElementById('checkout').min = checkinDate;
});

//  จำกัดจำนวนผู้เข้าพักตามประเภทห้อง 
// เมื่อผู้ใช้เลือกประเภทห้อง จะปรับจำนวนผู้เข้าพักสูงสุด
document.getElementById('roomtype').addEventListener('change', function() {
    const guestsInput = document.getElementById('guests');
    let maxGuests = 4;
    
    // กำหนด max guests ตามประเภทห้อง
    if (this.value === 'standard') {
        maxGuests = 2; // ห้องมาตรฐาน: สูงสุด 2 ท่าน
    } else if (this.value === 'deluxe') {
        maxGuests = 3; // ห้องดีลักซ์: สูงสุด 3 ท่าน
    } else if (this.value === 'suite') {
        maxGuests = 4; // ห้องสวีท: สูงสุด 4 ท่าน
    }
    
    guestsInput.max = maxGuests;
    
    // ถ้าจำนวนผู้เข้าพักเกินสิ่งที่อนุญาต ให้ลดลง
    if (guestsInput.value > maxGuests) {
        guestsInput.value = maxGuests;
    }
});

// ตั้งวันที่เช็คอินขั้นต่ำ 
// เมื่อหน้าเว็บโหลดเสร็จ ให้ตั้ง min date เป็นวันปัจจุบัน
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin').min = today;
});

// ฟังก์ชันแสดงข้อความ 
// ฟังก์ชันนี้ใช้สำหรับแสดงข้อความ error, success, info
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
    messageDiv.style.display = 'block';
}
