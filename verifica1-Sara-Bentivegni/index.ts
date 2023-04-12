/**
 * Definire una funzione TypeScript 'unisciArray(...)' che accetta come
 *  parametri 2 array di interi e ritorna un
unico array di interi che contiene tutti gli elementi di quelli forniti come
 parametro.
 */
const listaInteri1:number[]=[1,2,3,4,5];
const listaInteri2:number[]=[7,8,9];


function unisciArray(listaInteri1:number[], listaInteri2:number[]):number[]{
    let risultato:number[]=[];
    risultato=listaInteri1.concat(listaInteri2);
    return risultato;
}
let risultato=unisciArray(listaInteri1 , listaInteri2);
console.log(risultato);

/**
 * A. Definire una classe TypeScript 'Accumulatore' che rappresenta la carica di una
 *  batteria tramite un valore
numerico da 0 a 5000. La classe ha i seguenti metodi:
carica(n) aumenta la carica per un valore n
scarica(n) diminuisce la carica per un valore n
livello() fornisce il livello della batteria in formato numerico tra 0 e 5000
livello100() fornisce il livello corrente della carica in % del valore massimo

B. Rendere parametrizzabile il valore 5000 all'inizializzazione della classe
 */
class Batteria{
    public caricaBatteria:number=5000;
    constructor(caricaBatteria:number){
        this.caricaBatteria=caricaBatteria;
    }
    
    carica(n:number){
        if (this.caricaBatteria+n<=5000){
            return this.caricaBatteria+n;
        }else{
        return this.caricaBatteria;
        }
    }
    scarica(n:number){
        if (this.caricaBatteria-n>0){
        return this.caricaBatteria-n;
        }else{
            return this.caricaBatteria;
        }
    }
    livello(){
        if (this.caricaBatteria>=0 && this.caricaBatteria<=5000){
            return console.log(this.caricaBatteria)
            }
    }
    livello100(){
        if (this.caricaBatteria>=0 && this.caricaBatteria<=5000){
        return console.log(this.caricaBatteria/5000*100);
        }
    }
}
/**
 * Definire una funzione TypeScript 'tuttoInMaiuscolo(...)' che accetta come parametro un
 *  array di stringhe e
ritorna un nuovo array di stringhe che contiene tutti gli elementi di quello forniti come 
parametro ma con i
caratteri in maiuscolo.
 */
const listaStringhe:string[]=['ciao','evviva'];
function tuttoInMaiuscolo(lista:string[]):string[]{
    let risultato=lista.map((x)=>x.toUpperCase());
    return risultato;
}
let ris=tuttoInMaiuscolo(listaStringhe);
console.log(ris);

/**
 * Utilizzando il linguaggio TypeScript, si chiede di definire una funzione che accetta come primo parametro
un numero compreso tra 0 e 9 e come secondo parametro una stringa che rappresenta la lingua ('it', 'en').
La funzione deve restituisce la stringa che rappresenta il numero in lettere nella lingua fornita come
secondo parametro.
La funzione dovrà chiamarsi 'convertiInLinguaNumeroX(...)'
Esempi: - passando (0, 'it') deve restituire la stringa 'zero' - passando (1, 'it') deve restituire la stringa 'uno' -
passando (0, 'en') deve restituire la stringa 'zero' - passando (1, 'en') deve restituire la stringa 'one' ... -
passando (9, 'it') deve restituire la stringa 'nove' - passando (9, 'en') deve restituire la stringa 'nine'
 */

