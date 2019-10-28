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
var Poruka = /** @class */ (function () {
    function Poruka($nazivPosiljaoca, $nazivPrimaoca, $sadrzajPoruke) {
        this.nazivPosiljaoca = $nazivPosiljaoca;
        this.nazivPrimaoca = $nazivPrimaoca;
        this.sadrzajPoruke = $sadrzajPoruke;
    }
    Poruka.prototype.stampaj = function () {
        return this.nazivPosiljaoca + ", " + this.nazivPrimaoca + ", " + this.sadrzajPoruke;
    };
    return Poruka;
}());
/// <reference path="poruka.ts" />
var Email = /** @class */ (function (_super) {
    __extends(Email, _super);
    function Email(nazivPosiljaoca, nazivPrimaoca, sadrzajPoruke, $emailPrimaoca, $emailPosiljaoca) {
        var _this = _super.call(this, nazivPosiljaoca, nazivPrimaoca, sadrzajPoruke) || this;
        _this.emailPrimaoca = $emailPrimaoca;
        _this.emailPosiljaoca = $emailPosiljaoca;
        return _this;
    }
    Email.prototype.stampaj = function () {
        return _super.prototype.stampaj.call(this) + ", " + this.emailPosiljaoca + ", " + this.emailPrimaoca;
    };
    return Email;
}(Poruka));
/// <reference path="poruka.ts" />
var SMSPoruka = /** @class */ (function (_super) {
    __extends(SMSPoruka, _super);
    function SMSPoruka(nazivPosiljaoca, nazivPrimaoca, sadrzajPoruke, $brojTelPosijoca, $brojTelPrimaoca) {
        var _this = _super.call(this, nazivPosiljaoca, nazivPrimaoca, sadrzajPoruke) || this;
        _this.brojTelPosijoca = $brojTelPosijoca;
        _this.brojTelPrimaoca = $brojTelPrimaoca;
        return _this;
    }
    SMSPoruka.prototype.stampaj = function () {
        return _super.prototype.stampaj.call(this) + ", " + this.brojTelPosijoca + ", " + this.brojTelPrimaoca;
    };
    return SMSPoruka;
}(Poruka));
/// <reference path="email.ts" />
/// <reference path="SMS_poruka.ts" />
var sms1 = new SMSPoruka("Pera", "Djole", "Pozdrav Djole", "060222333", "0606222333");
var email1 = new Email("Ivan", "Zdravko", "Pozdrav Zdravko!!!", "neki@gmail.com", "drugi@gmail.com");
sms1.stampaj();
email1.stampaj();
console.log(sms1.stampaj());
console.log(email1.stampaj());
//# sourceMappingURL=app.js.map