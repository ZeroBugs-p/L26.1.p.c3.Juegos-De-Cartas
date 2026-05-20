import Cl_mJuego from "../models/Cl_mJuego.js";
import Cl_mParticipante from "../models/Cl_mParticipante.js";
export default class Cl_cJuego {
    mJuego = new Cl_mJuego();
    vJuego;
    cParticipante;
    // Recibe la vista de la Juego y el controlador del Participante ya armado
    constructor(vistaJuego, controladorParticipante) {
        this.vJuego = vistaJuego;
        this.cParticipante = controladorParticipante;
        this.cargarParticipantes();
        this.vJuego.onNewParticipante(() => this.procesar1Participante());
    }
    // Cargar Participantes de Datos de Prueba, incluyendo el nuevo atributo edad
    cargarParticipantes() {
        const participantes = [
            { nombre: "Juan", carta1: 1, carta2: 5, carta3: 2, edad: 20 },
            { nombre: "Jose", carta1: 12, carta2: 1, carta3: 1, edad: 17 },
            { nombre: "Rosa", carta1: 10, carta2: 9, carta3: 8, edad: 22 },
            { nombre: "Pedro", carta1: 12, carta2: 5, carta3: 3, edad: 19 }
        ];
        participantes.forEach((participantes) => {
            this.mJuego.agregarParticipante(new Cl_mParticipante({
                nombre: participantes.nombre,
                carta1: participantes.carta1,
                carta2: participantes.carta2,
                carta3: participantes.carta3,
                edad: participantes.edad,
            }));
        });
        this.vJuego.mostrarParticipante({
            participante: this.mJuego.participante,
            cantidadParticipantes: this.mJuego.cantidadParticipantes(),
            ultimaPuntuacion: this.mJuego.ultimaPuntuacion(),
            nombreMayor: this.mJuego.nombreMayor(),
            porcentMenos10: this.mJuego.porcentMenos10(),
            // Enviamos a la vista el porcentaje de participantes mayores de 18 años
            porcentMayores18: this.mJuego.porcentMayores18(),
        });
    }
    procesar1Participante() {
        this.cParticipante.solicitarParticipante((participante) => {
            if (participante !== null) {
                this.mJuego.agregarParticipante(participante);
                this.vJuego.mostrarParticipante({
                    participante: this.mJuego.participante,
                    cantidadParticipantes: this.mJuego.cantidadParticipantes(),
                    ultimaPuntuacion: this.mJuego.ultimaPuntuacion(),
                    nombreMayor: this.mJuego.nombreMayor(),
                    porcentMenos10: this.mJuego.porcentMenos10(),
                    porcentMayores18: this.mJuego.porcentMayores18(),
                });
            }
        });
    }
}
