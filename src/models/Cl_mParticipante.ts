export default class Cl_mParticipante{

    private _nombre : string = "";
    private _carta1 : number =0;
    private _carta2 : number =0;
    private _carta3 : number =0;

    constructor({nombre, carta1,carta2,carta3}:
        {nombre:string, carta1:number,carta2:number,carta3:number}=
        {nombre: "", carta1: 0,carta2: 0,carta3: 0}){
             
            this.nombre = nombre;
            this.carta1 = carta1;
            this.carta2 = carta2;
            this.carta3 = carta3;
            
    }

    set nombre(n:string){
        this._nombre = n;
    }

    get nombre(): string{
        return this._nombre;
    }

    set carta1 (c:number){
        this._carta1 = +c;
    }

    get carta1(): number{
        return this._carta1;
    }

    
    set carta2 (c:number){
        this._carta2 = +c;
    }

    get carta2(): number{
        return this._carta2;
    }

    
    set carta3 (c:number){
        this._carta3 = +c;
    }

    get carta3(): number{
        return this._carta3;
    }

    puntuacion():number{
        return this.carta1 + this.carta2 + this.carta3
    }
}