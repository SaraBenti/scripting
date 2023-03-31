//----------------------ESERCIZIO 1) SVOLTO IN CLASSE------------------------------------------------------------------
/**
 * - tipo.01.ts -
 * Definisci un'interfaccia per rappresentare una persona con le seguenti proprietà:nome (stringa), età (numero) e indirizzo (oggetto con proprietà strada, città e stato). Crea una funzione che accetta
 * un'istanza di questa interfaccia come parametro e stampa le proprietà della persona.
 */
interface IPersona {
  nome: string;
  eta: number;
  indirizzo: {
    strada: string;
    citta: string;
    stato: string;
  };
}
// posso anche fare un'interfaccia a parte per l'indirizzo in questo modo
//  interface IIndirizzo{
//    strada: string;
//    citta: string;
//    stato: string;
//   }
//e poi nell'interfaccia IPersona
//  interface IPersona {
//    nome: string;
//    eta: number;
//    indirizzo: IIndirizzo;
//  }
let personaI: IPersona = {
  //oggetti in json
  nome: "Mario",
  eta: 28,
  indirizzo: { strada: "via Rossi", citta: "Rimini", stato: "Italia" },
};
function stampaPersona(p: IPersona): void {
  console.log(p);
}
stampaPersona(personaI);

function stampaIndirizzo(p: IPersona): void {
  console.log(
    "indirizzo di " +
      p.nome +
      " è " +
      p.indirizzo.strada +
      " " +
      p.indirizzo.citta +
      " " +
      p.indirizzo.stato
  );
}
stampaIndirizzo(personaI);
//FINE ESERCIZIO 1)--------------------------------------------------------------------------------------------------------------------------------


//---------------------------ESERCIZIO 2) SVOLTO IN CLASSE---------------------------------------------------------------------------------
/**
 * tipo-02.ts
Crea un tipo di dato enum per rappresentare i giorni della settimana. Scrivi una funzione che accetta un giorno della settimana come parametro e stampa un messaggio di saluto appropriato in base al 
 giorno.
 */
enum Settimana {
  Lunedi,
  Martedi,
  Mercoledi,
  Giovedi,
  Venerdi,
  Sabato,
  Domenica,
}
function stampaSalutoGiornoConSwitch(g: Settimana): void {
  switch (g) {
    case Settimana.Lunedi:
      console.log("è " + Settimana.Lunedi);
      break;
    case Settimana.Martedi:
      console.log("è " + Settimana.Martedi);
      break;
    case Settimana.Mercoledi:
      console.log("è " + Settimana.Mercoledi);
      break;
    case Settimana.Giovedi:
      console.log("è " + Settimana.Giovedi);
      break;
    case Settimana.Venerdi:
      console.log("è " + Settimana.Venerdi);
      break;
    case Settimana.Sabato:
      console.log("è " + Settimana.Sabato);
      break;
    case Settimana.Domenica:
      console.log("è " + Settimana.Domenica);
      break;
  }
}
function stampaSalutoQuotidiano(g: Settimana): void {
  // uso una serie di if per determinare il giorno

  if (g == Settimana.Lunedi) {
    console.log("Buongiorno è lunedì");
  } else if (g == Settimana.Martedi) {
    console.log("Buongiorno è martedì");
  } else if (g == Settimana.Mercoledi) {
    console.log("Buongiorno è mercoledi");
  } else if (g == Settimana.Giovedi) {
    console.log("Buongiorno è giovedì");
  } else if (g == Settimana.Venerdi) {
    console.log("Grazie a dio è venerdì");
  } else if (g == Settimana.Sabato) {
    console.log("Buongiorno è sabato");
  } else {
    console.log("Buongiorno è domenica");
  }
}
let giorno1 = Settimana.Venerdi;
stampaSalutoQuotidiano(giorno1);
stampaSalutoGiornoConSwitch(giorno1);
console.log("giorno 1 è ", giorno1); //in questo caso stampa giorno 1 è 4
//devo assegnargli la stringa per avere venerdì
//FINE ESERCIZIO 2)----------------------------------------------------------------------------------------------------------------------


//---------------------------ESERCIZIO 3) SVOLTO IN CLASSE------------------------------------------------------------------------
/**
 * tipo-03.ts
Crea un'interfaccia per rappresentare un prodotto con le seguenti proprietà: nome (stringa), prezzo (numero) e disponibilità (booleano). 
Crea una funzione che accetta un array di prodotti come parametro e restituisce un nuovo array contenente solo i prodotti disponibili.
 */

interface Prodotto {
  nome: string;
  prezzo: number;
  disponbilita: boolean;
}

