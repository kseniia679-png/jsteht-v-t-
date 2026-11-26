


// Tehtävä 1: Vaihda otsikon teksti ja piilota ohje piilotettu-luokalla
const otsikko = document.querySelector("#otsikko");
const ohje = document.querySelector(".ohje");

otsikko.textContent = "Ostoslista ja hinnat";
ohje.classList.add("piilotettu");

// Tehtävä 2: Hinnat näkyviin data-hinta-määreestä ja yhteissumma <p id="summa">-elementtiin
const tuotteet = document.querySelectorAll("#lista li");
const summaElementti = document.querySelector("#summa");

let yhteissumma = 0;

for (const li of tuotteet) {
  const hinta = Number(li.dataset.hinta);
  yhteissumma += hinta;
  li.textContent += ` – ${hinta.toFixed(2)} €`;
}

summaElementti.textContent = `Yhteensä: ${yhteissumma.toFixed(2)} €`;

// Tehtävä 3: Korosta kallein tuote korostettu-luokalla (taulukko + reduce())
const tuoteTaulukko = Array.from(tuotteet);

const kalleinTuote = tuoteTaulukko.reduce((paras, nykyinen) => {
  return Number(nykyinen.dataset.hinta) > Number(paras.dataset.hinta)
    ? nykyinen
    : paras;
});

kalleinTuote.classList.add("korostettu");

// Tehtävä 4: Joka toiselle <li>-elementille taustaväri CSS-luokalla JS:n kautta
tuoteTaulukko.forEach((li, indeksi) => {
  if (indeksi % 2 === 1) {
    li.classList.add("joka-toinen");
  }
});

// Tehtävä 5: Konsolitutkimus
const eiOle = document.querySelector(".eiOle");
console.log("document.querySelector('.eiOle'):", eiOle);

try {
  eiOle.textContent = "Hei";
} catch (err) {
  console.log("Virhe textContent-asetuksessa:", err.name, "-", err.message);
}

const valinnainenArvo = document.querySelector(".eiOle")?.textContent;
console.log("Valinnainen ketjutus (?):", valinnainenArvo);

const tehtava5Tulos = document.querySelector("#tehtava5-tulos");
if (tehtava5Tulos) {
  tehtava5Tulos.textContent =
    `querySelector(".eiOle") -> ${eiOle} | ` +
    `textContent nulliin -> TypeError | ` +
    `valinnainen ketjutus (?.) -> ${valinnainenArvo}`;
}