export default class Cl_mParticipante {
    _nombre = "";
    _carta1 = 0;
    _carta2 = 0;
    _carta3 = 0;
    constructor({ nombre, carta1, carta2, carta3 } = { nombre: "", carta1: 0, carta2: 0, carta3: 0 }) {
        this.nombre = nombre;
        this.carta1 = carta1;
        this.carta2 = carta2;
        this.carta3 = carta3;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set carta1(c) {
        this._carta1 = +c;
    }
    get carta1() {
        return this._carta1;
    }
    set carta2(c) {
        this._carta2 = +c;
    }
    get carta2() {
        return this._carta2;
    }
    set carta3(c) {
        this._carta3 = +c;
    }
    get carta3() {
        return this._carta3;
    }
    puntuacion() {
        return this.carta1 + this.carta2 + this.carta3;
    }
}
