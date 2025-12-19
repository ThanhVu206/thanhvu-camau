function muaHang(img, name, price) {
    localStorage.setItem("img", img);
    localStorage.setItem("name", name);
    localStorage.setItem("price", price);

    // LUÔN ĐÚNG cho mọi trang trong /html
    window.location.href = "Thanhtoan.html";
}