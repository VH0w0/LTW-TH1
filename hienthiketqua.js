const soCauDungEl = document.getElementById("so-cau-dung");
const tongSoCauEl = document.getElementById("tong-so-cau");
const diemSoEl = document.getElementById("diem-so");
const xemChiTietEl = document.getElementById("xem-chi-tiet");
const chiTietEl = document.getElementById("chi-tiet");

// Dữ liệu bài thi
const data = {
    soCauDung: 39,
    tongSoCau: 40,
    danhSachCauHoi: [
        {
            cauHoi: "1",
            dapAnDung: "True",
            dapAnNguoiDung: "False",
        },
        {
            cauHoi: "2",
            dapAnDung: "False",
            dapAnNguoiDung: "False",
        },
        {
            cauHoi: "3",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "4",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "5",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "6",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "7",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "8",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "9",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "10",
            dapAnDung: "True",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "11",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "12",
            dapAnDung: "B",
            dapAnNguoiDung: "B",
        },
        {
            cauHoi: "13",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "14",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "15",
            dapAnDung: "C",
            dapAnNguoiDung: "C",
        },
        {
            cauHoi: "16",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "17",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "18",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "19",
            dapAnDung: "C",
            dapAnNguoiDung: "C",
        },
        {
            cauHoi: "20",
            dapAnDung: "D",
            dapAnNguoiDung: "D",
        },
        {
            cauHoi: "21",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "22",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "23",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "24",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "25",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "26",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "27",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "28",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "29",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "30",
            dapAnDung: "A, B",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "31",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "32",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "33",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "34",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "35",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "36",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "37",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "38",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "39",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },{
            cauHoi: "40",
            dapAnDung: "0w0",
            dapAnNguoiDung: "0w0",
        },
        // ...
    ],
};

// Hiển thị kết quả

function ketqua(){
    chiTietEl.style.display = "block";
    const danhSachCauHoiEl = chiTietEl.querySelector("table");
    danhSachCauHoiEl.innerHTML = `            
                    <tr>
                        <th>Câu hỏi</th>
                        <th>Đáp án của bạn</th>
                    </tr>`;
    
    for (const cauHoi of data.danhSachCauHoi) {
        const trEl = document.createElement("tr");
        trEl.innerHTML = `
            <td class="cau-hoi">${cauHoi.cauHoi}</td>
            <td class="dap-an">${cauHoi.dapAnNguoiDung}</td>
            `;

        danhSachCauHoiEl.appendChild(trEl);
    }
};
ketqua();