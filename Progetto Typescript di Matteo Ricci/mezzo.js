"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mezzo = void 0;
var Mezzo = /** @class */ (function () {
    function Mezzo(id, tipo) {
        this.id = id;
        this.tipo = tipo;
        this.stato = 'disponibile';
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log("".concat(utente.nome, " ").concat(utente.cognome, " ha prenotato il mezzo con ID ").concat(this.id, "."));
        }
        else {
            console.log("Il mezzo con ID ".concat(this.id, " \u00E8 gi\u00E0 in uso"));
        }
    };
    return Mezzo;
}());
exports.Mezzo = Mezzo;
