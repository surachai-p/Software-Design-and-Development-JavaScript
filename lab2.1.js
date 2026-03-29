function showStudent() {
    let studentId = "68030298";
    let studentName = "สุณัฐชา แก้วลา";
    let midtermScore = 30;
    let finalScore = 40;

    let student = {
        id: studentId,
        name: studentName,
        major: "เทคโนโลยีคอมพิวเตอร์",
        gpa: 3.14
    };

    alert(
        "รหัส: " + student.id +
        "\nชื่อ: " + student.name +
        "\nสาขา: " + student.major +
        "\nGPA: " + student.gpa
    );
}showStudent();