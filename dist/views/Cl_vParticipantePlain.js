// Cl_vParticipante.ts
export default class Cl_vParticipantePlain {
    inNombre;
    inCarta1;
    inCarta2;
    inCarta3;
    btCancelar;
    btAceptar;
    vista;
    // Control para capturar la edad del participante
    inEdad;
    constructor() {
        this.inNombre = document.getElementById("participante_inNombre");
        this.inCarta1 = document.getElementById("participante_inCarta1");
        this.inCarta2 = document.getElementById("participante_inCarta2");
        this.inCarta3 = document.getElementById("participante_inCarta3");
        this.inEdad = document.getElementById("participante_inEdad");
        this.btAceptar = document.getElementById("participante_btAceptar");
        this.btCancelar = document.getElementById("participante_btCancelar");
        this.vista = document.getElementById("participante");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get carta1() {
        return +this.inCarta1.value;
    }
    get carta2() {
        return +this.inCarta2.value;
    }
    get carta3() {
        return +this.inCarta3.value;
    }
    // Devuelve la edad ingresada en el formulario del participante
    get edad() {
        return +this.inEdad.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
        this.inNombre.value = "";
        this.inEdad.value = "";
        this.inCarta1.value = "";
        this.inCarta2.value = "";
        this.inCarta3.value = "";
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
