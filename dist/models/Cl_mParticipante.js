export default class Cl_mParticipante {
    _nombre = "";
    _carta1 = 0;
    _carta2 = 0;
    _carta3 = 0;
    // Nuevo atributo para almacenar la edad del participante
    _edad = 0;
    constructor({ nombre, carta1, carta2, carta3, edad } = { nombre: "", carta1: 0, carta2: 0, carta3: 0, edad: 0 }) {
        this.nombre = nombre;
        this.carta1 = carta1;
        this.carta2 = carta2;
        this.carta3 = carta3;
        this.edad = edad;
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
    set edad(e) {
        // Asegura que la edad sea un número no negativo
        this._edad = Math.max(0, +e);
    }
    get edad() {
        return this._edad;
    }
    puntuacion() {
        return this.carta1 + this.carta2 + this.carta3;
    }
    // Devuelve true si el participante es mayor o igual a 18 años
    esMayorDeEdad() {
        return this.edad >= 18;
    }
}
