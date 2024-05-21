document.addEventListener("DOMContentLoaded", function() {
    const formSegitigaLuas = document.getElementById("form-segitigaLuas");
    const formSegitigaKeliling = document.getElementById("form-segitigaKeliling");

    formSegitigaLuas.addEventListener("submit", function(event) {
        event.preventDefault();
        const alas = Number(document.getElementById("alas-segitiga").value);
        const tinggi = Number(document.getElementById("tinggi-segitiga").value);
        const hasil = hitungLuasSegitiga(alas, tinggi);
        document.getElementById("hasil-segitigaLuas").innerHTML = 
        `<p>L = 1/2 x a x t</p><p>L = 1/2 x ${alas} x ${tinggi}</p><p>L = ${hasil}</p>`;
    });

    formSegitigaKeliling.addEventListener("submit", function(event) {
        event.preventDefault();
        const sisiA = Number(document.getElementById("sisi-segitiga1").value);
        const sisiB = Number(document.getElementById("sisi-segitiga2").value);
        const sisiC = Number(document.getElementById("sisi-segitiga3").value);
        const hasil = hitungKelilingSegitiga(sisiA, sisiB, sisiC);
        document.getElementById("hasil-segitigaKeliling").innerHTML = `<p>K = S1 + S2 + S3</p><p>K = ${sisiA} + ${sisiB} + ${sisiC}</p><p>L = ${hasil}</p>`;
    });
});

function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function hitungKelilingSegitiga(sisiA, sisiB, sisiC) {
    return (sisiA + sisiB + sisiC);
}
