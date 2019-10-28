function validiraj(forma) {
    var ime = forma.ime.value;
    var prezime = forma.lozinka.value;
    if (ime == "pera" && prezime == "peric") {
        return true;
    }
    else if (ime == "mika" && prezime == "mikic") {
        return true;
    }
    document.getElementById("poruka").innerText = "Neispravno korisnicko ime i/ili lozinka";
    return false;
}
//# sourceMappingURL=validacija.js.map