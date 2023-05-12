function getEle(id) {
    return document.getElementById(id);
};
var listSoNguyen = [];
var btnThemSo = document.getElementById('btnThemSo');
btnThemSo.onclick = function () {
    var soNguyen = document.getElementById('soNguyen').value * 1;
    listSoNguyen.push(soNguyen);

    document.getElementById('footerCard').innerHTML = listSoNguyen;
};

/**Tính tổng các số dương */
getEle('btnTongSoDuong').onclick = function () {
    var sum = 0;
    for (let i = 0; i < listSoNguyen.length; i++) {
        var soDuong = listSoNguyen[i]
        if (soDuong > 0) {
            sum += soDuong;
        };
    };

    getEle('footerTongSoDuong').innerHTML = "Tổng số dương là: " + sum;
};

/**Đếm số dương */
getEle('btnDemSoDuong').onclick = function () {
    var count = 0;
    for (let i = 0; i < listSoNguyen.length; i++) {
        var positive = listSoNguyen[i]
        if (positive > 0) {
            count += 1;
        };
    };

    getEle('footerDemSoDuong').innerHTML = "Số dương hiện có: " + count;
};

/**Tìm số nhỏ nhất */
getEle('btnSoNhoNhat').onclick = function () {
    var min = listSoNguyen[0];
    for (var i = 0; i < listSoNguyen.length; i++) {
        var number = listSoNguyen[i]
        if (number < min) {
            min = number
        }
    };
    getEle('footerSoNhoNhat').innerHTML = "Số nhỏ nhất là: " + min;
};

/**Tìm số dương nhỏ nhất */
getEle('btnSoDuongNhoNhat').onclick = function () {
    var minDuong = Infinity;
    for (var i = 0; i < listSoNguyen.length; i++) {
        var number = listSoNguyen[i]
        if (number > 0 && number < minDuong) {
            minDuong = number
        };
    };
    getEle('footerSoDuongNhoNhat').innerHTML = "Số dương nhỏ nhất là: " + minDuong;
};

/**Số chẵn cuối cùng */
getEle('btnSoChanCuoiCung').onclick = function () {
    var lastSoChan = -1;
    for (var i = listSoNguyen.length - 1; i >= 0; i--) {
        var number = listSoNguyen[i];
        if (number % 2 === 0) {
            lastSoChan = number;
            break;
        };

    };

    getEle('footerSoChanCuoiCung').innerHTML = "Số chẵn cuối cùng là: " + lastSoChan;
};

/**Thứ tự tăng dần*/
getEle('btnTangDan').onclick = function () {
    for (var i = 0; i < listSoNguyen.length - 1; i++) {
        for (j = i + 1; j < listSoNguyen.length; j++) {
            if (listSoNguyen[i] > listSoNguyen[j]) {
                var number = listSoNguyen[j];
                listSoNguyen[j] = listSoNguyen[i];
                listSoNguyen[i] = number;
            };
        };
    };
    getEle('footerTangDan').innerHTML = "Thứ tự tăng dần: " + listSoNguyen;
};