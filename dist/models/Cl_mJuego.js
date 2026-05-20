// Cl_mJuego.ts
export default class Cl_mJuego {
    participante = [];
    totalParticipantes = 0;
    cntMenos10 = 0;
    agregarParticipante(participante) {
        this.participante.push(participante);
        this.totalParticipantes++;
        // Condición
        if (participante.puntuacion() < 10) {
            this.cntMenos10++;
        }
    }
    cantidadParticipantes() {
        return this.participante.length;
    }
    ultimaPuntuacion() {
        if (this.participante.length === 0)
            return 0;
        return this.participante[this.participante.length - 1].puntuacion();
    }
    nombreMayor() {
        if (this.totalParticipantes === 0)
            return "No Hay Participantes";
        let max = this.participante[0].puntuacion();
        let name = this.participante[0].nombre;
        for (let b = 1; b < this.participante.length; b++) {
            if (this.participante[b].puntuacion() > max) {
                max = this.participante[b].puntuacion();
                name = this.participante[b].nombre;
            }
        }
        return name;
    }
    porcentMenos10() {
        if (this.totalParticipantes === 0)
            return 0;
        return (this.cntMenos10 / this.totalParticipantes) * 100;
    }
}
/*        JUEGO DE CARTAS

        En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12,
    gana quien sume mayor puntuación.

        Se desea conocer a) la puntuación de cada participante, b) el nombre del ganador,
    c) el porcentaje de jugadores con menos de 10 puntos.

    Se tiene que el formato para la salida de los requerimientos solicitados es:
    El participante Juan tiene una puntuación de 8
    El participante José tiene una puntuación de 14
    El participante Rosa tiene una puntuación de 27
    Nombre del ganador: Rosa
    Porcentaje de jugadores con menos de 10 puntos:33.33%
*/ 
