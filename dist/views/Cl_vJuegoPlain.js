const html = String.raw;
/*
   String.raw: Sirve para tomar el texto exactamente como lo escribes
    (sin interpretar caracteres especiales como \n, \t, etc.)
*/
export default class Cl_vJuegoPlain {
    lblCantidadParticipantes;
    lblUltimaPuntuacion;
    lblNombreMayor;
    lblPorcentMenos10;
    lblPorcentMayores18;
    btNewParticipante;
    tbParticipante;
    vista;
    constructor() {
        this.lblCantidadParticipantes = document.getElementById("body_lblCantidadParticipantes");
        this.lblUltimaPuntuacion = document.getElementById("body_lblUltimaPuntuacion");
        this.lblNombreMayor = document.getElementById("body_lblNombreMayor");
        this.lblPorcentMenos10 = document.getElementById("body_lblPorcentMenos10");
        this.lblPorcentMayores18 = document.getElementById("body_lblPorcentMayores18");
        this.btNewParticipante = document.getElementById("body_btNewParticipante");
        this.tbParticipante = document.getElementById("body_tbParticipante");
        this.vista = document.getElementById("body");
    }
    onNewParticipante(callback) {
        this.btNewParticipante.onclick = callback;
    }
    mostrarParticipante({ participante, cantidadParticipantes, ultimaPuntuacion, nombreMayor, porcentMenos10, porcentMayores18 }) {
        this.tbParticipante.innerHTML = "";
        participante.forEach((participante) => {
            const tr = document.createElement("tr");
            // Agrega una fila por participante con su nombre, cartas, edad y puntuación
            tr.innerHTML = html `
                    <td> ${participante.nombre} </td>
                    <td> ${participante.carta1}</td>
                    <td> ${participante.carta2} </td>
                    <td> ${participante.carta3} </td>
                    <td> ${participante.edad} </td>
                    <td> ${participante.puntuacion()} </td>
                `;
            this.tbParticipante.appendChild(tr);
        });
        this.lblNombreMayor.innerHTML = nombreMayor;
        this.lblPorcentMenos10.innerHTML = porcentMenos10.toFixed(2);
        this.lblCantidadParticipantes.innerHTML = cantidadParticipantes.toString();
        this.lblUltimaPuntuacion.innerHTML = ultimaPuntuacion.toFixed(2);
        // Actualiza el campo que muestra el porcentaje de mayores de 18 años
        const lblPorcentMayores18 = document.getElementById("body_lblPorcentMayores18");
        if (lblPorcentMayores18) {
            lblPorcentMayores18.innerHTML = porcentMayores18.toFixed(2);
        }
    }
}
