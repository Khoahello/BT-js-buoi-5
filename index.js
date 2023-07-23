// Bài 1
function traDiemThi() {
    var diemChuan = document.getElementById("diem-chuan").value * 1
    var khuVuc = document.getElementById("khu-vuc").value * 1
    var doiTuong = document.getElementById("doi-tuong").value * 1
    var diemMon1 = document.getElementById("diem-mon-1").value * 1
    var diemMon2 = document.getElementById("diem-mon-2").value * 1
    var diemMon3 = document.getElementById("diem-mon-3").value * 1
    var tongDiem = 0
    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        document.getElementById("tong-diem").innerText = "Bạn đã rớt do có môn bị điểm 0"
    } else {
        tongDiem = khuVuc + doiTuong + diemMon1 + diemMon2 + diemMon3
        if (tongDiem >= diemChuan) {
            document.getElementById("tong-diem").innerText = `Bạn đã đậu. Tổng điểm: ${tongDiem}`
        } else {
            document.getElementById("tong-diem").innerText = `Bạn đã rớt. Tổng điểm: ${tongDiem}`
        }
    }
}

// Bài 2
function tinhTienDien() {
    var dienHoVaTen = document.getElementById("dien-ho-va-ten").value
    var congSuat = document.getElementById("cong-suat").value * 1
    var tienDien = 0
    if (congSuat <= 50) {
        tienDien = congSuat * 500
        document.getElementById("tien-dien").innerText = `Họ tên: ${dienHoVaTen}; Tiền điện: ${tienDien.toLocaleString()}`
    } else if (congSuat <=100) {
        tienDien = 50 * 500 + (congSuat - 50) * 650
        document.getElementById("tien-dien").innerText = `Họ tên: ${dienHoVaTen}; Tiền điện: ${tienDien.toLocaleString()}`
    } else if (congSuat <=200) {
        tienDien = 50 * 500 + 50 * 650 + (congSuat - 100) * 850
        document.getElementById("tien-dien").innerText = `Họ tên: ${dienHoVaTen}; Tiền điện: ${tienDien.toLocaleString()}`
    } else if (congSuat <=350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (congSuat - 200) * 1100
        document.getElementById("tien-dien").innerText = `Họ tên: ${dienHoVaTen}; Tiền điện: ${tienDien.toLocaleString()}`
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (congSuat - 350) * 1300
        document.getElementById("tien-dien").innerText = `Họ tên: ${dienHoVaTen}; Tiền điện: ${tienDien.toLocaleString()}`
    }
}

// Bài 3
function tinhTienThue() {
    var thueHoVaTen = document.getElementById("thue-ho-va-ten").value
    var TongThuNhapCaNhan = document.getElementById("tong-thu-nhap-ca-nhan").value * 1
    var SoNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1
    var ThuNhapChiuThue = TongThuNhapCaNhan - 4000000 - SoNguoiPhuThuoc * 1600000
    if (ThuNhapChiuThue) {
        
    }

}