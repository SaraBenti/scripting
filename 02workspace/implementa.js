"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StampanteEtichette = void 0;
var StampanteEtichette = /** @class */ (function () {
    function StampanteEtichette(obj) {
        this.obj = obj;
        this.stampaEtichetta(obj);
    }
    StampanteEtichette.prototype.stampaEtichetta = function (o) {
        var n = o.dammiIlNome;
        console.log("etichetta con nome " + n);
    };
    return StampanteEtichette;
}());
exports.StampanteEtichette = StampanteEtichette;
///////////////////////
