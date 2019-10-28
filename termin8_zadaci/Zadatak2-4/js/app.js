var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Radnik = /** @class */ (function () {
    function Radnik($ime, $prezime, $starost, $osnovicaPlate) {
        this.ime = $ime;
        this.prezime = $prezime;
        this.starost = $starost;
        this.osnovicaPlate = $osnovicaPlate;
    }
    Object.defineProperty(Radnik.prototype, "$ime", {
        get: function () {
            return this.ime;
        },
        set: function (value) {
            this.ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "$prezime", {
        get: function () {
            return this.prezime;
        },
        set: function (value) {
            this.prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "$starost", {
        get: function () {
            return this.starost;
        },
        set: function (value) {
            this.starost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "$osnovicaPlate", {
        get: function () {
            return this.osnovicaPlate;
        },
        set: function (value) {
            this.osnovicaPlate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "plata", {
        get: function () {
            return this.osnovicaPlate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "godinaRodjenja", {
        get: function () {
            var d = new Date();
            var godina = d.getFullYear();
            return godina - this.$starost;
        },
        enumerable: true,
        configurable: true
    });
    return Radnik;
}());
var radnici = [];
function srednjaVrednosGodinaRadnika() {
    var starost = 0;
    radnici.forEach(function (radnik) {
        starost += radnik.$starost;
    });
    return starost / radnici.length;
}
/// <reference path="Radnik.ts" />
var Tehnicar = /** @class */ (function (_super) {
    __extends(Tehnicar, _super);
    function Tehnicar(ime, prezime, starost, osnovicaPlate) {
        return _super.call(this, ime, prezime, starost, osnovicaPlate) || this;
    }
    Object.defineProperty(Tehnicar.prototype, "plata", {
        get: function () {
            return this.osnovicaPlate;
        },
        enumerable: true,
        configurable: true
    });
    return Tehnicar;
}(Radnik));
/// <reference path="Tehnicar.ts" />
var Inzenjer = /** @class */ (function (_super) {
    __extends(Inzenjer, _super);
    function Inzenjer(ime, prezime, starost, osnovicaPlate) {
        return _super.call(this, ime, prezime, starost, osnovicaPlate) || this;
    }
    Object.defineProperty(Inzenjer.prototype, "plata", {
        get: function () {
            return (this.osnovicaPlate * 0.12) + this.osnovicaPlate;
        },
        enumerable: true,
        configurable: true
    });
    return Inzenjer;
}(Radnik));
/// <reference path="Inzenjer.ts" />
var Doktor = /** @class */ (function (_super) {
    __extends(Doktor, _super);
    function Doktor(ime, prezime, starost, osnovicaPlate) {
        return _super.call(this, ime, prezime, starost, osnovicaPlate) || this;
    }
    Object.defineProperty(Doktor.prototype, "plata", {
        get: function () {
            return (this.osnovicaPlate * 0.13) + this.osnovicaPlate;
        },
        enumerable: true,
        configurable: true
    });
    return Doktor;
}(Radnik));
/// <reference path="Doktor.ts" />
var tehnicar1 = new Tehnicar("Pera", "Peric", 23, 800);
var inzenjer1 = new Inzenjer("Ivan", "Ivanovic", 44, 800);
var doktor1 = new Doktor("Zvonko", "Bogan", 55, 800);
console.log("Plata tehnicara je: " + tehnicar1.plata);
console.log("Plata inzenjera je: " + inzenjer1.plata);
console.log("Plata doktora je: " + doktor1.plata);
radnici = [tehnicar1, inzenjer1, doktor1];
console.log(radnici);
console.log("Prosecna starost radnika je: " + srednjaVrednosGodinaRadnika());
console.log("Godina rodjenja, radnika " + tehnicar1.$ime + ": " + tehnicar1.godinaRodjenja);
//# sourceMappingURL=app.js.map