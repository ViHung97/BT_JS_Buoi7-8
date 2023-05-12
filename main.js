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
    var min = listSoNguyen = [0];
    for (var i = 0; i < listSoNguyen.length; i++) {
        var number = listSoNguyen[i]
        if (number < min ) {
            min = number
        }
    };
    getEle('footerSoNhoNhat').innerHTML = "Số nhỏ nhất là: " + min;
};

/**Tìm số dương nhỏ nhất */
getEle('btnSoDuongNhoNhat').onclick = function () {
    var minDuong = listSoNguyen = [0];
    for (var i = 0; i < listSoNguyen.length; i++) {
        var number1 = listSoNguyen[i]
        if (number1 > 0) {
            for (var j = i + 1; j < listSoNguyen.length; j++) {
                var number2 = listSoNguyen[j]
                if (number2 < number1) {
                    minDuong = number2
                };
            };
        };
    };
    getEle('footerSoDuongNhoNhat').innerHTML = "Số dương nhỏ nhất là: " + minDuong;
};

/**Số chẵn cuối cùng */
getEle('btnSoChanCuoiCung').onclick = function () {
    var listSoDuong = [];
    var soChanCuoiCung = 0;
    for (var i = 0; i < listSoNguyen.length; i++) {
        var number1 = listSoNguyen[i];
        if (number1 % 2 === 0) {
            listSoDuong.push(number1);
        } else {
            soChanCuoiCung = -1;
        };
        console.log(soChanCuoiCung)
    };

    getEle('footerSoChanCuoiCung').innerHTML = "Số dương nhỏ nhất là: " + soChanCuoiCung;
};