const checkin = new Date(document.getElementById('checkin').value);
const checkout = new Date(document.getElementById('checkout').value);
const today = new Date();

if (checkin < today) {
    alert('ห้ามเลือกวันย้อนหลัง');
    return;
}

if (checkout <= checkin) {
    alert('วันออกต้องหลังวันเข้า');
    return;
}
