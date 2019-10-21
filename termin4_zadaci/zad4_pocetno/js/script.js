//zadatak1

// var ime = document.getElementById("ime");
// var prezime = document.getElementById("prezime");
// var jmbg = document.getElementById("jmbg");
// var registracija = document.getElementById("registracija");
var sel2 = document.getElementById("sel2");
var eko = document.getElementById("eco");
var tipVozila =document.getElementById("tipVozila");

function proveraPolja(polje, tekst) {
    if(polje.value == ""){
        alert(tekst);
        return false;
    } else {
        return true;
    }
}

function proveraForme(forma) {
    if(proveraPolja(forma.ime, "niste uneli ime") == false){
        forma.ime.focus();
        return false;
    }
    if(proveraPolja(forma.prezime, "niste uneli prezime")  == false){
        forma.prezime.focus();
        return false;
    }
    if(proveraPolja(forma.jmbg, "niste uneli jmbg") == false){
        forma.jmbg.focus();
        return false;
    }
    if(proveraPolja(forma.registracija, "niste ubeli registraciju") == false){
        forma.registracija.focus();
        return false;
    }
    var ime = forma.ime.value;
    if(ime[0] != ime[0].toUpperCase()){
        alert("ime mora poceti velikim slovom!");
        return false;
    }
    var prezime = forma.prezime.value;
    if(prezime[0] != prezime[0].toUpperCase()){
        alert("prezime mora poceti velikim slovom!");
        return false;
    }
    var jmbg = forma.jmbg.value;
    if(jmbg.length != 13){
        alert("JMBG mora sadrzati 13 cifara");
        return false;
    }
    return true;

}



tipVozila.addEventListener("mouseover", function () {
    eko.style.visibility = "visible";
});
tipVozila.addEventListener("mouseout", function () {
    eko.style.visibility = "hidden";
});

sel2.addEventListener("change", function () {
    if(sel2.value == 3){
        eko.style.color = "red";
    } else {
        eko.style.color = "green";
    }
});








