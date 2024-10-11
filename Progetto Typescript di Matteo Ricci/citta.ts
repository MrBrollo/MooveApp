import { IMezzo } from "./mezzo";

export interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    aggiungiMezzo(mezzo: IMezzo): void;
}

export class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`Il mezzo con ID ${mezzo.id} è stato aggiunto alla città di ${this.nome}`);
    }
}