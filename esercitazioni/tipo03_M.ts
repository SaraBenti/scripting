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

class MPunto extends Punto implements IMovable, IScalable {
  constructor(public x: number, public y: number) {
    super(x, y);
  }
  moveTo(x1: number, y2: number): void {
    this.x = x1;
    this.y = y2;
    
  }
  scaleBy(factor: number): void {//se lo scale allarga la figura in questo caso non fa nulla
    //se lo interpretiamo come cambia la misura del foglio llora come ho fatto qui sotto
    this.x = this.x * factor;
    this.y = this.y * factor;
    let a = [];
    a.push(this.x, this.y);
    console.log(a);
  }
}

class MCerchio extends Cerchio implements IMovable, IScalable {
  constructor(public centro: Punto, public raggio: number) {
    super(centro, raggio);
  }
  moveTo(x1: number, y2: number): void {
    this.centro.x = x1;
    this.centro.y = y2;
    let a = [];
    a.push(this.centro.x, this.centro.y);
    console.log(a);
  }
  scaleBy(factor: number): void {//qui è il raggio da moltiplicare per il fattore 
    this.centro.x *= factor;
    this.centro.y *= factor;
    let a = [];
    a.push(this.centro.x, this.centro.y);
    console.log(a);
  }
}
class MRettangolo extends Rettangolo implements IMovable, IScalable {
  constructor(public base: number, public altezza: number, public posizione:Punto) {
    super(base, altezza);
  }
  moveTo(x1: number, y2: number): void {
    this.posizione.x = x1;
    this.posizione.y = y2;
    
    console.log("moveTo: ",x1,y2);
  }
  scaleBy(factor: number): void {
    this.base *= factor;
    this.altezza *= factor;
    let a = [];
    a.push(this.base, this.altezza);
    console.log(a);
  }
}
let c = new MCerchio(new Punto(1, 1), 3);
console.log("posizione di c:", [c.centro.x, c.centro.y]);
console.log("raggio di c:", c.raggio);
c.moveTo(5, 6);
console.log("posizione di c dopo il moveTo:", [c.centro.x, c.centro.y]);
console.log("raggio di c:", c.raggio);
c.moveTo(5, 6);
c.scaleBy(3);
console.log("posizione di c dopo o scaleBy:", [c.centro.x, c.centro.y]);
console.log("raggio di c:", c.raggio);

let p = new MPunto(2, 3);
p.moveTo(5, 6);
p.scaleBy(3);
let r = new MRettangolo(2, 3, new Punto(0,0));
r.moveTo(5, 6);
r.scaleBy(3);
//se inseriamo delle console log all'interno delle classi va in compatibilità con js e non segnala errori
//con le funzioni che tornano void non bisogna assegnarle ad una variabile