let prodotto1: Prodotto = {
  nome: "L'alchimista",
  prezzo: 20,
  disponbilita: true,
};
let prodotto2: Prodotto = { nome: "La casta", prezzo: 15, disponbilita: true };
let prodotto3: Prodotto = {
  nome: "Fatto in casa da Benedetta",
  prezzo: 20,
  disponbilita: false,
};
let prodotto4: Prodotto = { nome: "1984", prezzo: 16, disponbilita: false };

let listaProdotti: Prodotto[] = [prodotto1, prodotto2, prodotto3, prodotto4];

/**
 * La funzione prende in ingresso una lista di prodotti,
 * fornisce in uscita la lista dei soli prodotti disponibili
 *
 * @param listaProdotti
 */
function disponibile(listaProdotti: Prodotto[]): Prodotto[] {
  let result: Prodotto[] = [];

  for (let i = 0; i < listaProdotti.length; i++) {
    let p = listaProdotti[i];

    if (p.disponbilita == true) {
      result.push(p);
    }
  }

  return result;
}

let listaDisponibili = disponibile(listaProdotti);

console.log(listaDisponibili);
//FINE ESERCIZIO 3)------------------------------------------------------------------------------------------------------------

//--------------------------ESERCIZIO 4) SVOLTO IN CLASSE------------------------------------------------------------------
/**
 * tipo-04.ts
Definisci un tipo di dato per rappresentare un numero di telefono. L'input dovrebbe essere una stringa con il formato "xxx-xxx-xxxx", 
dove "x" rappresenta un cifra numerica. Crea una funzione che accetta un numero di telefono come parametro e restituisce true se il formato è corretto e false altrimenti.
 */
let telefono: string;
function validaTelefono(telefono: string): boolean {
  if (
    telefono.length === 12 &&
    telefono.substring(3, 4) === "-" &&
    telefono.substring(7, 8) === "-" &&
    telefono.substring(0, 3).match("^[0-9]+$") &&
    //nelle regular expression dall'inizio della substring
    // è fatta tutta di numeri? ^ []+$
    //oppure scrivere
    //[0-9]{3}che significa tutti e 3 i caratteri
    telefono.substring(4, 7).match("^[0-9]+$") &&
    telefono.substring(8, 12).match("^[0-9]+$")
  ) {
    return true;
  } else {
    return false;
  }
}
//altro modo di fare l'esercizio
function validaTelefono1(telefono: string): boolean {
  if (telefono.length === 12 && telefono.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")) {
    return true;
  } else {
    return false;
  }
}
//FINE ESERCIZIO 4)----------------------------------------------------------------------------------------------------------

//---------------------------ESERCIZIO 5) DA CORREGGERE-----------------------------------------------------------------------
/**
 * tipo-05.ts
Definisci un tipo di dato per rappresentare un punteggio Il punteggio dovrebbe essere un numero compreso tra 0 e 100.
Crea una funzione che accetta un punteggio come parametro e restituisce una stringa che indica se il punteggio è insufficiente,
sufficiente, buono o eccellente.
 */
let punteggio: number;

function riceviPunteggio(punteggio: number): string | undefined {
  if (punteggio >= 0 && punteggio <= 100) {
    if (punteggio < 60) {
      return "Punteggio insufficiente";
    } else if (punteggio >= 60 && punteggio < 75) {
      return "Punteggio sufficiente";
    } else if (punteggio >= 75 && punteggio < 90) {
      return "Punteggio buono";
    } else if (punteggio >= 90) {
      return "Punteggio eccellente";
    }
  } else {
    return "Il punteggio non è valido";
  }
}
punteggio = 105;
let p = riceviPunteggio(punteggio);
console.log(p);
//FINE ESERCIZIO 5)---------------------------------------------------------------------------------------------------------------------

//----------------------------ESERCIZIO 6)SVOLTO IN CLASSE---------------------------------------------------------------------------------
/**
 * tipo-06.ts
Crea un'interfaccia per rappresentare un libro con le seguenti proprietà: titolo (stringa), autore (stringa), anno di pubblicazione (numero) 
e genere (stringa). Crea un array di libri e scrivi una funzione che accetta un genere come parametro e restituisce un nuovo array contenente solo i libri 
del genere specificato.
 */
interface Libro {
  titolo: string;
  autore: string;
  annoPubblicazione: number;
  genere: string;
}
// let libro1:Libro={
//   titolo:"L'alchimista",
//   autore:"Paulo Coelho",
//   annoPubblicazione:1988,
//   genere:"Romanzo"
// }
// let libro2:Libro={
//   titolo:"Piccolo Principe",
//   autore:"Antoine De Saint Exupery",
//   annoPubblicazione:1943,
//   genere:"Fantasy"
// }
// let libro3:Libro={
//   titolo:"Cappuccetto Rosso",
//   autore:"B. Grimm",
//   annoPubblicazione:1857,
//   genere:"Fantasy"
// }
// let libro4:Libro={
//   titolo:"Pinocchio",
//   autore:"C.Collodi",
//   annoPubblicazione:1883,
//   genere:"Fantasy"
// }
// let libri: Libro[] = [libro1, libro2, libro3, libro4, libro5];

