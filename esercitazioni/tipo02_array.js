/**
 *   1. Creazione di un array di numeri e utilizzo del metodo filter() per restituire
 * solo i numeri pari.
 */
//si può usare const al posto di let se la variabile non la modificheremo più
//(ulteriore controllo
//nel caso per sbaglio si cambi)
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numeriPari = [];
for (var _i = 0, numeri_1 = numeri; _i < numeri_1.length; _i++) {
    var numero = numeri_1[_i];
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
var numeriPari2 = numeri.filter(function (numero) { return numero % 2 === 0; });
/**
 *  2. Creazione di un array di stringhe e utilizzo del metodo map() per aggiungere una lettera alla fine di ogni stringa.
 */
var nomi = ["Mario", "Luigi", "Peach", "Toad", "Yoshi"];
var nomiConS = [];
for (var _a = 0, nomi_1 = nomi; _a < nomi_1.length; _a++) {
    var nome = nomi_1[_a];
    nomiConS.push(nome + "s");
}
console.log("=====[ Nomi con S 1 ]=====", nomiConS);
var nomiConS2 = nomi.map(function (x) {
    //la map fa un ciclo come quello sopra sostanzialmente
    var x2 = x + "s";
    return x2;
});
var prodottiOnline = [
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
var prodotti = prodottiOnline.filter(function (prod) { return prod.prezzo < 50; });
console.log(prodotti);
//altro metodo senza filter
//let prodotto:string[]=[];
//for(let oggetti of prodottiOnline){
//  if(oggetti.prezzo <50){
//    prodotto.push(oggetti.nomeProdotto);
// }  
//}
/**
 *  4. Creazione di un array di numeri e utilizzo
 * del metodo find() per trovare il primo numero
 * maggiore di 5.
 */
var serieDiNumeri = [1, 2, 3, 4, 5, 6, 7];
var primoN = serieDiNumeri.find(function (elemento) { return elemento > 5; });
console.log(primoN);
/**
 * 5. Creazione di un array di stringhe
 * rappresentanti nomi di città. Utilizzo del metodo
 * filter() per restituire solo le città che iniziano
    con la lettera "B".
 */
var citta = ['Milano', 'Roma', 'Bologna', 'Napoli', 'Bari'];
var cittaB = citta.filter(function (city) { return city.charAt(0) === 'B'; });
console.log(cittaB);
var person = [
    {
        name: 'Sara',
        age: 20
    },
    {
        name: 'Maria',
        age: 30
    },
    {
        name: 'Valeria',
        age: 40
    }
];
var onlyName = person.map(function (value) { return value.name; });
console.log(onlyName);
var book = [
    {
        title: 'Uno,nessuno,centomila',
        author: 'Luigi Pirandello',
        price: 8.90
    },
    {
        title: 'Oscura e celeste',
        author: 'Marco Malvaldi',
        price: 17.90
    },
    {
        title: 'Oltre l\'inverno',
        author: 'Isabel Allende',
        price: 16.20
    },
    {
        title: 'Spare.Il minore',
        author: 'Prince Harry',
        price: 23.80
    }
];
var books = book.filter(function (libri) { return libri.price > 10 && libri.price < 20; });
console.log(books);
/**
 * 8. Creazione di un array di numeri e utilizzo del metodo map()
 * per calcolare il quadrato di ogni numero.
 */
var numeri2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeriAlQuadrato1: number[] = numeri2.map( (numero) => numero * numero );
var numeriAlQuadrato1 = numeri2.map(function (numero) {
    return Math.pow(numero, 2);
});
/**
 *   9. Creazione di un array di stringhe
 * rappresentanti nomi di animali. Utilizzo del
 * metodo find() per trovare il primo animale che
 * inizia con
     la lettera "C".
 */
var animals = ['Gallina', 'Gatto', 'Cane', 'Coniglio', 'Lepre'];
var animalC = animals.filter(function (animali) { return animali.charAt(0) === 'C'; });
console.log(animalC);
var films = [
    {
        titolo: 'La vita è bella',
        regista: 'Roberto Benigni',
        anno: 1997
    },
    {
        titolo: 'The departed',
        regista: 'Martin Scorsese',
        anno: 2006
    },
    {
        titolo: 'Il padrino',
        regista: 'Francis Ford Coppola',
        anno: 1972
    },
    {
        titolo: 'Hannibal',
        regista: 'Ridley Scott',
        anno: 2001
    },
    {
        titolo: 'Codice d\'onore',
        regista: 'Rob Reiner',
        anno: 1992
    }
];
var film = films.filter(function (filmDuemila) { return filmDuemila.anno > 2000; });
console.log(film);
