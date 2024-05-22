document.addEventListener("DOMContentLoaded", function() {
    const formSegitigaLuas = document.getElementById("form-segitigaLuas");
    const formSegitigaKeliling = document.getElementById("form-segitigaKeliling");

    formSegitigaLuas.addEventListener("submit", function(event) {
        event.preventDefault();
        try {
            const alas = Number(document.getElementById("alas-segitiga").value);
            const tinggi = Number(document.getElementById("tinggi-segitiga").value);
            const hasil = hitungLuasSegitiga(alas, tinggi);
            if (alas < 1 || tinggi < 1) {
                throw new Error("Alas dan tinggi harus diisi dengan angka positif");
            }

            document.getElementById("hasil-segitigaLuas").innerHTML = 
            `<p>L = 1/2 x a x t</p><p>L = 1/2 x ${alas} x ${tinggi}</p><p>L = ${hasil}</p>`;
        } catch (error) {
            document.getElementById("hasil-segitigaLuas").innerHTML = 
            `<p>Terjadi kesalahan: ${error.message}</p>`;
        }
    });

    formSegitigaKeliling.addEventListener("submit", function(event) {
        event.preventDefault();
        try {
            const sisiA = Number(document.getElementById("sisi-segitiga1").value);
            const sisiB = Number(document.getElementById("sisi-segitiga2").value);
            const sisiC = Number(document.getElementById("sisi-segitiga3").value);
            const hasil = hitungKelilingSegitiga(sisiA, sisiB, sisiC);
            if (sisiA < 1 || sisiB < 1 || sisiC < 1) {
                throw new Error("Sisi harus diisi dengan angka positif");
            }
            document.getElementById("hasil-segitigaKeliling").innerHTML = `<p>K = S1 + S2 + S3</p><p>K = ${sisiA} + ${sisiB} + ${sisiC}</p><p>K = ${hasil}</p>`;
        } catch (error) {
            document.getElementById("hasil-segitigaKeliling").innerHTML = 
            `<p>Terjadi kesalahan: ${error.message}</p>`;
        }
    });

    formSegitigaLuas.addEventListener("reset", function() {
        document.getElementById("hasil-segitigaLuas").innerHTML = "";
    });

    formSegitigaKeliling.addEventListener("reset", function() {
        document.getElementById("hasil-segitigaKeliling").innerHTML = "";
    });
});

function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function hitungKelilingSegitiga(sisiA, sisiB, sisiC) {
    return (sisiA + sisiB + sisiC);
}
