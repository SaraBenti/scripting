"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tipo03_classe_punto_1 = require("./tipo03_classe_punto");
var tipo03_classe_cerchio_1 = require("./tipo03_classe_cerchio");
var tipo03_classe_rettangolo_1 = require("./tipo03_classe_rettangolo");
var MPunto = /** @class */ (function (_super) {
    __extends(MPunto, _super);
    function MPunto(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    MPunto.prototype.moveTo = function (x1, y2) {
        this.x = x1;
        this.y = y2;
        var a = [];
        a.push(this.x, this.y);
        console.log(a);
    };
    MPunto.prototype.scaleBy = function (factor) {
        this.x = this.x * factor;
        this.y = this.y * factor;
        var a = [];
        a.push(this.x, this.y);
        console.log(a);
    };
    return MPunto;
}(tipo03_classe_punto_1.Punto));
var MCerchio = /** @class */ (function (_super) {
    __extends(MCerchio, _super);
    function MCerchio(centro, raggio) {
        var _this = _super.call(this, centro, raggio) || this;
        _this.centro = centro;
        _this.raggio = raggio;
        return _this;
    }
    MCerchio.prototype.moveTo = function (x1, y2) {
        this.centro.x = x1;
        this.centro.y = y2;
        var a = [];
        a.push(this.centro.x, this.centro.y);
        console.log(a);
    };
    MCerchio.prototype.scaleBy = function (factor) {
        this.centro.x *= factor;
        this.centro.y *= factor;
        var a = [];
        a.push(this.centro.x, this.centro.y);
        console.log(a);
    };
    return MCerchio;
}(tipo03_classe_cerchio_1.Cerchio));
var MRettangolo = /** @class */ (function (_super) {
    __extends(MRettangolo, _super);
    function MRettangolo(base, altezza) {
        var _this = _super.call(this, base, altezza) || this;
        _this.base = base;
        _this.altezza = altezza;
        return _this;
    }
    MRettangolo.prototype.moveTo = function (x1, y2) {
        this.base += x1;
        this.altezza += y2;
        var a = [];
        a.push(this.base, this.altezza);
        console.log(a);
    };
    MRettangolo.prototype.scaleBy = function (factor) {
        this.base *= factor;
        this.altezza *= factor;
        var a = [];
        a.push(this.base, this.altezza);
        console.log(a);
    };
    return MRettangolo;
}(tipo03_classe_rettangolo_1.Rettangolo));
var c = new MCerchio(new tipo03_classe_punto_1.Punto(6, 7), 3);
var c1 = c.moveTo(5, 6);
var c2 = c.scaleBy(3);
var p = new MPunto(2, 3);
var p1 = p.moveTo(5, 6);
var p2 = p.scaleBy(3);
var r = new MRettangolo(2, 3);
var r1 = r.moveTo(5, 6);
var r2 = r.scaleBy(3);
