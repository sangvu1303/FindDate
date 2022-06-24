function tinh_nam_am_lich(){
    let nam_duong_lich = parseInt(document.getElementById('nam_duong_lich').value);
    let so_du_can = (nam_duong_lich - 3) % 10;
    let so_du_chi = (nam_duong_lich - 3) % 12;
    let can;
    let chi;
    switch (so_du_can) {
        case 0:
            can = 'Qúy';
            break;
        case 1:
            can = 'Giáp';
            break;
        case 2:
            can = 'Ất';
            break;
        case 3:
            can = 'Bính';
            break;
        case 4:
            can = 'Đinh';
            break;
        case 5:
            can = 'Mậu';
            break;
        case 6:
            can = 'Kỷ';
            break;
        case 7:
            can = 'Canh';
            break;
        case 8:
            can = 'Thân';
            break;
        case 9:
            can = 'Nhâm';
            break;
        
        default:
            break;
    }

    switch (so_du_chi) {
        case 0:
            chi = 'Hợi';
            break;
        case 1:
            chi = 'Tý';
            break;
        case 2:
            chi = 'Sửu';
            break;
        case 3:
            chi = 'Dần';
            break;
        case 4:
            chi = 'Mão';
            break;
        case 5:
            chi = 'Thìn';
            break;
        case 6:
            chi = 'Tỵ';
            break;
        case 7:
            chi = 'Ngọ';
            break;
        case 8:
            chi = 'Mùi';
            break;
        case 9:
            chi = 'Thân';
            break;
        case 10:
            chi = 'Dậu';
            break;
        case 11:
            chi = 'Tuất';
            break;
        default:
            break;
    }
    document.getElementById('nam_am_lich').innerHTML= ` ${can}  ${chi}`;
}