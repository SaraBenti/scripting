//-------------------------ESERCIZIO 1) SVOLTO IN CLASSE-------------------------------------------------------------------
/**
 *   1. Creazione di un array di numeri e utilizzo del metodo filter() per restituire solo i numeri pari.
 */
//si può usare const al posto di let se la variabile non la modificheremo più
//(ulteriore controllo
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
//FINE ESERCIZIO 1)------------------------------------------------------------------------------------------------------------------

//------------------------ESERCIZIO 2)SVOLTO IN CLASSE-----------------------------------------------------------------------------------
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
//FINE ESERCIZIO 2)---------------------------------------------------------------------------------------------------------------------

//-------------------------------ESERCIZIO 3) DA CORREGGERE-------------------------------------------------------------------------------
/**
 *  3. Creazione di un array di oggetti rappresentanti prodotti in un negozio online. Utilizzo del metodo filter() per
restituire solo i prodotti con un prezzo inferiore a 50 euro. 
 */
interface IProdotti{
  nomeProdotto:string,
  prezzo:number
}
const prodottiOnline: IProdotti[] = [
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
let prodotti=prodottiOnline.filter(prod=>prod.prezzo<50)
console.log(prodotti);
//SECONDA MODALITA'
//altro metodo senza filter
//let prodotto:string[]=[];
//for(let oggetti of prodottiOnline){
//  if(oggetti.prezzo <50){
//    prodotto.push(oggetti.nomeProdotto);
// }  
//}
//FINE ESERCIZIO 3)------------------------------------------------------------------------------------------------------------------------

//----------------------------ESERCIZIO 4)DA CORREGGERE---------------------------------------------------------------------------
/**
 *  4. Creazione di un array di numeri e utilizzo del metodo find() per trovare il primo numero maggiore di 5.
 */
const serieDiNumeri:number[]=[1,2,3,4,5,6,7];
const primoN=serieDiNumeri.find(elemento=>elemento>5);
console.log(primoN);
//FINE ESERCIZIO 4)---------------------------------------------------------------------------------------------------------------------

//---------------------------ESERCIZIO 5)DA CORREGGERE------------------------------------------------------------------------------
/**
 * 5. Creazione di un array di stringhe rappresentanti nomi di città. Utilizzo del metodo filter() per restituire solo le città che iniziano
con la lettera "B".
 */
const citta:string[]=['Milano','Roma','Bologna','Napoli','Bari'];
const cittaB=citta.filter(city=>city.charAt(0)==='B');
console.log(cittaB);
//FINE ESERCIZIO 5)---------------------------------------------------------------------------------------------------------------

//---------------------------ESERCIZIO 6)DA CORREGGERE---------------------------------------------------------------------------------
/**
 *   6. Creazione di un array di oggetti rappresentanti persone con proprietà come nome e età. Utilizzo del metodo map() per creare un
 * array di stringhe che contiene solo i nomi delle persone.
 */
interface IPerson{
  name:string,
  age:number
}
const person:IPerson[]=[
  {
    name:'Sara',
    age:20
  },
  {
    name:'Maria',
    age:30
  },
  {
    name:'Valeria',
    age:40
  }
];
const onlyName=person.map(value=>value.name);
console.log(onlyName);
//FINE ESERCIZIO 6----------------------------------------------------------------------------------------------------------------

//-------------------------------ESERCIZIO 7) DA CORREGGERE----------------------------------------------------------------
/**
 *   7. Creazione di un array di oggetti rappresentanti libri con proprietà come titolo, autore e prezzo. Utilizzo del metodo filter() per
restituire solo i libri con un prezzo compreso tra 10 e 20 euro.
 */
interface IBook{
  title:string,
  author:string,
  price:number
}
const book:IBook[]=[
  {
    title:'Uno,nessuno,centomila',
    author:'Luigi Pirandello',
    price: 8.90
  },
  {
    title:'Oscura e celeste',
    author:'Marco Malvaldi',
    price: 17.90
  },
  {
    title:'Oltre l\'inverno',
    author:'Isabel Allende',
    price: 16.20
  },
  {
    title:'Spare.Il minore',
    author:'Prince Harry',
    price: 23.80
  }
];
 const books=book.filter(libri=>libri.price>10 && libri.price<20);
 console.log(books);
//FINE ESERCIZIO 7)----------------------------------------------------------------------------------------------------------

//-----------------------ESERCIZIO 8) SVOLTO IN CLASSE---------------------------------------------------------------------------------
/**
 * 8. Creazione di un array di numeri e utilizzo del metodo map()per calcolare il quadrato di ogni numero.
 */
const numeri2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeriAlQuadrato1: number[] = numeri2.map( (numero) => numero * numero );
const numeriAlQuadrato1: number[] = numeri2.map((numero) =>
  Math.pow(numero, 2)
);
//FINE ESERCIZIO 8)-----------------------------------------------------------------------------------------------------------------

//---------------------ESERCIZIO 9) DA CORREGGERE-------------------------------------------------------------------------------------
/**
 *   9. Creazione di un array di stringhe rappresentanti nomi di animali. Utilizzo del metodo find() per trovare il primo animale che 
inizia con la lettera "C".
 */
const animals:string[]=['Gallina','Gatto','Cane','Coniglio','Lepre'];
const animalC=animals.filter(animali=>animali.charAt(0)==='C');
console.log(animalC);
//FINE ESERCIZIO 9)---------------------------------------------------------------------------------------------------------------------

//-----------------------ESERCIZIO 10) DA CORREGGERE-------------------------------------------------------------------------------------
/**
* 10. Creazione di un array di oggetti rappresentanti film con proprietà come titolo, regista e anno di uscita. Utilizzo del metodo filter()
per restituire solo i film usciti dopo il 2000.
*/
interface IFilm{
  titolo:string,
  regista:string,
  anno:number
}
const films: IFilm[]=[
  {
    titolo:'La vita è bella',
    regista:'Roberto Benigni',
    anno: 1997
  },
  {
    titolo:'The departed',
    regista:'Martin Scorsese',
    anno: 2006
  },
  {
    titolo:'Il padrino',
    regista:'Francis Ford Coppola',
    anno: 1972
  },
  {
    titolo:'Hannibal',
    regista:'Ridley Scott',
    anno: 2001
  },
  {
    titolo:'Codice d\'onore',
    regista:'Rob Reiner',
    anno: 1992
  }
];
const film=films.filter(filmDuemila=>filmDuemila.anno>2000);
console.log(film);
//FINE ESERCIZIO 10)-----------------------------------------------------------------------------------------------------------------