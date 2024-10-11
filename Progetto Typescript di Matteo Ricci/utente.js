"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utente = void 0;
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log("Il mezzo con ID ".concat(mezzo.id, " non \u00E8 attualmente disponibile."));
        }
    };
    return Utente;
}());
exports.Utente = Utente;
