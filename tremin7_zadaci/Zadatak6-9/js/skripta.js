var studenti = [];
var Predmet = /** @class */ (function () {
    function Predmet(id, naziv, profesor, ocena) {
        this.id = id;
        this.naziv = naziv;
        this.profesor = profesor;
        this.ocena = ocena;
    }
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, fakultet, broj_indexa) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._broj_indexa = broj_indexa;
        this._prosecna_ocena = 0;
        this._polozeni_predmeti = [];
    }
    Object.defineProperty(Student.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fakultet", {
        get: function () {
            return this._fakultet;
        },
        set: function (value) {
            this._fakultet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "broj_indexa", {
        get: function () {
            return this._broj_indexa;
        },
        set: function (value) {
            this._broj_indexa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prosecna_ocena", {
        get: function () {
            return this._prosecna_ocena;
        },
        set: function (value) {
            this._prosecna_ocena = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "polozeni_predmeti", {
        get: function () {
            return this._polozeni_predmeti;
        },
        set: function (value) {
            this._polozeni_predmeti = value;
            this.izracunajProsecnuOcenu();
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.dodajPredmet = function (predmet) {
        this.polozeni_predmeti.push(predmet);
        this.izracunajProsecnuOcenu();
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        var sumaOcena = 0;
        for (var key in this._polozeni_predmeti) {
            sumaOcena += this._polozeni_predmeti[key].ocena;
        }
        this._prosecna_ocena = sumaOcena / this._polozeni_predmeti.length;
    };
    Student.prototype.predstaviSe = function () {
        return "Ja sam " + this._ime + " " + this._prezime + ", student " + this._fakultet + "-a sa prosecnom ocenom " + this._prosecna_ocena;
    };
    Student.prototype.omiljeniProfesori = function () {
        var retVal = [];
        for (var key in this._polozeni_predmeti) {
            if (this._polozeni_predmeti[key].ocena >= 11) {
                retVal.push(this._polozeni_predmeti[key].profesor);
            }
        }
        return retVal;
    };
    return Student;
}());
;
window.onload = function () {
    document.getElementsByTagName("form")[0].addEventListener("submit", function (ev) {
        ev.preventDefault();
        var ime = document.getElementById("ime").value;
        var prezime = this.prezime.value;
        var fakultet = this.fakultet.value;
        var indeks = this.indeks.value;
        var string_predmeta = this.predmeti.value;
        var s = new Student(ime, prezime, fakultet, indeks);
        var predmeti = [];
        var splitovano = string_predmeta.split(';');
        splitovano.forEach(function (element) {
            var podaci = element.split(',');
            var p = new Predmet(Number(podaci[0]), podaci[1], podaci[2], Number(podaci[3]));
            predmeti.push(p);
        });
        s.polozeni_predmeti = predmeti;
        studenti.push(s);
        document.getElementById("tekst").innerHTML = s.predstaviSe();
    });
    document.getElementById('predstavi').addEventListener('click', function () {
        var divElement = document.getElementById('tekst');
        divElement.innerHTML = "";
        studenti.forEach(function (element) {
            divElement.innerHTML += element.predstaviSe() + '<br>';
        });
    });
    document.getElementById('devetke').addEventListener('click', function () {
        var divElement = document.getElementById('tekst');
        divElement.innerHTML = "";
        var devetkasi = devetke(studenti);
        devetkasi.forEach(function (devetkas) {
            divElement.innerHTML += devetkas.predstaviSe() + '<br>';
        });
    });
    document.getElementById('omiljeni').addEventListener('click', function () {
        var divElement = document.getElementById('tekst');
        divElement.innerHTML = "";
        studenti.forEach(function (student) {
            if (student.omiljeniProfesori().length > 0)
                divElement.innerHTML += student.ime + ' ' + student.prezime + ' Ima omiljene profesore: ' + student.omiljeniProfesori().join(', ') + '<br>';
        });
    });
};
function devetke(studenti) {
    var returnNiz = [];
    studenti.forEach(function (student) {
        var counter = 0;
        student.polozeni_predmeti.forEach(function (predmet) {
            if (predmet.ocena == 9)
                counter++;
        });
        if (counter >= 3) {
            returnNiz.push(student);
        }
    });
    return returnNiz;
}
var s1 = new Student("Pera", "Peric", "FTN", "PP-001");
var s1p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 9);
var s1p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s1p3 = new Predmet(3, "Predmet 3", "Predavac Predavacevic", 9);
var s1p4 = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeni_predmeti = [s1p1, s1p2, s1p3, s1p4];
var s2 = new Student("Mika", "Mikic", "FTN", "MM-001");
var s2p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
var s2p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s2p4 = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeni_predmeti = [s2p1, s2p2, s2p4];
var s3 = new Student("Ana", "Anaic", "FTN", "AA-001");
var s3p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
var s3p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 10);
s3.dodajPredmet(s3p1);
s3.dodajPredmet(s3p2);
studenti.push(s1, s2, s3);
console.log(s1.predstaviSe());
console.log(s2.predstaviSe());
console.log(s2.omiljeniProfesori());
//# sourceMappingURL=skripta.js.map