// I_vParticipante.ts

export interface I_vParticipante {
    get nombre(): string;
    get carta1(): number; 
    get carta2(): number;
    get carta3(): number;

    mostrar(): void;
    ocultar(): void;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
