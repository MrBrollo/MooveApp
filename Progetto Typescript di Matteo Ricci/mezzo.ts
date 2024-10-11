import { IUtente } from "./utente";
export type TipoMezzo = 'bici' | 'scooter' | 'monopattino';
export type StatoMezzo = 'disponibile' | 'in uso';

export interface IMezzo {
    id: string;
    tipo: TipoMezzo;
    stato: StatoMezzo;

    assegnaUtente(utente: IUtente): void;
}

export class Mezzo implements IMezzo {
    id: string;
    tipo: TipoMezzo;
    stato: StatoMezzo;

    constructor(id: string, tipo: TipoMezzo) {
        this.id = id;
        this.tipo = tipo;
        this.stato = 'disponibile';
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`${utente.nome} ${utente.cognome} ha prenotato il mezzo con ID ${this.id}.`);
        } else {
            console.log(`Il mezzo con ID ${this.id} è già in uso`);
        }
    }
}