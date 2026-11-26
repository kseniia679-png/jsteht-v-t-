// Tehtävä 1: Lämpötilamuunnin
const celsiusFahrenheitiksi = c => c * 9 / 5 + 32;

console.log(celsiusFahrenheitiksi(-20)); // -4
console.log(celsiusFahrenheitiksi(0));   // 32
console.log(celsiusFahrenheitiksi(25));  // 77


// Tehtävä 2: Arvosana
function arvosana(pisteet) {
    if (pisteet < 50) return 0;
    if (pisteet < 60) return 1;
    if (pisteet < 70) return 2;
    if (pisteet < 80) return 3;
    if (pisteet < 90) return 4;
    return 5;
}

console.log(arvosana(45));
console.log(arvosana(65));
console.log(arvosana(85));
console.log(arvosana(95));


// Tehtävä 3: Tervehdys oletusarvolla
function tervehdi(nimi, kieli = "fi") {
    if (kieli === "fi") return `Hei ${nimi}!`;
    if (kieli === "en") return `Hello ${nimi}!`;
    if (kieli === "sv") return `Hej ${nimi}!`;

    return `Hei ${nimi}!`;
}

console.log(tervehdi("Maija"));
console.log(tervehdi("John", "en"));
console.log(tervehdi("Anna", "sv"));


// Tehtävä 4: FizzBuzz
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Tehtävä 5: Puuttuvat tiedot
const asetukset = {
    teema: null,
    fonttikoko: 0
};

console.log(asetukset.teema ?? "vaalea");
console.log(asetukset.fonttikoko ?? 16);

console.log(asetukset.teema || "vaalea");
console.log(asetukset.fonttikoko || 16);