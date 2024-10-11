import { IMezzo, Mezzo } from "./mezzo";

export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    prenotaMezzo(mezzo: IMezzo): void;
}

export class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
        } else {
            console.log(`Il mezzo con ID ${mezzo.id} non è attualmente disponibile.`);
        }
    }
}
