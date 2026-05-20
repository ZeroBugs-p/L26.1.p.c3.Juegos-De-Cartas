import Cl_mParticipante from "../models/Cl_mParticipante.js";
export default class Cl_cParticipante {
    vista;
    callback;
    constructor(vista) {
        // Inicializamos Vista
        this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
        this.vista.onCancelar(() => this.btCancelarOnclick());
        this.vista.onAceptar(() => this.btAceptarOnclick());
    }
    // Metodo para que El Fundacion llame a este Controlador
    solicitarParticipante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnclick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnclick() {
        this.callback(new Cl_mParticipante({
            nombre: this.vista.nombre,
            carta1: this.vista.carta1,
            carta2: this.vista.carta2,
            carta3: this.vista.carta3,
        }));
        this.vista.ocultar();
    }
}
