"use strict";
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
    constructor(n, t) {
        this.age = 27; //inizializzo l'age se non previsto nel costruttore
        this.name = n;
        if (t) {
            this.type = t;
        }
        else {
            this.type = "italiano";
        }
    }
    chiSonoIo() {
        console.log("io sono ", this.name);
    }
}
let person = new Person("Max");
class Lavoratore extends Person {
    constructor() {
        super(...arguments);
        this.anniEsperienza = super.age - 20; //utilizzo le prop della classe da cui estendo
        //utilizzando super
        //non posso con type usare il super perchè privata
    }
}
let l = new Lavoratore("Giacomo");
console.log(l.anniEsperienza); // 7
console.log("p.name ", person.name);
person.chiSonoIo();
//# sourceMappingURL=esercizio1.js.map