import { Mezzo } from "./mezzo";
import { Utente } from "./utente";
import { Citta } from "./citta";

const mezzo1 = new Mezzo('001', 'bici');
const mezzo2 = new Mezzo('002', 'scooter');
const mezzo3 = new Mezzo('003', 'monopattino');

const utente1 = new Utente('Mario', 'Rossi', 'mario.rossi@email.it', 'Carta di Credito');

const citta = new Citta('Milano');

citta.aggiungiMezzo(mezzo1);
citta.aggiungiMezzo(mezzo2);
citta.aggiungiMezzo(mezzo3);

console.log('Prima della prenotazione:', mezzo1.stato);
utente1.prenotaMezzo(mezzo1);
console.log('Dopo la prenotazione:', mezzo1.stato);

utente1.prenotaMezzo(mezzo1);