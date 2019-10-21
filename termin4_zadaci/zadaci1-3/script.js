//zadatak1,2,3

var button = document.getElementById("button");
var izbor = document.getElementById("izbor");
var tekst = document.getElementById("tekst");
var upisi = document.getElementById("upisi");
var secret = document.getElementById("secret");

button.addEventListener("click" , function (ime, prezime) {
    var ime = "Pera";
    var prezime = "Peric";
    console.log(ime, prezime);
    document.write("Hello " + ime + " " + prezime);
    
});

izbor.addEventListener("input" , function () {
    tekst.value = izbor.value;
});

upisi.addEventListener("click", function () {
    secret.innerHTML = tekst.value;
    secret.style.visibility = "visible";
});



