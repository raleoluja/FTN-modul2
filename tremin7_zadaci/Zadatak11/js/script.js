var Namestaj = /** @class */ (function () {
    function Namestaj(sifra, naziv, jedinicnaCena, kolicinaUMagacinu) {
        this._sifra = sifra;
        this._naziv = naziv;
        this._jedinicnaCena = jedinicnaCena;
        this._kolicinaUMagacinu = kolicinaUMagacinu;
    }
    Object.defineProperty(Namestaj.prototype, "sifra", {
        get: function () {
            return this._sifra;
        },
        set: function (value) {
            this._sifra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "jedinicnaCena", {
        get: function () {
            return this._jedinicnaCena;
        },
        set: function (value) {
            this._jedinicnaCena = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "kolicinaUMagacinu", {
        get: function () {
            return this._kolicinaUMagacinu;
        },
        set: function (value) {
            this._kolicinaUMagacinu = value;
        },
        enumerable: true,
        configurable: true
    });
    return Namestaj;
}());
var Salon = /** @class */ (function () {
    function Salon(naziv, adresa, telefon) {
        this._naziv = naziv;
        this._adresa = adresa;
        this._telefon = telefon;
        this._namestaji = [];
    }
    Object.defineProperty(Salon.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "telefon", {
        get: function () {
            return this._telefon;
        },
        set: function (value) {
            this._telefon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "namestaji", {
        get: function () {
            return this._namestaji;
        },
        set: function (value) {
            this._namestaji = value;
        },
        enumerable: true,
        configurable: true
    });
    Salon.prototype.ispisiNamestajNaStanju = function () {
        this.namestaji.forEach(function (komad, index) {
            if (komad.kolicinaUMagacinu > 0) {
                console.log(index + 1 + ". sifra: " + komad.sifra + " naziv proizvoda: " + komad.naziv + " komada: " + komad.kolicinaUMagacinu + " cene: " + komad.jedinicnaCena);
            }
        });
        console.log(" ");
    };
    Salon.prototype.dodajNaLager = function (sifra, kolicina) {
        this.namestaji.forEach(function (komad) {
            if (komad.sifra == sifra) {
                komad.kolicinaUMagacinu += kolicina;
            }
        });
    };
    Salon.prototype.dodajNamestaj = function (namestaj) {
        for (var _i = 0, _a = this.namestaji; _i < _a.length; _i++) {
            var komad = _a[_i];
            if (komad.sifra == namestaj.sifra) {
                console.log("Greska!!! Vec postoji namestaj sa tom siform!");
                return;
            }
        }
        ;
        this._namestaji.push(namestaj);
    };
    Salon.prototype.prodajKomad = function (sifra, kolicina) {
        for (var _i = 0, _a = this.namestaji; _i < _a.length; _i++) {
            var komad = _a[_i];
            if (komad.sifra == sifra) {
                if (komad.kolicinaUMagacinu < kolicina) {
                    console.log("Kupovina nije uspesna! Na stanju nema dovoljno zeljenog proizvoda!");
                    return;
                }
                else {
                    console.log("Uspesno ste kupili " + kolicina + " namestaja " + komad.sifra + " Komoda za " + komad.jedinicnaCena * kolicina + " !");
                    komad.kolicinaUMagacinu -= kolicina;
                    return;
                }
            }
            else
                console.log("Zelejni komad namestaja trenutno nije na stanju.");
        }
        ;
        console.log("Ne postoji namestaj sa tom sifrom!");
    };
    return Salon;
}());
var n1 = new Namestaj(111, "Ester Komoda", 50386.50, 15);
var n2 = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
var n3 = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
var n4 = new Namestaj(144, "Kloe Klub Sto", 20241, 2);
var s = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaji = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();
s.dodajNaLager(3, 144);
s.ispisiNamestajNaStanju();
var n5 = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);
n5.sifra = 5;
s.dodajNamestaj(n5);
s.prodajKomad(111, 20);
s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();
//# sourceMappingURL=script.js.map