// NumberFormat
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// Quản lý tuyển sinh
function traDiemThi() {
    var diemChuan = document.getElementById("diem-chuan").value * 1
    var khuVuc = document.getElementById("khu-vuc").value * 1
    var doiTuong = document.getElementById("doi-tuong").value * 1
    var diemMon1 = document.getElementById("diem-mon-1").value * 1
    console.log("🚀 ~ file: index.js:13 ~ traDiemThi ~ diemMon1:", diemMon1)
    var diemMon2 = document.getElementById("diem-mon-2").value * 1
    console.log("🚀 ~ file: index.js:15 ~ traDiemThi ~ diemMon2:", diemMon2)
    var diemMon3 = document.getElementById("diem-mon-3").value * 1
    console.log("🚀 ~ file: index.js:17 ~ traDiemThi ~ diemMon3:", diemMon3)
    var tongDiem = 0
    if (khuVuc == -1 && doiTuong == -1) {
        alert("Vui lòng chọn Khu vực và Đối tượng")
    } else if (khuVuc == -1) {
        alert("Vui lòng chọn Khu vực ")
    } else if (doiTuong == -1) {
        alert("Vui lòng chọn Đối tượng")
    } else {
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
}

// Tính tiền điện
function tinhTienDien() {
    var dienHoVaTen = document.getElementById("dien-ho-va-ten").value
    var congSuat = document.getElementById("cong-suat").value * 1
    var tienDien = 0
    if (congSuat <= 50) {
        tienDien = congSuat * 500
    } else if (congSuat <=100) {
        tienDien = 50 * 500 + (congSuat - 50) * 650
    } else if (congSuat <=200) {
        tienDien = 50 * 500 + 50 * 650 + (congSuat - 100) * 850
    } else if (congSuat <=350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (congSuat - 200) * 1100
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (congSuat - 350) * 1300
    }
    document.getElementById("tien-dien").innerText = `Họ tên: ${dienHoVaTen}; Tiền điện: ${tienDien.toLocaleString()}`
}

// Tính thuế thu nhập cá nhân
function tinhTienThue() {
    var thueHoVaTen = document.getElementById("thue-ho-va-ten").value
    var tongThuNhapCaNhan = document.getElementById("tong-thu-nhap-ca-nhan").value * 1
    var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1
    var thuNhapChiuThue = tongThuNhapCaNhan - 4000000 - soNguoiPhuThuoc * 1600000
    var thueSuat = 0
    var tienThue = 0
    if (thuNhapChiuThue > 0) {
        if (thuNhapChiuThue <= 60000000) {
            thueSuat = 0.05
        } else if (thuNhapChiuThue <= 120000000) {
            thueSuat = 0.1
        } else if (thuNhapChiuThue <= 210000000) {
            thueSuat = 0.15
        } else if (thuNhapChiuThue <= 384000000) {
            thueSuat = 0.2
        } else if (thuNhapChiuThue <= 624000000) {
            thueSuat = 0.25
        } else if (thuNhapChiuThue <= 960000000) {
            thueSuat = 0.3
        } else {
            thueSuat = 0.35
        }
        tienThue = thuNhapChiuThue * thueSuat
        document.getElementById("tien-thue").innerText = `Họ và tên: ${thueHoVaTen}; Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString()} VND`
    } else {
        alert ("Số tiền thu nhập không hợp lệ")
    }
}

// Tính tiền cáp
function selectLoaiKhachHang() {
    var x = document.getElementById("loai-khach-hang").value
    if (x == 2) {
        document.getElementById("so-ket-noi-doanh-nghiep").style.display = "block"
    } else {
        document.getElementById("so-ket-noi-doanh-nghiep").style.display = "none"
    }
    
}

function tinhTienCap() {
    var x = document.getElementById("loai-khach-hang").value
    var maKhachHang = document.getElementById("ma-khach-hang").value
    var soKenhCaoCap = document.getElementById("so-kenh-cao-cap").value * 1
    var soKetNoi = document.getElementById("so-ket-noi").value * 1
    var tienThue = 0
    if (x == 0) {
        alert ("Vui lòng chọn Loại khách hàng")
    } else if (x == 2) {
        if (soKetNoi <= 10) {
            tienThue = 15 + soKenhCaoCap * 50 + 75
        } else {
            tienThue = 15 + soKenhCaoCap * 50 + 75 + (soKetNoi - 10) * 5
        }
    } else {
        tienThue = 4.5 + 20.5 + soKenhCaoCap * 7.5
    }
    document.getElementById("tien-cap").innerText = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${USDollar.format(tienThue)}`
}

