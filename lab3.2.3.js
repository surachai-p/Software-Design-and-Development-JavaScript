document.addEventListener("DOMContentLoaded", function () {

    const roomtype = document.getElementById("roomtype");
    const guests = document.getElementById("guests");

    // กำหนดจำนวนคนตามขนาดห้อง
    const roomCapacity = {
        standard: 2,
        deluxe: 3,
        suite: 4
    };

    roomtype.addEventListener("change", function () {

        const selectedRoom = this.value;

        if (roomCapacity[selectedRoom]) {

            // ใส่จำนวนคนลงในช่องจำนวนผู้เข้าพัก
            guests.value = roomCapacity[selectedRoom];

            // จำกัดไม่ให้กรอกเกิน
            guests.max = roomCapacity[selectedRoom];
            guests.min = 1;

        } else {
            guests.value = "";
        }

    });

});