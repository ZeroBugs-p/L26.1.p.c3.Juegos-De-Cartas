import Cl_mParticipante from "../models/Cl_mParticipante.js";
import { I_vParticipante } from "../interfaces/I_vParticipante.js";

export default class Cl_cParticipante{
    private vista: I_vParticipante;
    private callback!: (participante: Cl_mParticipante | null ) => void;

    constructor(vista: I_vParticipante) {

        // Inicializamos Vista
            this.vista = vista;

        // El Controlador Realiza los Eventos de la Interfaz
            this.vista.onCancelar (() => this.btCancelarOnclick());
            this.vista.onAceptar (() => this.btAceptarOnclick());
    }

    // Metodo para que El Fundacion llame a este Controlador
        solicitarParticipante(callback: (participante: Cl_mParticipante | null) => void) {
            this.callback = callback;
            this.vista.mostrar();
        }

        private btCancelarOnclick() {
            this.callback(null);
            this.vista.ocultar();
        }

        private btAceptarOnclick() {
            this.callback(new Cl_mParticipante({
                nombre: this.vista.nombre, 
                carta1: this.vista.carta1,
                carta2: this.vista.carta2,
                carta3: this.vista.carta3,
            }));
            this.vista.ocultar();
        }

}