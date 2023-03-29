////libreria acquistata
export interface HaUnNome{
    dammiIlNome():string;
}
export class StampanteEtichette{
    constructor(
        private obj: HaUnNome
    ){
        this.stampaEtichetta(obj);
    }
 stampaEtichetta(o: HaUnNome):void{
    const n=o.dammiIlNome;
    console.log("etichetta con nome "+ n);
}
}
///////////////////////