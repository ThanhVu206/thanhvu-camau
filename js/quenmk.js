function guiEmail() {
    let email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Vui lòng nhập email");
        return;
    }

    if (!email.includes("@")) {
        alert("Email không hợp lệ (phải có @)");
        return;
    }

    alert("Email hợp lệ! Liên kết đã được gửi");
}