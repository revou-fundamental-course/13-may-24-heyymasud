document.addEventListener("DOMContentLoaded", function() {
    const formSegitigaLuas = document.getElementById("form-segitigaLuas");
    const formSegitigaKeliling = document.getElementById("form-segitigaKeliling");

    formSegitigaLuas.addEventListener("submit", function(event) {
        event.preventDefault();
        const alas = Number(document.getElementById("alas-segitiga").value);
        const tinggi = Number(document.getElementById("tinggi-segitiga").value);
        const hasil = hitungLuasSegitiga(alas, tinggi);
        document.getElementById("hasil-segitigaLuas").innerHTML = 
        `L = 1/2 x a x t
        L = 1/2 x ${alas} x ${tinggi}
        L = ${hasil}`;
    });

    formSegitigaKeliling.addEventListener("submit", function(event) {
        event.preventDefault();
        const sisiA = Number(document.getElementById("sisi-segitiga1").value);
        const sisiB = Number(document.getElementById("sisi-segitiga2").value);
        const sisiC = Number(document.getElementById("sisi-segitiga3").value);
        const hasil = hitungKelilingSegitiga(sisiA, sisiB, sisiC);
        document.getElementById("hasil-segitigaKeliling").innerHTML = `Keliling Segitiga: ${hasil}`;
    });
});

function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function hitungKelilingSegitiga(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
