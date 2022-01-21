// Kurs USD to IDR
function convert() {
    const dolar = 1 / 14320;
    console.log(dolar);
    let idr = document.getElementById("idr").value;
    console.log(idr);
    let konversi = idr * dolar;
    console.log(konversi);
    let hasil_konv = document.getElementById("hasilKurs");
    hasil_konv.innerHTML = konversi + "$";
}