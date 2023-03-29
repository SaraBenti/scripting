"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Persona.prototype.dammiIlNome = function () {
        return this.getNome() + " " + this.getCognome();
    };
    Persona.prototype.getNome = function () {
        return this.nome;
    };
    Persona.prototype.setNome = function (n) {
        this.nome = n;
    };
    Persona.prototype.getCognome = function () {
        return this.cognome;
    };
    Persona.prototype.setCognome = function (n) {
        this.cognome = n;
    };
    return Persona;
}());
exports.Persona = Persona;
var Auto = /** @class */ (function () {
    function Auto(modello) {
        this.modello = modello;
    }
    Auto.prototype.getModello = function () {
        return this.modello;
    };
    return Auto;
}());
