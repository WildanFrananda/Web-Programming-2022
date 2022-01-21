// Parkir
function total() {
    let masuk = document.getElementById("jmasuk").value;
    let keluar = document.getElementById("jkeluar").value;
    let lama_parkir = keluar - masuk;
    let biaya = 0;
    const biaya_awal = 3000;
    const biaya_perjam = 1000;
    if (lama_parkir <= 2) {
        let total = document.getElementById("total");
        total.innerHTML = biaya_awal;
    } else {
        let total_jam = lama_parkir - 2;
        let hasil = biaya_awal + (total_jam * biaya_perjam);
        let total = document.getElementById("total");
        total.innerHTML = hasil;
    }
}