// Cl_mJuego.ts
export default class Cl_mJuego {
    participante = [];
    totalParticipantes = 0;
    cntMenos10 = 0;
    // Contador de participantes mayores de 18 años
    cntMayores18 = 0;
    agregarParticipante(participante) {
        this.participante.push(participante);
        this.totalParticipantes++;
        // Condición
        if (participante.puntuacion() < 10) {
            this.cntMenos10++;
        }
        if (participante.esMayorDeEdad()) {
            // Aumenta el contador de participantes mayores de edad
            this.cntMayores18++;
        }
    }
    buscarPorNombre(nombre) {
        for (let z = 0; z < this.participante.length; z++) {
            if (this.participante[z].nombre === nombre) {
                return this.participante[z];
            }
        }
        return null;
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
    // Calcula el porcentaje de participantes mayores de 18 años
    porcentMayores18() {
        if (this.totalParticipantes === 0)
            return 0;
        return (this.cntMayores18 / this.totalParticipantes) * 100;
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