function convertiInLinguaNumeroX(n:number,l:string):string{
    if(n>=0 && n<=9 && l==="it"){
        switch(n){
            case 0:
                console.log("zero");
                break;
            case 1:
                console.log("uno");
                break;
            case 2:
                console.log("due");
                break;
            case 3:
                console.log("tre");
                break;
            case 4:
                console.log("quattro");
                break;
            case 5:
                console.log("cinque");
                break;
            case 6:
                console.log("sei");
                break;
            case 7:
                console.log("sette");
                break;
            case 8:
                console.log("otto");
                break;
            case 9:
                console.log("nove");
                break;
        }
    }else if(n>=0 &&n<=9 && l==="en"){
        switch(n){
            case 0:
                console.log("zero");
                break;
            case 1:
                console.log("one");
                break;
            case 2:
                console.log("two");
                break;
            case 3:
                console.log("three");
                break;
            case 4:
                console.log("four");
                break;
            case 5:
                console.log("five");
                break;
            case 6:
                console.log("six");
                break;
            case 7:
                console.log("seven");
                break;
            case 8:
                console.log("eight");
                break;
            case 9:
                console.log("nine");
                break;
        }
    }else{
       console.log("La funzione convertiInLinguaNumero non è possibile");
    }
}
let a=convertiInLinguaNumeroX(8,"it");

/**
 * Definite una classe 'Persona' che rappresenta una persona avente come proprietà nome, cognome e età.
Definite inoltre una classe 'Film' che rappresenta un film avente come proprietà titolo, anno di uscita, 
regista
e cast (un array di oggetti di tipo Persona). Create un array di oggetti rappresentanti un elenco di film e con
l'utilizzo del metodo filter() per restituire solo i film usciti dopo il 2000. (per i dati dei film potete
     utilizzare i siti
https://www.imdb.com/ o https://www.mymovies.it/)
 */

class Persona{
    constructor(
        public nome:string,
        public cognome:string,
        public eta:number
    ){}
}
class Film  {
    constructor(
        public titolo:string,
        public anno:number,
        public regista:Persona[]
    ){}
}
const filmLista: Film[]=[
    {
      titolo:'La vita è bella',
      anno: 1997,
      regista:[
        {nome:'Roberto',
        cognome: 'Benigni',
        eta:70}]
    },
    {
      titolo:'The departed',
      anno: 2006,
      regista:[
        {nome:'Martin',
        cognome: 'Scorsese',
        eta:80}]
    },
    {
      titolo:'Il padrino',
      anno: 1972,
      regista:[
        {nome:'Francis',
        cognome: 'Ford Coppola',
        eta:90}]
    },
    {
      titolo:'Hannibal',
      anno: 2001,
      regista:[
        {nome:'Ridley',
        cognome: 'Scott',
        eta:79}]
    },
    {
      titolo:'Codice d\'onore',
      anno: 1992,
      regista:[
        {nome:'Rob',
        cognome: 'Reiner',
        eta:82}]
    }
  ];
  const elencoFilmDopoDuemila=filmLista.filter(film=>film.anno>2000);
  console.log(elencoFilmDopoDuemila);
  /**
   * La funzione fornita qui sotto esegue una richiesta HTTP GET a un endpoint API REST restituendo una
Promise di un array di oggetti JSON che rappresentano i post all'interno di un sito.
Estraete dalla Promise l'elenco dei post e da questi selezionate solamente quelli dell'utente con
identificativo "id: X", dove X un numero intero che si ottiene dall'ultima cifra del vostro anno di nascita
 + 1.
Es. se siete nati nel 1999, X sarà 9+1=10.
Stampate a video i seguenti campi per ogni post:
id
userId
title
   */
  // interfaccia come da formato dell'oggetto JSON restituito dall'endpoint API REST
// consultabile nella documentazione all'URL https://reqres.in/, https://reqres.in/api-docs/
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    }
    
    function getPostList(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
    if (!response.ok) {
    throw new Error(response.statusText)
    }
    return response.json() as Promise<Post[]>
    });
    }
    const pPostList=getPostList();
    pPostList
        .then (response=>{
            let posts:Post[]=posts.push(response.id);
            let posts:Post[]=posts.push(response.userId);
            let posts:Post[]=posts.push(response.title);
        })
        .catch(error => {
            console.log("risultato in errore: ", error);
        });
        