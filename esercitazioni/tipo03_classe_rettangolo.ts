//------------------------------------------DA CORREGGERE--------------------------------------------------------------------



/**
 * ## classi-03.ts

Definisci una classe denominata `Rettangolo` per rappresentare un rettangolo in uno spazio bidimensionale. La classe deve contenere le seguenti proprietà: base (numero), 
altezza (numero). La classe deve contenere un metodo per calcolare l'area del rettangolo. La classe deve contenere un metodo per calcolare il perimetro del rettangolo. Crea 
un'istanza della classe e stampa l'area e il perimetro del rettangolo.
 */
 export class Rettangolo{
    constructor(
        public base:number,
        public altezza:number
    ){}

    getArea():number{
        return this.base*this.altezza;
    }
    getPerimetro():number{
        return 2*(this.base + this.altezza);
    }
}
let r=new Rettangolo(5,3);
console.log("l'area del perimetro è: ",r.getArea());
console.log("il perimetro del rettangolo è: ",r.getPerimetro());