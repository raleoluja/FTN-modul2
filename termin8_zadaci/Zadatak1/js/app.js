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
var Kamera = /** @class */ (function () {
    function Kamera($megaPikseli, $freeSpace, $photoCounter) {
        this.megaPikseli = $megaPikseli;
        this.freeSpace = $freeSpace;
        this.photoCounter = $photoCounter;
    }
    Object.defineProperty(Kamera.prototype, "$megaPikseli", {
        get: function () {
            return this.megaPikseli;
        },
        set: function (value) {
            this.megaPikseli = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kamera.prototype, "$freeSpace", {
        get: function () {
            return this.freeSpace;
        },
        set: function (value) {
            this.freeSpace = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kamera.prototype, "$photoCounter", {
        get: function () {
            return this.photoCounter;
        },
        set: function (value) {
            this.photoCounter = value;
        },
        enumerable: true,
        configurable: true
    });
    Kamera.prototype.slikaj = function () {
        if (this.freeSpace > this.megaPikseli) {
            this.freeSpace -= this.megaPikseli;
            this.photoCounter++;
            return true;
        }
        return false;
    };
    return Kamera;
}());
/// <reference path="Kamera.ts" />
var VideoKamera = /** @class */ (function (_super) {
    __extends(VideoKamera, _super);
    function VideoKamera($videoCounter, megaPikseli, freeSpace, photoCounter) {
        var _this = _super.call(this, megaPikseli, freeSpace, photoCounter) || this;
        _this.videoCounter = $videoCounter;
        return _this;
    }
    Object.defineProperty(VideoKamera.prototype, "$videoCounter", {
        get: function () {
            return this.videoCounter;
        },
        set: function (value) {
            this.videoCounter = value;
        },
        enumerable: true,
        configurable: true
    });
    VideoKamera.prototype.snimaj = function (secunde) {
        if (this.freeSpace >= (this.megaPikseli * secunde)) {
            this.freeSpace -= (this.megaPikseli * secunde);
            this.videoCounter++;
            return true;
        }
        return false;
    };
    return VideoKamera;
}(Kamera));
/// <reference path="VideoKamera.ts" />
var kamera1 = new Kamera(800, 2000, 0);
var videoKam1 = new VideoKamera(0, 800, 10000, 0);
videoKam1.snimaj(2);
console.log("Memorija VK: " + videoKam1.$freeSpace);
console.log("Broj videa: " + videoKam1.$videoCounter);
videoKam1.slikaj();
videoKam1.snimaj(3);
console.log("Memorija VK: " + videoKam1.$freeSpace);
console.log("Broj fotografija: " + videoKam1.$photoCounter);
console.log("Broj videa: " + videoKam1.$videoCounter);
console.log(" ");
console.log("Memorija K: " + kamera1.$freeSpace);
console.log("Broj fotografija: " + kamera1.$photoCounter);
kamera1.slikaj();
kamera1.slikaj();
kamera1.slikaj();
console.log("Memorija: " + kamera1.$freeSpace);
console.log("Broj fotografija: " + kamera1.$photoCounter);
//# sourceMappingURL=app.js.map