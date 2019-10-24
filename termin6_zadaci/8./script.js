let n = [1, 2, 3, 4, 5];

let uvecaj = broj => broj * 2;
let umanji = broj => broj / 2;

function moja(niz, operacija) {
    return mapa = niz.map(operacija);
};

console.log("Originalan niz: " + n);
console.log("Uvecaj: " + moja(n, uvecaj));
console.log("Umanji: " + moja(n, umanji));
console.log("Koren: " + moja(n,Math.sqrt));


