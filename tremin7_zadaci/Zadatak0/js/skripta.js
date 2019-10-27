window.onload = function () {
    document.getElementById("forma").addEventListener("submit", function (event) {
        var forma = document.getElementById("forma");
        var ime = document.getElementById("ime");
        var prezime = document.getElementById("prezime");
        var jmbg = document.getElementById("jmbg");
        var registracija = document.getElementById("registracija");
        var flag = true;
        if (ime.value.trim() == "" || ime.value[0] != ime.value[0].toUpperCase()) {
            flag = false;
        }
        if (prezime.value.trim() == "" || prezime.value[0] != prezime.value[0].toUpperCase()) {
            flag = false;
        }
        if (jmbg.value.trim() == "" || jmbg.value.length != 13) {
            flag = false;
        }
        if (registracija.value.trim() == "") {
            flag = false;
        }
        if (!flag) {
            event.preventDefault();
        }
    });
};
//# sourceMappingURL=skripta.js.map