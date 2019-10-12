var zbr = 0;

function brojac() {
    zbr++;
    console.log('\n' + '-------------------------------------------------------' + '\n' + 'zadatak ' + zbr + '\n' + '-------------------------------------------------------');
}

//zadatak1
brojac();


var vocke1 = ["banana", "kruska", "jabuka"];
var vocke2 = ["tresnja", "sljiva", "jagoda"];
var vocke= [];

for(var i in vocke1){
    vocke.push(vocke1[i]);
}
for(var i in vocke2){
    vocke.push(vocke2[i]);
}

console.log(vocke);

//zadatak2
brojac();

var vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
var vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];
var vocke3 = [];

for(var i in vocke1){
    vocke3.push(vocke1[i]);
}
for(var i in vocke2){
    if(!vocke3.includes(vocke2[i])){
        vocke3.push(vocke2[i]);
    }
}
console.log(vocke3);

//zadatak3
brojac();

var automobili = [ ["mercedes", "b"], ["opel", "d"], ["toyota", "d"], ["bmw", "b"], ["volvo", "d"]];

var benzin = [];
var dizel = [];

for(var i = 0; i < automobili.length; i++){
    if(automobili[i][1] == 'b'){
        benzin.push(automobili[i]);
    }else{
        dizel.push(automobili[i]);
    }
}
console.log("Benzin: " + benzin + " Dizel: " + dizel);

// Dat je spisak zaposlenih i njihove godine u sledecem obliku:
var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
];


// Zadatak 4
brojac();
// Za zadate zaposlene ispisati svakog zaposlenog i koliko svaki zaposleni ima godina


for(var i = 0; i < zaposleni[0].length;i++){
    console.log('Zaposleni ' + zaposleni[0][i] + " ima " + zaposleni[1][i] + ' godina.');
    
}


// Zadatak 5
brojac();
// U spisku zaposlenih naci koliko jova ima godina

for(var i in zaposleni){
    if(zaposleni[0][i] == "jova"){
        console.log("Zaposleni Jova ima: " + zaposleni[1][i] + " ghodina.");
        
    }
}

// Zadatak 6
brojac();
// Naci srednju vrednost godina zaposlenih

var suma = 0;

for(var i = 0; i < zaposleni[1].length;i++){
    suma += zaposleni[1][i];
}
var srednja_vrednost = suma / zaposleni[1].length;
console.log("Srednju vrednost godina zaposlenih je: " + srednja_vrednost);

// Zadatak 7
brojac();
// Dat je spisak zaposlenih u sledecem obliku
var zaposleni = [
  ["pera",      "jova",     "marko"],
  [28,          31,         39],
  ["inzenjer",  "tehnicar", "doktor"],
  [700,         0,        0]
];


// Za zadate zaposlene izracunati i podesiti plate ostalih zaposlenih tako da:
// tehnicar ima 70% plate inzenjera
for(var i = 0; i < zaposleni[2].length;i++){
    if(zaposleni[2][i] == "tehnicar"){
        zaposleni[3][i] = Math.round(zaposleni[3][0] * 0.7);
    }
}
// doktor ima platu tehnicara + pola plate inzenjera
for(var i = 0; i < zaposleni[2].length;i++){
    if(zaposleni[2][i] == "doktor"){
        zaposleni[3][i] = zaposleni[3][1] + zaposleni[3][0] / 2;
    }
}
// nakon toga proci kroz spisak zaposlenih i ispisati njihova imena, njihove radne pozicije i njihove plate
for(var i = 0 ; i < zaposleni[0].length;i++){
    console.log("Zaposleni: " + zaposleni[0][i] + ", radna pozicija: " + zaposleni[2][i] + ", plata: " + zaposleni[3][i]);
    
}
// Napomena: Sve izmene vrsiti nad postojecom strukturom


// Zadatak 8
brojac();
// Za zadatu listu zaposlenih izracunati godinu rodjenja na osnovu trenutnih godina
var godina_rodjenja = [];

var d = new Date();
var godina = d.getFullYear();

for(var i = 0; i < zaposleni[1].length;i++){
    godina_rodjenja.push(godina - zaposleni[1][i]);
}
zaposleni.push(godina_rodjenja);
console.log(zaposleni);

// Izracunati godinu rodjenja za svakog zaposlenog i dobijene rezultate smestiti u niz
// koji je potrebno ubaciti u var zaposleni.
// Napomena: Za dobijanje trenutne godine mozete iskoristiti sledeci kod
// var d = new Date();
// var godina = d.getFullYear();


