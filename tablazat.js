function torol(gomb) {
    const sor = gomb.parentElement.parentElement;
    sor.remove();
  }
  
  function ujSor() {
    const nev = prompt("Név:");
    const eletkor = prompt("Életkor:");
    const szak = prompt("Szak:");
  
    if (nev && eletkor && szak) {
      const tabla = document.getElementById("tablazat").getElementsByTagName("tbody")[0];
      const uj = tabla.insertRow();
      uj.innerHTML = `<td>${nev}</td><td>${eletkor}</td><td>${szak}</td><td><button onclick="torol(this)">Törlés</button></td>`;
    }
  }
  
  function rendez(oszlop) {
    const tabla = document.getElementById("tablazat");
    let csere = true;
    while (csere) {
      csere = false;
      let sorok = tabla.rows;
      for (let i = 1; i < sorok.length - 1; i++) {
        let x = sorok[i].getElementsByTagName("td")[oszlop];
        let y = sorok[i + 1].getElementsByTagName("td")[oszlop];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          sorok[i].parentNode.insertBefore(sorok[i + 1], sorok[i]);
          csere = true;
          break;
        }
      }
    }
  }
  
  document.getElementById("szures").addEventListener("keyup", function() {
    const szoveg = this.value.toLowerCase();
    const sorok = document.querySelectorAll("#tablazat tbody tr");
  
    sorok.forEach(sor => {
      const nev = sor.cells[0].textContent.toLowerCase();
      sor.style.display = nev.includes(szoveg) ? "" : "none";
    });
  });
  