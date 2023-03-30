"use strict";
/**
         * ## classi-02.ts

Definisci una classe denominata `Cerchio` per rappresentare
 un cerchio in uno spazio bidimensionale. La classe deve contenere le
  seguenti proprietà: centro (istanza della classe `Punto`), raggio (numero).
   La classe deve contenere un metodo per calcolare l'area del cerchio.
   La classe deve contenere un metodo per calcolare la lunghezza del cerchio.
   Crea un'istanza della classe e stampa l'area e la lunghezza del cerchio.
         */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cerchio = void 0;
var tipo03_classe_punto_1 = require("./tipo03_classe_punto");
var Cerchio = /** @class */ (function () {
    function Cerchio(centro, raggio) {
        this.centro = centro;
        this.raggio = raggio;
    }
    Cerchio.prototype.getArea = function () {
        return Math.pow(this.raggio, 2) * Math.PI;
    };
    Cerchio.prototype.getPerimetro = function () {
        return 2 * this.raggio * Math.PI;
    };
    return Cerchio;
}());
exports.Cerchio = Cerchio;
var c1 = new Cerchio(new tipo03_classe_punto_1.Punto(1, 1), 3);
console.log("area del cerchio: ", c1.getArea());
console.log("perimetro del cerchio: ", c1.getPerimetro());
// non si mette il console log dentro a file con 
//le classi, solitamente si fanno file a parte
