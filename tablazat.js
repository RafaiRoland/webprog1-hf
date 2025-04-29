const nevInput = document.getElementById("nev");
const eletkorInput = document.getElementById("eletkor");
const hozzaadGomb = document.getElementById("hozzaad");
const tablaTartalom = document.getElementById("tabla-tartalom");
const szuroInput = document.getElementById("szuro");

hozzaadGomb.addEventListener("click", () => {
    const nev = nevInput.value.trim();
    const eletkor = eletkorInput.value.trim();

    if (nev === "" || eletkor === "") return;

    const sor = document.createElement("tr");

    const nevCella = document.createElement("td");
    nevCella.textContent = nev;

    const eletkorCella = document.createElement("td");
    eletkorCella.textContent = eletkor;

    const torlesCella = document.createElement("td");
    const torlesGomb = document.createElement("button");
    torlesGomb.textContent = "Törlés";
    torlesGomb.addEventListener("click", () => {
        tablaTartalom.removeChild(sor);
    });
    torlesCella.appendChild(torlesGomb);

    sor.appendChild(nevCella);
    sor.appendChild(eletkorCella);
    sor.appendChild(torlesCella);

    tablaTartalom.appendChild(sor);

    nevInput.value = "";
    eletkorInput.value = "";
});

szuroInput.addEventListener("input", () => {
    const szuroSzoveg = szuroInput.value.toLowerCase();
    const sorok = tablaTartalom.getElementsByTagName("tr");

    for (let sor of sorok) {
        const nev = sor.cells[0].textContent.toLowerCase();
        sor.style.display = nev.includes(szuroSzoveg) ? "" : "none";
    }
});