//oppure scrivere tutto dentro un array
let libri: Libro[] = [
  {
    titolo: "Violeta",
    autore: "Isabel Allende",
    annoPubblicazione: 2023,
    genere: "Romanzo",
  },
  {
    titolo: "Piccolo Principe",
    autore: "Antoine De Saint Exupery",
    annoPubblicazione: 1943,
    genere: "Fantasy",
  },
  {
    titolo: "Cappuccetto Rosso",
    autore: "B. Grimm",
    annoPubblicazione: 1857,
    genere: "Fantasy",
  },
  {
    titolo: "Pinocchio",
    autore: "C.Collodi",
    annoPubblicazione: 1883,
    genere: "Aventura",
  },
  {
    titolo: "The Jungle Book",
    autore: "R.Kipling",
    annoPubblicazione: 1894,
    genere: "Racconti",
  },
];

function filtraLibriPerGenere(libri: Libro[], genere: string): Libro[] {
  let libriFiltrati: Libro[] = [];
  for (let libro of libri) {
    if (libro.genere === genere) {
      libriFiltrati.push(libro);
    }
  }
  return libriFiltrati;
}
console.log(filtraLibriPerGenere(libri, "Fantasy"));
//FINE ESERCIZIO 6)------------------------------------------------------------------------------------------------------------------

//------------------------------ESERCIZIO 7) DA CORREGGERE------------------------------------------------------------------------
/**
 * tipo-07.ts
Definisci un tipo di dato primitivo per rappresentare un'ora del giorno. L'input dovrebbe essere una stringa con il formato "hh:mm", dove "hh"
rappresenta le ore e "mm" rappresenta i minuti. Crea una funzione che accetta un'ora del giorno come parametro e restituisce una stringa che 
indica se l'ora è del mattino, del pomeriggio o della sera.
 */

let orario: string;

function verificaOrario(orario: string): string | undefined {
  let oreMinuti = orario.split(":");
  let ore = parseInt(oreMinuti[0]);
  let minuti = parseInt(oreMinuti[1]);
  if (ore >= 0 && ore <= 24) {
    if (minuti >= 0 && minuti <= 60) {
      if (ore < 12) {
        return "Mattino";
      } else if (ore < 18) {
        return "Pomeriggio";
      } else {
        return "Sera";
      }
    } else {
      return "Il formato orario non è valido";
    }
  } else {
    return "Il formato orario non è valido";
  }
}

orario = "22:70";
let o = verificaOrario(orario);
console.log(o);
//FINE ESERCIZIO 7)---------------------------------------------------------------------------------------------------------

//-------------------------ESERCIZIO 8) DA CORREGGERE-------------------------------------------------------------------------------
/**
   * tipo-08.ts
Crea un'interfaccia per rappresentare un animale con le seguenti proprietà: nome (stringa), specie (stringa) e numero di zampe (numero). Crea una funzione che accetta un array di
animali come parametro e restituisce un nuovo array contenente solo gli animali che hanno quattro zampe.
   */

interface IAnimale {
  nome: string;
  specie: string;
  nrZampe: number;
}
let animali: IAnimale[] = [
  {
    nome: "cane",
    specie: "mammifero",
    nrZampe: 4,
  },
  {
    nome: "pinguino",
    specie: "uccello",
    nrZampe: 2,
  },
  {
    nome: "fenicottero",
    specie: "uccello",
    nrZampe: 2,
  },
];
function filtraZampe(animali: IAnimale[], nrZampe: number): IAnimale[] {
  let zampeAnimali: IAnimale[] = [];
  for (let zampa of animali) {
    if (zampa.nrZampe === 4) {
      zampeAnimali.push(zampa);
    }
  }
  return zampeAnimali;
}
console.log(filtraZampe(animali, 4));
//FINE ESERCIZIO 8)-----------------------------------------------------------------------------------------------------------

//--------------------------ESERCIZIO 9)DA CORREGGERE-----------------------------------------------------------------------------
/**
  * tipo-09.ts
Definisci un tipo di dato primitivo per rappresentare un indirizzo email. L'input dovrebbe essere una stringa con il 
formato "nomeutente@dominio.com". Crea una funzione che accetta un indirizzo email come parametro e restituisce true se 
il formato è corretto e false altrimenti.
  */
let mail: string;

function validaMail(mail: string): boolean {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
}
mail = "sarabenti@ciao.com";
let m = validaMail(mail);
console.log(m);
//FINE ESERCIZIO 9)-----------------------------------------------------------------------------------------------------------