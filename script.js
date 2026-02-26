// รับ form element
const bookingForm = document.getElementById('bookingForm');
const messageDiv = document.getElementById('message');

// เพิ่ม event listener ให้กับ form submit
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // ดึงค่าจากฟอร์ม
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const roomtype = document.getElementById('roomtype').value;
    const guests = parseInt(document.getElementById('guests').value);
    
    // วันที่ปัจจุบัน
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    checkin.setHours(0, 0, 0, 0);
    checkout.setHours(0, 0, 0, 0);
    
    // ตรวจสอบการป้อนข้อมูล
    if (!fullname || !email || !phone) {
        showMessage('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
        return;
    }
    
    // ตรวจสอบวันที่เช็คอิน
    if (checkin < today) {
        showMessage('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา', 'error');
        return;
    }
    
    // ตรวจสอบวันที่เช็คเอาท์
    if (checkout <= checkin) {
        showMessage('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน', 'error');
        return;
    }
    
    // ตรวจสอบรูปแบบเบอร์โทร (10 หลัก)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        showMessage('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)', 'error');
        return;
    }
    
    // ตรวจสอบการเลือกประเภทห้อง
    if (!roomtype) {
        showMessage('กรุณาเลือกประเภทห้องพัก', 'error');
        return;
    }
    
    // ตรวจสอบจำนวนผู้เข้าพัก
    if (guests <= 0) {
        showMessage('กรุณากรอกจำนวนผู้เข้าพัก', 'error');
        return;
    }
    
    // คำนวณจำนวนวันที่พัก
    const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    
    // ดึงข้อความประเภทห้อง
    const roomtypeSelect = document.getElementById('roomtype');
    const roomtypeText = roomtypeSelect.options[roomtypeSelect.selectedIndex].text;
    
    // สร้างสรุปการจอง
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
    
    // แสดงสรุปการจองและรอการยืนยัน
    if (confirm(summary)) {
        showMessage('✓ จองห้องพักเรียบร้อยแล้ว', 'success');
        // รีเซ็ตฟอร์ม
        bookingForm.reset();
        // ซ่อนข้อมูลหลังจาก 3 วินาที
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
});

// เพิ่มการตรวจสอบวันที่แบบ Real-time
document.getElementById('checkin').addEventListener('change', function() {
    const checkinDate = this.value;
    document.getElementById('checkout').min = checkinDate;
});

// จำกัดจำนวนผู้เข้าพักตามประเภทห้อง
document.getElementById('roomtype').addEventListener('change', function() {
    const guestsInput = document.getElementById('guests');
    let maxGuests = 4;
    
    if (this.value === 'standard') {
        maxGuests = 2;
    } else if (this.value === 'deluxe') {
        maxGuests = 3;
    } else if (this.value === 'suite') {
        maxGuests = 4;
    }
    
    guestsInput.max = maxGuests;
    
    // ถ้าจำนวนผู้เข้าพักเกินสิ่งที่อนุญาต ให้ลดลง
    if (guestsInput.value > maxGuests) {
        guestsInput.value = maxGuests;
    }
});

// ตั้งวันที่เช็คอินขั้นต่ำเป็นวันปัจจุบัน
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin').min = today;
});

// ฟังก์ชั่นสำหรับแสดงข้อความ
function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
    messageDiv.style.display = 'block';
}
