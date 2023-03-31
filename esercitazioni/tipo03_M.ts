//-------------------------------DA CORREGGERE----------------------------------------------------------------------------------

/**
 * Definire le classi `MPunto`, `MCerchio` e `MRettangolo` come versioni estese delle rispettive classi `Punto`, `Cerchio`
e `Rettangolo` definite negli esercizi precedenti.
Le classi estese devono implementare una interfaccia comune `Movable` che consente il posizionamento nello spazio bidimensionale
delle figure geometriche attraverso la chiamata al metodo moveTo(x1, y2).

```
interface Movable {
    moveTo(x: number, y: number): void;
}
```

Le classi estese devono implementare una interfaccia comune `Scalable` che consente di moltiplicare le dimensioni
delle figure geometriche di un fattore numerico, attraverso la chiamata al metodo scaleBy(factor).

```
interface Scalable {
    scaleBy(factor: number): void;
}
```

Creare un'istanza di ogni classe e posizionarla nello spazio bidimensionale attraverso la chiamata al metodo moveTo(x1, y2),
 modificare le dimensioni attraverso la chiamata al metodo scaleBy(factor) e stampare le informazioni relative alle figure geometriche.
 */
import { Punto } from "./tipo03_classe_punto";
import { Cerchio } from "./tipo03_classe_cerchio";
import { Rettangolo } from "./tipo03_classe_rettangolo";
interface IMovable {
    moveTo(x1: number, y2: number): void;
}
interface IScalable {
    scaleBy(factor: number): void;
}


class MPunto extends Punto implements IMovable,IScalable{
  constructor(public x: number,
    public y: number) { super (x,y)}
    moveTo(x1: number, y2: number): void {
        this.x=x1;
        this.y=y2;
        let a=[];
        a.push(this.x,this.y);
        console.log(a);
    }
    scaleBy(factor:number):void{
        this.x=this.x*factor;
        this.y=this.y*factor;
        let a=[];
        a.push(this.x,this.y);
        console.log(a);
    }
}

class MCerchio extends Cerchio implements IMovable,IScalable{
    constructor (public centro: Punto, public raggio: number){
        super(centro,raggio)
    }
    moveTo(x1: number, y2: number):void{
        this.centro.x=x1;
        this.centro.y=y2;
        let a=[];
        a.push(this.centro.x,this.centro.y);
        console.log(a);

    }
    scaleBy(factor:number):void{
        this.centro.x*=factor;
        this.centro.y*=factor;
        let a=[];
        a.push(this.centro.x,this.centro.y);
        console.log(a);
    }
}
    class MRettangolo extends Rettangolo implements IMovable, IScalable{
        constructor(public base:number,
            public altezza:number){
                super(base,altezza)
            }
            moveTo(x1: number, y2: number):void{
                this.base+=x1;
                this.altezza+=y2;
                let a=[];
        a.push(this.base,this.altezza);
        console.log(a);
            }
            scaleBy(factor:number):void{
                this.base*=factor;
                this.altezza*=factor;
                let a=[];
                a.push(this.base,this.altezza);
                console.log(a);
            }
    }
let c=new MCerchio(new Punto(6,7),3);
let c1=c.moveTo(5,6);
let c2=c.scaleBy(3);
let p=new MPunto(2,3);
let p1=p.moveTo(5,6);
let p2=p.scaleBy(3);
let r=new MRettangolo(2,3);
let r1=r.moveTo(5,6);
let r2=r.scaleBy(3);

