  document.getElementById("img").src = localStorage.getItem("img");
  document.getElementById("name").innerText = localStorage.getItem("name");
  document.getElementById("price").innerText = Number(localStorage.getItem("price")).toLocaleString("vi-VN");

  function datHang() {
      // Lấy giá trị input
      const hoTen = document.querySelector('input[placeholder="Họ tên"]').value.trim();
      const sdt = document.querySelector('input[placeholder="Số điện thoại"]').value.trim();

      // Kiểm tra rỗng
      if (hoTen === "" || sdt === "") {
          alert("Vui lòng điền đầy đủ Họ tên và Số điện thoại trước khi đặt hàng!");
          return; // dừng hàm nếu chưa điền đủ
      }

      // Nếu đã điền đầy đủ
      alert("Đặt hàng thành công!");
      localStorage.clear();
      window.location.href = "../index.html";
  }