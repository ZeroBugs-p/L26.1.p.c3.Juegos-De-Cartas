import Cl_mJuego from "../models/Cl_mJuego.js";
import { I_vJuego } from "../interfaces/I_vJuego.js";
import Cl_cParticipante from "./Cl_cParticipante.js";
import Cl_mParticipante from "../models/Cl_mParticipante.js";

export default class Cl_cJuego {
  private mJuego: Cl_mJuego = new Cl_mJuego();
  private vJuego: I_vJuego;
  private cParticipante: Cl_cParticipante;

  // Recibe la vista de la Juego y el controlador del Participante ya armado
  constructor(vistaJuego: I_vJuego, controladorParticipante: Cl_cParticipante) {
    this.vJuego = vistaJuego;
    this.cParticipante = controladorParticipante;

    this.cargarParticipantes();

    this.vJuego.onNewParticipante(() => this.procesar1Participante());

  }

  // Cargar Participantes de Datos de Prueba
  private cargarParticipantes() {
    const participantes = [
        {nombre: "Juan", carta1: 1, carta2: 5, carta3: 2},
        {nombre: "Jose", carta1: 12, carta2: 1, carta3: 1},
        {nombre: "Rosa", carta1: 10, carta2: 9, carta3: 8}
    ];

    participantes.forEach((participantes) => {
        this.mJuego.agregarParticipante(
            new Cl_mParticipante({
                nombre: participantes.nombre,
                carta1: participantes.carta1,
                carta2: participantes.carta2,
                carta3: participantes.carta3,
            }),
        );
    });

    this.vJuego.mostrarParticipante({
        participante: this.mJuego.participante,
        cantidadParticipantes: this.mJuego.cantidadParticipantes(),
        ultimaPuntuacion: this.mJuego.ultimaPuntuacion(),
        nombreMayor: this.mJuego.nombreMayor(),
        porcentMenos10: this.mJuego.porcentMenos10(),
    })
  }

  private procesar1Participante() {
    this.cParticipante.solicitarParticipante((participante) => {
      if (participante !== null) {
        this.mJuego.agregarParticipante(participante);
        this.vJuego.mostrarParticipante({
            participante: this.mJuego.participante,
            cantidadParticipantes: this.mJuego.cantidadParticipantes(),
            ultimaPuntuacion: this.mJuego.ultimaPuntuacion(),
            nombreMayor: this.mJuego.nombreMayor(),
            porcentMenos10: this.mJuego.porcentMenos10(),
        });
      }
    });
  }
}