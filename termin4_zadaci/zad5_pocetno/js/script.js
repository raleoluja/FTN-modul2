var ime = document.getElementById("ime");
var prezime = document.getElementById("prezime");
var tip = document.getElementById("sel2");
var addImePrezime = document.getElementById("ime_prezime");
var addTip = document.getElementById("tip_vozila");
var addCenaRegistracije = document.getElementById("cena_registracije");
var kubikaza = document.getElementById("kubikaza");

function registracija() {
    addImePrezime.innerText = "Registrovano na: " + ime.value + " " + prezime.value;
};

function ispisTipa() {
    addTip.innerText = "Tip vozila je : " + tipVozila();
};

function tipVozila() {
    switch (tip.value) {
        case "2": return "Elektricno";
        break;
        case "3": return "Motorno";
        break;
    }
}

function cenaRegistracije() {
    if(kubikaza.value <= 1200){
        return 15000;
    } else if (kubikaza.value > 1200 < 2000){
        return 25000;
    }else{
        return 35000;
    }
};

function ispisCeneRegistracije() {
    addCenaRegistracije.innerText = "Cena registracije je : " + cenaRegistracije();
}

ime.addEventListener("input" , registracija);
prezime.addEventListener("input" , registracija);
tip.addEventListener("change", ispisTipa);
kubikaza.addEventListener("input", ispisCeneRegistracije);