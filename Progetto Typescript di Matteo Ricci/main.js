"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mezzo_1 = require("./mezzo");
var utente_1 = require("./utente");
var citta_1 = require("./citta");
var mezzo1 = new mezzo_1.Mezzo('001', 'bici');
var mezzo2 = new mezzo_1.Mezzo('002', 'scooter');
var mezzo3 = new mezzo_1.Mezzo('003', 'monopattino');
var utente1 = new utente_1.Utente('Mario', 'Rossi', 'mario.rossi@email.it', 'Carta di Credito');
var citta = new citta_1.Citta('Milano');
citta.aggiungiMezzo(mezzo1);
citta.aggiungiMezzo(mezzo2);
citta.aggiungiMezzo(mezzo3);
console.log('Prima della prenotazione:', mezzo1.stato);
utente1.prenotaMezzo(mezzo1);
console.log('Dopo la prenotazione:', mezzo1.stato);
utente1.prenotaMezzo(mezzo1);
