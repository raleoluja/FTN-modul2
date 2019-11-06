var studenti = [];
var aktivanStudent = null;
function promeniAktivnog(selekt) {
    var jmbg = Number(selekt.value);
    aktivanStudent = studenti.filter(function (el) { return el.jmbg == jmbg; })[0];
    aktivanStudent.refreshPredmeti();
}
var Predmet = /** @class */ (function () {
    function Predmet(naziv, ocena) {
        this._naziv = naziv;
        this._ocena = ocena;
    }
    Object.defineProperty(Predmet.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ocena", {
        get: function () {
            return this._ocena;
        },
        set: function (value) {
            this._ocena = value;
        },
        enumerable: true,
        configurable: true
    });
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
        this._predmeti = [];
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
    Object.defineProperty(Student.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "predmeti", {
        get: function () {
            return this._predmeti;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.dodajPredmet = function (predmet) {
        this._predmeti.push(predmet);
        this.refreshPredmeti();
    };
    Student.prototype.refreshPredmeti = function () {
        var predDiv = document.getElementById('predmeti');
        // varijanta sa tabelom
        // predDiv.innerHTML = "<ul class='list-group'>";
        // for(let i = 0; i < this._predmeti.length; i++){
        //     let li_naziv = "<li class='list-group-item'>Predmet: " + this._predmeti[i].naziv + "</li>";
        //     let li_ocena = "<li class='list-group-item'>Ocena: " + this._predmeti[i].ocena + "</li>";
        //     predDiv.innerHTML += li_naziv;
        //     predDiv.innerHTML += li_ocena;
        // }
        // predDiv.innerHTML += "</ul><br/>";       
        var outStr = '';
        for (var index = 0; index < this._predmeti.length; index++) {
            outStr += 'Predmet: ' + this._predmeti[index].naziv + '<br>' + 'Ocena: ' + this._predmeti[index].ocena + '<br>';
        }
        predDiv.innerHTML = outStr;
    };
    Student.prototype.getProsek = function () {
        var prosOcen = this._predmeti.reduce(function (pr, el, index, arr) {
            return pr + (el.ocena / arr.length);
        }, 0);
        return prosOcen;
    };
    return Student;
}());
function wireEvents() {
    var btnDodaj = document.getElementById('dodajPredmet');
    var btnProsecnaOcena = document.getElementById('izracunajProsecnuOcenu');
    btnDodaj.addEventListener('click', function () {
        var naziv = document.getElementById('naziv').value;
        var ocena = Number(document.getElementById('ocena').value);
        var predmet = new Predmet(naziv, ocena);
        aktivanStudent.dodajPredmet(predmet);
    });
    btnProsecnaOcena.addEventListener('click', function () {
        var prosecnaOcenaDiv = document.getElementById('prosecnaOcena');
        prosecnaOcenaDiv.innerHTML = 'Prosecna ocena za studenta: ' + aktivanStudent.ime + ' ' + aktivanStudent.prezime + ' je ' + aktivanStudent.getProsek();
    });
}
//OVAJ KOD OSTAVITI NA DNU FAJLA
window.onload = function () {
    initStudenti.forEach(function (elem) {
        var s = new Student(elem.ime, elem.prezime, Number(elem.jmbg));
        elem.predmeti.forEach(function (elem) {
            var p = new Predmet(elem.naziv, elem.ocena);
            s.dodajPredmet(p);
        });
        studenti.push(s);
        if (aktivanStudent == null) {
            aktivanStudent = s;
        }
    });
    if (QueryString["ime"] != null) {
        var student = new Student(QueryString["ime"], QueryString["prezime"], Number(QueryString["jmbg"]));
        studenti.push(student);
    }
    var selekt = document.getElementById("student");
    var output = "";
    for (var i = 0; i < studenti.length; i++) {
        var optionElem = "<option value=" + studenti[i].jmbg + ">" + studenti[i].ime + " " + studenti[i].prezime + "</option>";
        output += optionElem;
    }
    selekt.innerHTML = output;
    aktivanStudent.refreshPredmeti();
    wireEvents();
};
var initStudenti = [
    {
        ime: "Pera",
        prezime: "Peric",
        jmbg: "1123456789000",
        predmeti: [
            {
                naziv: "Predmet1",
                ocena: 10
            },
            {
                naziv: "Predmet2",
                ocena: 8
            },
            {
                naziv: "Predmet3",
                ocena: 9
            },
            {
                naziv: "Predmet4",
                ocena: 9
            }
        ]
    },
    {
        ime: "Mika",
        prezime: "Mikic",
        jmbg: "1123456789001",
        predmeti: [
            {
                naziv: "Predmet1",
                ocena: 7
            },
            {
                naziv: "Predmet2",
                ocena: 10
            },
            {
                naziv: "Predmet3",
                ocena: 8
            }
        ]
    }
];
var QueryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        }
        else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        }
        else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();
//# sourceMappingURL=proba.js.map