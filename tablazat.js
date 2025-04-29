let rekordok = [];

function hozzaadRekord() {
    const nevInput = document.getElementById("nev");
    const korInput = document.getElementById("kor");
    const nev = nevInput.value.trim();
    const kor = parseInt(korInput.value.trim());

    if (nev === "" || isNaN(kor)) return;

    rekordok.push({ nev, kor });
    nevInput.value = "";
    korInput.value = "";
    frissitTabla();
}

function torolRekord(index) {
    rekordok.splice(index, 1);
    frissitTabla();
}

function frissitTabla() {
    const tablaTorzs = document.getElementById("tabla-torzs");
    tablaTorzs.innerHTML = "";

    rekordok.forEach((rekord, index) => {
        const sor = document.createElement("tr");

        const nevCella = document.createElement("td");
        nevCella.textContent = rekord.nev;

        const korCella = document.createElement("td");
        korCella.textContent = rekord.kor;

        const torlesCella = document.createElement("td");
        const torlesGomb = document.createElement("button");
        torlesGomb.textContent = "Törlés";
        torlesGomb.onclick = () => torolRekord(index);
        torlesCella.appendChild(torlesGomb);

        sor.appendChild(nevCella);
        sor.appendChild(korCella);
        sor.appendChild(torlesCella);

        tablaTorzs.appendChild(sor);
    });
}

function szures() {
    const kereso = document.getElementById("kereses").value.toLowerCase();
    const sorok = document.getElementById("tabla-torzs").getElementsByTagName("tr");

    for (let sor of sorok) {
        const nev = sor.cells[0].textContent.toLowerCase();
        sor.style.display = nev.includes(kereso) ? "" : "none";
    }
}
