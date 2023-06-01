  function xacDinhCungHoangDao(ngaySinh) {
    const date = new Date(ngaySinh);
    const ngay = date.getDate();
    const thang = date.getMonth() + 1;
  
    switch (thang) {
      case 1: {
        if (ngay > 0 && ngay <= 19) {
          return "Ma Kết";
        }
  
        if (ngay > 19 && ngay <= 31) {
          return "Bảo Bình";
        }
        break;
      }
  
      case 2: {
        if (ngay > 0 && ngay <= 18) {
          return "Bảo Bình";
        }
  
        if (ngay > 19 && ngay <= 28) {
          return "Song Ngư";
        }
        break;
      }
  
      case 3: {
        if (ngay > 0 && ngay <= 20) {
          return "Song Ngư";
        }
  
        if (ngay > 20 && ngay <= 31) {
          return "Bạch Dương";
        }
        break;
      }
  
      case 4: {
        if (ngay > 0 && ngay <= 20) {
          return "Bạch Dương";
        }
  
        if (ngay > 20 && ngay <= 30) {
          return "Kim Ngưu";
        }
        break;
      }
  
      case 5: {
        if (ngay > 0 && ngay <= 20) {
          return "Kim Ngưu";
        }
  
        if (ngay > 20 && ngay <= 31) {
          return "Song Tử";
        }
        break;
      }
  
      case 6: {
        if (ngay > 0 && ngay <= 21) {
          return "Song Tử";
        }
  
        if (ngay > 21 && ngay <= 30) {
          return "Cự Giải";
        }
        break;
      }
  
      case 7: {
        if (ngay > 0 && ngay <= 22) {
          return "Cự Giải";
        }
  
        if (ngay > 22 && ngay <= 31) {
          return "Sư Tử";
        }
        break;
      }
  
      case 8: {
        if (ngay > 0 && ngay <= 22) {
          return "Sư Tử";
        }
  
        if (ngay > 22 && ngay <= 31) {
          return "Xử Nữ";
        }
        break;
      }
  
      case 9: {
        if (ngay > 0 && ngay <= 22) {
          return "Xử Nữ";
        }
  
        if (ngay > 22 && ngay <= 30) {
          return "Thiên Bình";
        }
        break;
      }
  
      case 10: {
        if (ngay > 0 && ngay <= 23) {
          return "Thiên Bình";
        }
  
        if (ngay > 23 && ngay <= 31) {
          return "Bọ Cạp";
        }
        break;
      }
  
      case 11: {
        if (ngay > 0 && ngay <= 22) {
          return "Bọ Cạp";
        }
  
        if (ngay > 22 && ngay <= 30) {
          return "Nhân Mã";
        }
        break;
      }
  
      case 12: {
        if (ngay > 0 && ngay <= 21) {
          return "Nhân Mã";
        }
  
        if (ngay > 21 && ngay <= 31) {
          return "Ma Kết";
        }
        break;
      }
    }
  }
  
  function xemCung() {
    const ngaySinh = document.getElementById('txtNgaysinh').value;
    const txtCung = document.getElementById('txtCung');
  
    if(ngaySinh==''){
        alert('Bạn chưa nhập thông tin, ngu vl');
        document.getElementById('txtNgaysinh').focus();
    }else{
        const cung = xacDinhCungHoangDao(ngaySinh);
        txtCung.value = cung;
    }
  }

  function xoa(){
    var ngaySinh = document.getElementById('txtNgaysinh');
    ngaySinh.value='';

    var txtCung = document.getElementById('txtCung');
    txtCung.value = '';
  }


