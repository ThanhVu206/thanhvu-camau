function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    let repass = document.getElementById("regRePass").value;

    if (user === "" || pass === "" || repass === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (pass !== repass) {
        alert("Mật khẩu không khớp");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Đăng ký thành công!");
    window.location.href = "..//index.html";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        alert("Đăng nhập thành công!");
        window.location.href = "../index.html";
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}