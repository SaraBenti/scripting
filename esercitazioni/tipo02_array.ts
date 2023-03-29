/**
 *   1. Creazione di un array di numeri e utilizzo del metodo filter() per restituire solo i numeri pari.
 */
//si può usare const al posto di let se la variabile non la modificheremo più(ulteriore controllo
//nel caso per sbaglio si cambi)
const numeri:number[]=[1,2,3,4,5,6,7,8,9];
const numeriPari:number[]=[];
for (let numero of numeri){//oppure (let i=0;i<numeri.length;i++){
    //const numero=numeri[i]}
    if(numero%2===0){
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
const numeriPari2:number[]=numeri.filter((numero:number)=> numero%2===0);


/**
 *  2. Creazione di un array di stringhe e utilizzo del metodo map() per aggiungere una lettera alla fine di ogni stringa.
 */
const nomi:string[]=["Mario","Luigi","Peach","Toad","Yoshi"];
const nomiConS: string[] = [];
for (let nome of nomi) {
    nomiConS.push(nome + "s");
}

console.log("=====[ Nomi con S 1 ]=====", nomiConS);

const nomiConS2:string[]=nomi.map((x)=>{
    //la map fa un ciclo come quello sopra sostanzialmente
    const x2= x+"s";
    return x2
});
//ancora più accorciato
//const nomiConS2:string[]=nomi.map(x:string=>x+"s");

/**
 *  3. Creazione di un array di oggetti rappresentanti
 *  prodotti in un negozio online. Utilizzo del metodo filter() per
restituire solo i prodotti con un prezzo inferiore a 50 euro. 
 */
//TODO: 

/**
 * 8. Creazione di un array di numeri e utilizzo del metodo map() 
 * per calcolare il quadrato di ogni numero.
 */
const numeri2:number[]=[1,2,3,4,5,6,7,8,9,10];
// const numeriAlQuadrato1: number[] = numeri2.map( (numero) => numero * numero );
const numeriAlQuadrato1: number[] = numeri2.map( (numero) => Math.pow(numero, 2) );
