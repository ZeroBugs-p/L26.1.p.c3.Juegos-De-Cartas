// Cl_vParticipante.ts

import { I_vParticipante } from "../interfaces/I_vParticipante.js";

export default class Cl_vParticipantePlain implements I_vParticipante {
    private inNombre: HTMLInputElement;
    private inCarta1: HTMLInputElement;
    private inCarta2: HTMLInputElement;
    private inCarta3: HTMLInputElement;
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor(){

        this.inNombre = document.getElementById("participante_inNombre") as HTMLInputElement; 
        this.inCarta1 = document.getElementById("participante_inCarta1") as HTMLInputElement;
        this.inCarta2 = document.getElementById("participante_inCarta2") as HTMLInputElement;
        this.inCarta3 = document.getElementById("participante_inCarta3") as HTMLInputElement;
        this.btAceptar = document.getElementById("participante_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("participante_btCancelar") as HTMLButtonElement;
        this.vista = document.getElementById("participante") as HTMLElement;
    }

    get nombre(): string{
       return this.inNombre.value;
    }

    get carta1(): number{
        return +this.inCarta1.value;
    }

    get carta2(): number{
        return +this.inCarta2.value;
    }
    
    get carta3(): number{
        return +this.inCarta3.value;
    }

    onAceptar(callback: ()=> void): void{
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: ()=> void): void{
        this.btCancelar.onclick =callback;
    }

    mostrar(): void{
        if(this.vista === null) return;
        this.vista.hidden = false;
        this.inNombre.value = "";
        this.inCarta1.value = "";
        this.inCarta2.value = "";
        this.inCarta3.value = "";
    }

    ocultar(): void{
        if(this.vista === null) return;
        this.vista.hidden = true;
    }
}