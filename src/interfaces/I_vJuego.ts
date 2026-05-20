import Cl_mParticipante from "../models/Cl_mParticipante"

export interface I_vJuego{

    onNewParticipante(callback: ()=> void) : void;
    
    mostrarParticipante({
        participante,
        cantidadParticipantes,
        ultimaPuntuacion,
        nombreMayor,
        porcentMenos10
    }:{
        participante: Cl_mParticipante[],
        cantidadParticipantes: number,
        ultimaPuntuacion: number,
        nombreMayor: string, 
        porcentMenos10: number
    }): void;

}