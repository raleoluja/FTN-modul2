var k;
var vinoteke = [];
var aktivnaVinoteka = null;
function promeniAktivnu(selekt) {
    aktivnaVinoteka = vinoteke.filter(function (elem) { return elem.id == Number(selekt.value); })[0];
    refreshIspis();
}
var Vino = /** @class */ (function () {
    function Vino(naziv, cena, varijanta) {
        this.naziv = naziv;
        this.cena = cena;
        this.varijanta = varijanta;
    }
    return Vino;
}());
var Vinoteka = /** @class */ (function () {
    function Vinoteka(id, naziv) {
        this._id = id;
        this._naziv = naziv;
        this._vina = [];
    }
    Object.defineProperty(Vinoteka.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vinoteka.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vinoteka.prototype, "vina", {
        get: function () {
            return this._vina;
        },
        enumerable: true,
        configurable: true
    });
    Vinoteka.prototype.dodajVino = function (vino) {
        this._vina.push(vino);
    };
    Vinoteka.prototype.getNajskuplje = function () {
        return this._vina.reduce(function (pr, nex) {
            if (pr.cena > nex.cena) {
                return pr;
            }
            else {
                return nex;
            }
        });
    };
    Vinoteka.prototype.getNajjeftinije = function () {
        return this._vina.reduce(function (pr, next) {
            if (pr.cena < next.cena)
                return pr;
            else
                return next;
        });
    };
    Vinoteka.prototype.najzastupljenijaVarijanta = function () {
        var varijanteDiv = document.getElementById('varijante');
        var crno = this._vina.filter(function (el) { return el.varijanta == 'Crno'; });
        var belo = this._vina.filter(function (el) { return el.varijanta == 'Belo'; });
        var rose = this._vina.filter(function (el) { return el.varijanta == 'Rose'; });
        var najzastupljenije = [];
        if (crno.length >= belo.length && crno.length >= rose.length) {
            najzastupljenije = crno;
        }
        else if (belo.length >= rose.length) {
            najzastupljenije = belo;
        }
        else {
            najzastupljenije = rose;
        }
        if (najzastupljenije.length == 0) {
            varijanteDiv.innerHTML = "<h3>Vinoteka " + aktivnaVinoteka.naziv + " jos uvek nema vina za prodaju!!<h3>";
        }
        else {
            varijanteDiv.innerHTML = "<h3>Najzastupljenija varijanta za vinoteku " + aktivnaVinoteka.naziv + " je: <br/> " + najzastupljenije[0].varijanta + " sa ukupno kupljenih " + najzastupljenije.length + " vina.</h3>";
        }
    };
    Vinoteka.prototype.najskupljaVarijanta = function () {
        var varijanteDiv = document.getElementById('varijante');
        var crno = this._vina.filter(function (el) { return el.varijanta == 'Crno'; });
        var belo = this._vina.filter(function (el) { return el.varijanta == 'Belo'; });
        var rose = this._vina.filter(function (el) { return el.varijanta == 'Rose'; });
        var najskuplje = [];
        if (crno.reduce(function (pr, el) { return pr + el.cena; }, 0) >= belo.reduce(function (pr, el) { return pr + el.cena; }, 0) && crno.reduce(function (pr, el) { return pr + el.cena; }, 0) >= rose.reduce(function (pr, el) { return pr + el.cena; }, 0)) {
            najskuplje = crno;
        }
        else if (belo.reduce(function (pr, el) { return pr + el.cena; }, 0) >= rose.reduce(function (pr, el) { return pr + el.cena; }, 0)) {
            najskuplje = belo;
        }
        else {
            najskuplje = rose;
        }
        var prosecnaCena = najskuplje.reduce(function (pr, el, i, arr) { return pr + el.cena / arr.length; }, 0);
        if (najskuplje.length == 0) {
            varijanteDiv.innerHTML = "<h3>Vinoteka " + aktivnaVinoteka.naziv + " jos uvek nema vina za prodaju!!<h3>";
        }
        else {
            varijanteDiv.innerHTML = "<h3>Najskuplja varijanta u vinoteci " + aktivnaVinoteka.naziv + " je: <br/> " + najskuplje[0].varijanta + " sa prosecnom cenom po vinu: " + prosecnaCena + ".</h3>;";
        }
    };
    return Vinoteka;
}());
//TODO Implementirati metodu za ispis podataka na sledeci nacin:
/*
    U div#vina upisati ul listu sa sledecim formatom:
    <ul class="list-group">
        <li class="list-group-item">
            nazivVina (varijantaVina)
            <span class="badge">cenaVina</span>
        </li>
        <li class="list-group-item">
            ...
        </li>
        ...
    </ul>
    //Ponoviti li sa svako vino u nizu vina aktivne vinoteke
*/
function refreshIspis() {
    var divVina = document.getElementById('vina');
    var output = "<ul class=\"list-group\">";
    for (var i = 0; i < aktivnaVinoteka.vina.length; i++) {
        var klasa = '';
        if (aktivnaVinoteka.vina.length > 0 && aktivnaVinoteka.vina[i].naziv == aktivnaVinoteka.getNajskuplje().naziv) {
            klasa = 'list-group-item-danger';
        }
        if (aktivnaVinoteka.vina.length > 0 && aktivnaVinoteka.vina[i].naziv == aktivnaVinoteka.getNajjeftinije().naziv) {
            klasa = 'list-group-item-success';
        }
        output += "<li class=\"list-group-item " + klasa + "\"> " + aktivnaVinoteka.vina[i].naziv + " (" + aktivnaVinoteka.vina[i].varijanta + ") <span class=\"badge\">" + aktivnaVinoteka.vina[i].cena + "</span></li>";
    }
    output += "</ul>";
    divVina.innerHTML = output;
}
function wireEvents() {
    var buttonDodaj = document.getElementById('dodajVino');
    var btnNajzastupljenija = document.getElementById('najzastupljenijaVarijanta');
    var btnNajskuplja = document.getElementById('najskupljaVarijanta');
    buttonDodaj.addEventListener('click', function () {
        var naziv = document.getElementById('naziv');
        var varijanta = document.getElementById('varijanta');
        var cena = document.getElementById('cena');
        var v = new Vino(naziv.value, Number(cena.value), varijanta.value);
        aktivnaVinoteka.dodajVino(v);
        refreshIspis();
    });
    btnNajzastupljenija.addEventListener('click', function () {
        aktivnaVinoteka.najzastupljenijaVarijanta();
    });
    btnNajskuplja.addEventListener('click', function () {
        aktivnaVinoteka.najskupljaVarijanta();
    });
}
window.onload = function () {
    k.forEach(function (elem) {
        var s = new Vinoteka(Number(elem.id), elem.naziv);
        elem.vina.forEach(function (elem) {
            var p = new Vino(elem.naziv, Number(elem.cena), elem.varijanta);
            s.dodajVino(p);
        });
        vinoteke.push(s);
        if (aktivnaVinoteka == null) {
            aktivnaVinoteka = s;
        }
    });
    var selekt = document.getElementById("vinoteka");
    var output = "";
    for (var i = 0; i < vinoteke.length; i++) {
        var optionElem = "<option value=" + vinoteke[i].id + ">" + vinoteke[i].naziv + "</option>";
        output += optionElem;
    }
    selekt.innerHTML = output;
    refreshIspis();
    wireEvents();
};
//# sourceMappingURL=proba.js.map