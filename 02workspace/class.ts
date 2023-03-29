import { HaUnNome } from "./implementa";

export class Persona implements HaUnNome{
    constructor(
        private nome:string,
        private cognome: string
    ){}
    dammiIlNome(): string {
        return this.getNome()+" "+this.getCognome();
    }
    getNome():string{
        return this.nome;
    }
    setNome(n:string):void{
        this.nome=n;
    }
    getCognome():string{
        return this.cognome;
    }
    setCognome(n:string):void{
        this.cognome=n;
    }
}
class Auto{
    constructor(
        private modello:string
    ){}
    getModello():string
{
    return this.modello;
}}




