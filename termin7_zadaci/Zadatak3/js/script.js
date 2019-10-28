var Krug = /** @class */ (function () {
    function Krug(r) {
        if (r === void 0) { r = 3; }
        this._r = r;
    }
    ;
    Object.defineProperty(Krug.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (value) {
            this._r = value;
        },
        enumerable: true,
        configurable: true
    });
    Krug.prototype.getO = function () {
        return 2 * this._r * Math.PI;
    };
    ;
    Krug.prototype.getP = function () {
        return this._r * this._r * Math.PI;
    };
    return Krug;
}());
var Pravougaonik = /** @class */ (function () {
    function Pravougaonik(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Pravougaonik.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pravougaonik.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: true,
        configurable: true
    });
    Pravougaonik.prototype.getO = function () {
        return 2 * this._a + 2 * this._b;
    };
    Pravougaonik.prototype.getP = function () {
        return this._a * this._b;
    };
    return Pravougaonik;
}());
var Valjak = /** @class */ (function () {
    function Valjak(r, h) {
        this._krug = new Krug(r);
        this._pravougaonik = new Pravougaonik(2 * r, h);
    }
    Object.defineProperty(Valjak.prototype, "r", {
        get: function () {
            return this._krug.r;
        },
        set: function (value) {
            this._krug.r = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Valjak.prototype, "h", {
        get: function () {
            return this._pravougaonik.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Valjak.prototype, "pravougaonik", {
        set: function (value) {
            this._pravougaonik.b = value;
        },
        enumerable: true,
        configurable: true
    });
    Valjak.prototype.getP = function () {
        return 2 * this.r * this.r * Math.PI + 2 * this.r * Math.PI * this.h;
    };
    Valjak.prototype.getV = function () {
        return this.r * this.r * this.h * Math.PI;
    };
    return Valjak;
}());
//test
//krug
var k2 = new Krug(9);
console.log(k2.r);
console.log(k2.getO());
console.log(k2.getP());
//pravougaonik
var p = new Pravougaonik(3, 5);
console.log(p.a, p.b);
console.log(p.getO());
console.log(p.getP());
//valjak
var v = new Valjak(4, 6);
console.log(v.r, v.h);
console.log(v.getP());
console.log(v.getV());
//# sourceMappingURL=script.js.map