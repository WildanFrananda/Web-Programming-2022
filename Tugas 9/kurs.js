
function hitungKursAsing() {
    const matauang = document.getElementById("currency");
    const rupiah = document.getElementById("rupiah");

    if (matauang.value === "usd") {
        rupiah.value = berapa.value * 14308;
    }
    if (matauang.value === "sgd") {
                rupiah.value = berapa.value * 10637;
    }
    if (matauang.value === "myr") {
                rupiah.value = berapa.value * 3417;
    }
    if (matauang.value === "jpy") {
                rupiah.value = berapa.value * 125;
    }
    if (matauang.value === "eur") {
                rupiah.value = berapa.value * 16222;
    }
    if (matauang.value === "sar") {
                rupiah.value = berapa.value * 3815;
    }
    
}
