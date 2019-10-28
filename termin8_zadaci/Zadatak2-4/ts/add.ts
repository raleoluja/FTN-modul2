/// <reference path="Doktor.ts" />

let tehnicar1: Tehnicar = new Tehnicar("Pera", "Peric", 23, 800);
let inzenjer1: Inzenjer = new Inzenjer("Ivan", "Ivanovic", 44, 800);
let doktor1: Doktor = new Doktor("Zvonko", "Bogan", 55, 800);

console.log(`Plata tehnicara je: ${tehnicar1.plata}`);
console.log(`Plata inzenjera je: ${inzenjer1.plata}`);
console.log(`Plata doktora je: ${doktor1.plata}`);

radnici = [tehnicar1, inzenjer1, doktor1];

console.log(radnici);

console.log(`Prosecna starost radnika je: ${srednjaVrednosGodinaRadnika()}`);

console.log(`Godina rodjenja, radnika ${tehnicar1.$ime}: ${tehnicar1.godinaRodjenja}`);







