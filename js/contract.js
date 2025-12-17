document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // CHẶN RELOAD FORM

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email của bạn thiếu @");
        return;
    }

    alert("Cảm ơn " + name + "! Chúng tôi sẽ liên hệ cho bạn sớm nhất.");

    // Reset form
    document.getElementById("contactForm").reset();
});