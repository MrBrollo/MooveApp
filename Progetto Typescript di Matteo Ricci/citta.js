"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citta = void 0;
var Citta = /** @class */ (function () {
    function Citta(nome) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log("Il mezzo con ID ".concat(mezzo.id, " \u00E8 stato aggiunto alla citt\u00E0 di ").concat(this.nome));
    };
    return Citta;
}());
exports.Citta = Citta;
