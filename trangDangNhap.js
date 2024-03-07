const form = document.getElementById('form');
const hoTen = document.getElementById('hoTen');
const ngaySinh = document.getElementById('ngaySinh');
const CCCD = document.getElementById('CCCD');
const diaChi = document.getElementById('diaChi');
const button = document.getElementById('nextIndex');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();

    button.addEventListener('click', function() {
        window.location.href = 'trangBaiThi.html';
    });
});

function checkInputs() {
    const hoTenValue = hoTen.value.trim();
    const ngaySinhValue = ngaySinh.value.trim();
    const CCCDValue = CCCD.value.trim();
    const diaChiValue = diaChi.value.trim();


    //check hoTen
    if(hoTenValue === '') {
        SetforError(hoTen, 'Họ và tên không để trống')
    }else {
        SetforSuccess(hoTen)
    }
    //--

    //check ngaySinh
    if(ngaySinhValue === '') {
        SetforError(ngaySinh, 'Ngày sinh không để trống')
    } else if (!isDate(ngaySinhValue)) {
        SetforError(ngaySinh, 'Ngày không hợp lệ')
    } else {
        SetforSuccess(ngaySinh)
    }

    //check CCCD
    if(CCCDValue === '') {
        SetforError(CCCD, 'CCCD không để trống')
    }else if(CCCDValue.length < 11) {
        SetforError(CCCD, 'Tối thiểu 12 chữ số')
    }else {
        SetforSuccess(CCCD)
    }
    //--
    

    //check password2
    if(diaChiValue === '') {
        SetforError(diaChi, 'Địa chỉ không để trống')
    } else {
        SetforSuccess(diaChi)
    }
}

function SetforError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function SetforSuccess(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control success';
	small.innerText = message;
}


function isDate(input) {
    const date = new Date(input);
    return !isNaN(date) && date instanceof Date;
  }

