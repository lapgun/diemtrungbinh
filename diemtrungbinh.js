function trungbinh() {
    let a = parseFloat(document.getElementById('soA').value);
    let b = parseFloat(document.getElementById('soB').value);
    let c = parseFloat(document.getElementById('soC').value);
    if (!a||!b||!c) {
        document.getElementById('dis').innerHTML = 'không được để trống';
    } else {
        let tong = 0;
        tong = (a + b + c) / 3;
        document.getElementById('dis').innerHTML = tong;
    }
}