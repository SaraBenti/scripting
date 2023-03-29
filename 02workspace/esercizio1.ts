let bankAccount = {
  money: 2000,
  deposit(value) {
    //no implicityAny false non dà errore se non metto il tipo
    this.money += value;
  },
};

let myself = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"],
};

myself.bankAccount.deposit(3000);

console.log(myself);
//////////////////////////////////////

class Person {
  name: string;
  private type: string;
  protected age: number = 27; //inizializzo l'age se non previsto nel costruttore

  constructor(n: string, t?: string) {//posso mettere il default direttamente con il valore opzionale all'interno dei parametri
    //t:string="italiano"
    this.name = n;
    if (t) {
      this.type = t;
    } else {
      this.type = "italiano";
    }
  }
  chiSonoIo(): void {
    console.log("io sono ", this.name);
  }
  static stampaAttributi(p:Person):void{//ha accesso solo a attributi statici della classe
    //e non alle singole istanze(non posso usare this.nome ad esempio)
    //ma devo inserire dei parametri eventualmente per sopperire a questo problema
    console.log(p.name);

  }
}

let person = new Person("Max");
class Lavoratore extends Person {
  ditta: string;
  anniEsperienza: number = super.age - 20; //utilizzo le prop della classe da cui estendo
  //utilizzando super
  //non posso con type usare il super perchè privata
}
let l: Lavoratore = new Lavoratore("Giacomo");
console.log(l.anniEsperienza); // 7
console.log("p.name ", person.name);
person.chiSonoIo();
