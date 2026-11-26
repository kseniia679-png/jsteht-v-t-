

const tuotteet = [
  { nimi: "Maito", hinta: 1.29, kategoria: "juomat" },
  { nimi: "Leipä", hinta: 2.5, kategoria: "ruoka" },
  { nimi: "Juusto", hinta: 4.9, kategoria: "maitotuotteet" },
  { nimi: "Mehu", hinta: 2.2, kategoria: "juomat" },
  { nimi: "Banaani", hinta: 0.6, kategoria: "hedelmät" },
  { nimi: "Omena", hinta: 0.8, kategoria: "hedelmät" },
  { nimi: "Jogurtti", hinta: 1.5, kategoria: "maitotuotteet" },
  { nimi: "Kahvi", hinta: 5.5, kategoria: "juomat" }
];

const tulokset = {};

// Tehtävä 1: Nimilista
const nimet = tuotteet.map((t) => t.nimi).join(", ");
console.log("Tehtävä 1:", nimet);
tulokset.t1 = nimet;

// Tehtävä 2: Hintasuodatin
function edullisemmat(raja) {
  return tuotteet.filter((t) => t.hinta < raja);
}
const alleKolme = edullisemmat(3);
console.log("Tehtävä 2 (alle 3 €):");
console.table(alleKolme);
tulokset.t2 = alleKolme.map((t) => `${t.nimi} (${t.hinta.toFixed(2)} €)`).join(", ");

// Tehtävä 3: Keskihinta
const keskihinta =
  tuotteet.reduce((summa, t) => summa + t.hinta, 0) / tuotteet.length;
const keskihintaTeksti = `${keskihinta.toFixed(2)} €`;
console.log("Tehtävä 3:", keskihintaTeksti);
tulokset.t3 = keskihintaTeksti;

// Tehtävä 4: Järjestys
const jarjestetyt = tuotteet.toSorted((a, b) => b.hinta - a.hinta);
console.log("Tehtävä 4 (kalleimmasta halvimpaan):", jarjestetyt);
console.log("Alkuperäinen taulukko:", tuotteet);
tulokset.t4 = jarjestetyt
  .map((t) => `${t.nimi} (${t.hinta.toFixed(2)} €)`)
  .join(", ");

// Tehtävä 5: Kategoriat
const kategoriat = Object.groupBy(tuotteet, (t) => t.kategoria);
const kategoriaRivit = [];
for (const [kategoria, lista] of Object.entries(kategoriat)) {
  const rivi = `${kategoria}: ${lista.length} tuotetta`;
  console.log("Tehtävä 5:", rivi);
  kategoriaRivit.push(rivi);
}
tulokset.t5 = kategoriaRivit;

// Tehtävä 6: Hinnankorotus
const korotetutHinnat = tuotteet.map((t) => ({
  ...t,
  hinta: Number((t.hinta * 1.1).toFixed(2))
}));
console.log("Tehtävä 6 (+10%):", korotetutHinnat);
console.log("Alkuperäinen taulukko edelleen:", tuotteet);
tulokset.t6 = korotetutHinnat
  .map((t) => `${t.nimi} (${t.hinta.toFixed(2)} €)`)
  .join(", ");

// Näytä tulokset sivulla, jos index.html on avattu
document.addEventListener("DOMContentLoaded", () => {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("t1", tulokset.t1);
  setText("t2", tulokset.t2);
  setText("t3", tulokset.t3);
  setText("t4", tulokset.t4);
  setText("t6", tulokset.t6);

  const ul = document.getElementById("t5");
  if (ul) {
    ul.innerHTML = "";
    tulokset.t5.forEach((rivi) => {
      const li = document.createElement("li");
      li.textContent = rivi;
      ul.appendChild(li);
    });
  }
});