import QRCode from 'qrcode-svg';

import $ from 'jquery';



function changeQrCode(text) {
    const cont = document.getElementById("container");
    if(text===''){
        cont.innerHTML = "No text entered";
    } else {
        //https://github.com/papnkukn/qrcode-svg
        const qrcode = new QRCode({
            content: text,
            container: "svg", //Responsive use
            width: 320,
            height: 320,
            join: true //Crisp rendering and 4-5x reduced file size
        });
        const svg = qrcode.svg();
        cont.innerHTML = svg;
    }
}

$('#qr_text').on('input',function(e){
    changeQrCode(e.target.value);
})

