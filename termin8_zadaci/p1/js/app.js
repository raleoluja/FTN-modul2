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
var Smestaj = /** @class */ (function () {
    function Smestaj($naziv, $adresa, $grad) {
        this.naziv = $naziv;
        this.adresa = $adresa;
        this.grad = $grad;
    }
    Object.defineProperty(Smestaj.prototype, "$naziv", {
        get: function () {
            return this.naziv;
        },
        set: function (value) {
            this.naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Smestaj.prototype, "$adresa", {
        get: function () {
            return this.adresa;
        },
        set: function (value) {
            this.adresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Smestaj.prototype, "$grad", {
        get: function () {
            return this.grad;
        },
        set: function (value) {
            this.grad = value;
        },
        enumerable: true,
        configurable: true
    });
    Smestaj.prototype.stampaj = function () {
        return this.$naziv + ", " + this.$adresa + ", " + this.$grad + " ";
    };
    return Smestaj;
}());
/// <reference path="smestaj.ts" />
var Hotel = /** @class */ (function (_super) {
    __extends(Hotel, _super);
    function Hotel(naziv, adresa, grad, $brojZvezdica) {
        var _this = _super.call(this, naziv, adresa, grad) || this;
        _this.brojZvezdica = $brojZvezdica;
        return _this;
    }
    Object.defineProperty(Hotel.prototype, "$brojZvezdica", {
        get: function () {
            return this.brojZvezdica;
        },
        set: function (value) {
            this.brojZvezdica = value;
        },
        enumerable: true,
        configurable: true
    });
    Hotel.prototype.stampaj = function () {
        return _super.prototype.stampaj.call(this) + ", hotel sa " + this.$brojZvezdica + " zvezdice<br><br>";
    };
    Hotel.prototype.prestaviSe = function () {
        document.write('<div> Hotel se nalazi u oblasti Al Barsha, na 25 minuta od aerodroma u Dubaiju i 1.5 km od Mall of Emirates, Sharaf DG Metro stanica je udaljena svega 300 metara od hotela. Ibn Batuta Mall i Dubai Marina su takodje u neposrednoj blizini. Odise modernom dekoracijom unutrasnjosti enterijera, gostima hotela su na raspolaganju teretana, otvoreni bazen i 5 restorana internacionalne kuhinje, besplatan WiFi u lobiju hotela, barovi gde gosti mogu da uzivaju u osvezavajucim napicima, hotel nudi poslovni centar zajedno sa salama za sastanke i poslovnih objekata, SPA centar. Sve sobe su klimatizovane i poseduju SAT TV, mini bar, fen za kosu, kupatilo, sef ( uz doplatu). Usluga je na bazi nocenje sa doruckom. </div>');
    };
    return Hotel;
}(Smestaj));
/// <reference path="hotel.ts" />
var hotel1 = new Hotel("Signature Hotel", "Al Barsha 1", "Dubai", 4);
document.write(hotel1.stampaj());
hotel1.prestaviSe();
//# sourceMappingURL=app.js.map