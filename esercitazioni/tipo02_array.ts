/**
 *   1. Creazione di un array di numeri e utilizzo del metodo filter() per restituire solo i numeri pari.
 */
//si può usare const al posto di let se la variabile non la modificheremo più(ulteriore controllo
//nel caso per sbaglio si cambi)
const numeri: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numeriPari: number[] = [];
for (let numero of numeri) {
  //oppure (let i=0;i<numeri.length;i++){
  //const numero=numeri[i]}
  if (numero % 2 === 0) {
    numeriPari.push(numero);
  }
}

// function filtraNumeriPari(numero:number):boolean{
//     return numero%2===0;
// }
// const numeriPari2:number[]=numeri.filter(filtraNumeriPari);
//oppure
//const numeriPari2:number[]=numeri.filter((numero:number)=>{return numero%2===0;})
//semplificata in
const numeriPari2: number[] = numeri.filter(
  (numero: number) => numero % 2 === 0
);

/**
 *  2. Creazione di un array di stringhe e utilizzo del metodo map() per aggiungere una lettera alla fine di ogni stringa.
 */
const nomi: string[] = ["Mario", "Luigi", "Peach", "Toad", "Yoshi"];
const nomiConS: string[] = [];
for (let nome of nomi) {
  nomiConS.push(nome + "s");
}

console.log("=====[ Nomi con S 1 ]=====", nomiConS);

const nomiConS2: string[] = nomi.map((x) => {
  //la map fa un ciclo come quello sopra sostanzialmente
  const x2 = x + "s";
  return x2;
});
//ancora più accorciato
//const nomiConS2:string[]=nomi.map(x:string=>x+"s");

/**
 *  3. Creazione di un array di oggetti rappresentanti
 *  prodotti in un negozio online. Utilizzo del metodo filter() per
restituire solo i prodotti con un prezzo inferiore a 50 euro. 
 */
const prodottiOnline: object[] = [
  {
    nomeProdotto: "zaino",
    prezzo: 55,
  },
  {
    nomeProdotto: "borsa secchiello",
    prezzo: 43,
  },
  {
    nomeProdotto: "clutch",
    prezzo: 39,
  },
  {
    nomeProdotto: "shopper",
    prezzo: 52,
  },
];
const pr:number[]=[];
for(let prezzi of prodottiOnline){
  for (let p of prezzi){
  if(p.prezzo <50){
    pr.push(p);
  }
}   
}



/**
 *  4. Creazione di un array di numeri e utilizzo
 * del metodo find() per trovare il primo numero
 * maggiore di 5.
 */

/**
 * 5. Creazione di un array di stringhe 
 * rappresentanti nomi di città. Utilizzo del metodo 
 * filter() per restituire solo le città che iniziano
    con la lettera "B".
 */

/**
 *   6. Creazione di un array di oggetti
 * rappresentanti persone con proprietà come nome
 * e età. Utilizzo del metodo map() per creare un
 * array distringhe che contiene solo i nomi
 * delle persone.
 */

/**
 *   7. Creazione di un array di oggetti 
 * rappresentanti libri con proprietà come titolo, 
 * autore e prezzo. Utilizzo del metodo filter() per
     restituire solo i libri con un prezzo compreso 
     tra 10 e 20 euro.
 */

/**
 * 8. Creazione di un array di numeri e utilizzo del metodo map()
 * per calcolare il quadrato di ogni numero.
 */
const numeri2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeriAlQuadrato1: number[] = numeri2.map( (numero) => numero * numero );
const numeriAlQuadrato1: number[] = numeri2.map((numero) =>
  Math.pow(numero, 2)
);

/**
 *   9. Creazione di un array di stringhe 
 * rappresentanti nomi di animali. Utilizzo del 
 * metodo find() per trovare il primo animale che 
 * inizia con
     la lettera "C".
 */

/**
      * 10. Creazione di un array di oggetti 
      * rappresentanti film con proprietà come titolo
      * , regista e anno di uscita. Utilizzo del 
      * metodo filter()
      per restituire solo i film usciti dopo il 2000.
      */
