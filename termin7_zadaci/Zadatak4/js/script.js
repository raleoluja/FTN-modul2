var Pas = /** @class */ (function () {
    function Pas(ime, starost, rasa, vakcinisan) {
        this._ime = ime;
        this._starost = starost;
        this._rasa = rasa;
        this._vakcinisan = vakcinisan;
    }
    Object.defineProperty(Pas.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "starost", {
        get: function () {
            return this._starost;
        },
        set: function (value) {
            this._starost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "rasa", {
        get: function () {
            return this._rasa;
        },
        set: function (value) {
            this._rasa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "vakcinisan", {
        get: function () {
            return this._vakcinisan;
        },
        set: function (value) {
            this._vakcinisan = value;
        },
        enumerable: true,
        configurable: true
    });
    Pas.prototype.vaksinisiPsa = function () {
        this._vakcinisan = true;
    };
    Pas.prototype.starostULjudskimGodinama = function () {
        return this._starost * 7;
    };
    Pas.prototype.ispisPodatakaPas = function () {
        console.log("Ime psa: " + this._ime + ", starost: " + this._starost + ", rasa: " + this._rasa + ", vakcinisanost: " + ((this._vakcinisan) ? 'DA' : 'NE'));
    };
    return Pas;
}());
var Kennel = /** @class */ (function () {
    function Kennel(n, a) {
        this._naziv = n;
        this._adresa = a;
        this._psi = [];
    }
    Object.defineProperty(Kennel.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "psi", {
        get: function () {
            return this._psi;
        },
        set: function (value) {
            this._psi = value;
        },
        enumerable: true,
        configurable: true
    });
    Kennel.prototype.dodajPsa = function (valu) {
        this._psi.push(valu);
    };
    Kennel.prototype.pronadjiNajstarijeg = function () {
        if (this._psi.length > 0) {
            var najstariji = this._psi[0];
            for (var i = 1; i < this._psi.length; i++) {
                if (najstariji.starost < this._psi[i].starost) {
                    najstariji = this._psi[i];
                }
            }
            return najstariji;
        }
        return null;
    };
    Kennel.prototype.pronadjiNajmladjeg = function () {
        if (this._psi.length > 0) {
            var najmladji = this._psi[0];
            for (var i = 1; i < this._psi.length; i++) {
                if (najmladji.starost > this._psi[i].starost) {
                    najmladji = this._psi[i];
                }
            }
            return najmladji;
        }
        return null;
    };
    Kennel.prototype.ispisiVakcinisane = function () {
        var vakcinisani = [];
        for (var i in this._psi) {
            if (this._psi[i].vakcinisan) {
                vakcinisani.push(this._psi[i].ime);
            }
        }
        console.log("Vakcinisani su: " + vakcinisani);
    };
    return Kennel;
}());
var p1 = new Pas("Vucko", 1, "Sarplaninac", true);
var p2 = new Pas("Lajka", 3, "Mongrel-Husky-Terrier", false);
var p3 = new Pas("Rex", 4, "terijer", true);
var p4 = new Pas("Lesi", 5, "Skotski ovcar", true);
var p5 = new Pas("Beethoven", 2, "Bernardinac", false);
var p6 = new Pas("Snoopy", 68, "Dodž", false);
var p7 = new Pas("Scooby Doo", 48, "Nemacka doga", true);
p1.ispisPodatakaPas();
console.log("Starost psa u ljudskim godinama: " + p1.starostULjudskimGodinama());
var k = new Kennel("Kennel", "Adressa Kennela");
k.psi = [p1, p2, p3, p4, p5, p6, p7];
console.log("----------------------------------------------------------");
var pns = k.pronadjiNajstarijeg();
console.log("Najstariji: " + pns.ime + " (" + pns.starost + ")");
console.log("----------------------------------------------------------");
var pnm = k.pronadjiNajmladjeg();
console.log("Najmladji: " + pnm.ime + " (" + pnm.starost + ")");
console.log("----------------------------------------------------------");
k.ispisiVakcinisane();
p2.vaksinisiPsa();
console.log("Vakcinisani nakon vakcinacije: " + p2.ime);
k.ispisiVakcinisane();
//# sourceMappingURL=script.js.map