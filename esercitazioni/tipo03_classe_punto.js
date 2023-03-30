"use strict";
/**
 *
## classi-01.ts

Definisci una classe denominata `Punto` per
 rappresentare un punto in uno spazio bidimensionale.
  La classe deve contenere le seguenti proprietà: x
   (numero), y (numero). La classe deve contenere un
    metodo per calcolare la distanza tra il punto e
    l'origine (0, 0). La classe deve contenere un metodo
    per calcolare la distanza tra il punto e un altro
    punto passato come parametro. Crea un'istanza della
    classe e stampa la distanza tra il punto e l'origine
    e la distanza tra il punto e un altro punto.
 */
//class Punto{
// x: number;
// y: number;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punto = void 0;
// constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
// }
//oppure più breve
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.distanzaDalPunto = function (p) {
        var dx = this.x - p.x;
        var dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Punto.prototype.distanzaDallOrigine = function () {
        return this.distanzaDalPunto(new Punto(0, 0));
    };
    return Punto;
}());
exports.Punto = Punto;
var p1 = new Punto(1, 1);
var p2 = new Punto(2, 3);
console.log("distanza p1 dall'origine: ", p1.distanzaDallOrigine());
console.log("distanza p1 dal punto p2: ", p1.distanzaDalPunto(p2));
