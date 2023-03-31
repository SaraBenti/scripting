//-------------------------SVOLTO IN CLASSE---------------------------------------------------------------



/**
 * 
## classi-01.ts

Definisci una classe denominata `Punto` per rappresentare un punto in uno spazio bidimensionale.La classe deve contenere le seguenti proprietà: x
(numero), y (numero). La classe deve contenere un metodo per calcolare la distanza tra il punto e l'origine (0, 0). La classe deve contenere un metodo 
per calcolare la distanza tra il punto e un altro punto passato come parametro. Crea un'istanza della classe e stampa la distanza tra il punto e l'origine 
e la distanza tra il punto e un altro punto.
*/
//class Punto{
        // x: number;
        // y: number;
    
        // constructor(x: number, y: number) {
        //     this.x = x;
        //     this.y = y;
        // }
        //oppure più breve
      export class Punto {
            constructor(
                public x: number,
                public y: number) {
            }
        
            distanzaDalPunto(p: Punto): number {
                const dx = this.x - p.x;
                const dy = this.y - p.y;
                return Math.sqrt(dx * dx + dy * dy);
            }
        
            distanzaDallOrigine(): number {
                return this.distanzaDalPunto(new Punto(0, 0));
            }
        }
        
        
        const p1 = new Punto(1, 1);
        const p2 = new Punto(2, 3);
        
        console.log("distanza p1 dall'origine: ", p1.distanzaDallOrigine());
        console.log("distanza p1 dal punto p2: ", p1.distanzaDalPunto(p2));

