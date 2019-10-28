var roboti = [];
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Object.defineProperty(Robot.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Robot.prototype.pozdrav = function () {
        console.log("Zdravo ja sam robot: " + this._ime + '\n');
    };
    Robot.prototype.reset = function () {
        this._ime = "";
    };
    return Robot;
}());
function napraviIme() {
    var duplikat = false;
    var ime = "";
    do {
        var slova = '';
        var brojevi = '';
        for (var index = 0; index < 2; index++) {
            var r = Math.round(Math.random() * 25 + 65);
            slova += String.fromCharCode(r);
        }
        for (var index = 0; index < 3; index++) {
            var r = Math.round(Math.random() * 9);
            brojevi += r;
        }
        ime = slova.concat(brojevi);
        roboti.forEach(function (robot) {
            if (robot.ime == ime) {
                duplikat = true;
            }
        });
    } while (duplikat);
    return ime;
}
for (var index = 0; index < 100; index++) {
    var r1 = new Robot();
    r1.ime = napraviIme();
    roboti.push(r1);
    r1.pozdrav();
}
//# sourceMappingURL=script.js.map