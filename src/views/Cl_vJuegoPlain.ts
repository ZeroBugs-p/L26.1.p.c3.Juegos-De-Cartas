import { I_vJuego } from "../interfaces/I_vJuego.js";
import Cl_mParticipante from "../models/Cl_mParticipante.js";

const html = String.raw; 
/* 
   String.raw: Sirve para tomar el texto exactamente como lo escribes 
    (sin interpretar caracteres especiales como \n, \t, etc.) 
*/

export default class Cl_vJuegoPlain implements I_vJuego{
    private lblCantidadParticipantes : HTMLElement;
    private lblUltimaPuntuacion : HTMLElement;
    private lblNombreMayor : HTMLElement; 
    private lblPorcentMenos10 : HTMLElement;
    private lblPorcentMayores18 : HTMLElement;
    private btNewParticipante: HTMLButtonElement;
    private tbParticipante: HTMLTableElement
    private vista : HTMLElement | null;

    constructor() {
        this.lblCantidadParticipantes = document.getElementById("body_lblCantidadParticipantes") as HTMLElement;
        this.lblUltimaPuntuacion = document.getElementById("body_lblUltimaPuntuacion") as HTMLElement;
        this.lblNombreMayor = document.getElementById("body_lblNombreMayor") as HTMLElement;
        this.lblPorcentMenos10 = document.getElementById("body_lblPorcentMenos10") as HTMLElement;
        this.lblPorcentMayores18 = document.getElementById("body_lblPorcentMayores18") as HTMLElement;
        this.btNewParticipante = document.getElementById("body_btNewParticipante") as HTMLButtonElement;
        this.tbParticipante = document.getElementById("body_tbParticipante") as HTMLTableElement;
        this.vista = document.getElementById("body") as HTMLElement;

    }

    onNewParticipante(callback: () => void): void {
        this.btNewParticipante.onclick = callback;      }

    mostrarParticipante({ 
            participante,
            cantidadParticipantes,
            ultimaPuntuacion,
            nombreMayor, 
            porcentMenos10,
            porcentMayores18

        }:{ 
            participante: Cl_mParticipante[]; 
            cantidadParticipantes: number;
            ultimaPuntuacion: number;
            nombreMayor: string; 
            porcentMenos10: number;
            porcentMayores18: number;
    
        }): void {
        
            this.tbParticipante.innerHTML = "";
            participante.forEach((participante) => {

            const tr = document.createElement("tr");

                // Agrega una fila por participante con su nombre, cartas, edad y puntuación
                tr.innerHTML = html`
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
        this.lblPorcentMayores18.innerHTML = porcentMayores18.toFixed(2);
        }
    
}
