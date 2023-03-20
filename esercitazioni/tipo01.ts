/**
 * - tipo.01.ts -
 * Definisci un'interfaccia per rappresentare
 *  una persona con le seguenti proprietà:
 * nome (stringa), età (numero) e indirizzo
 *  (oggetto con proprietà strada, città e
 * stato). Crea una funzione che accetta
 * un'istanza di questa interfaccia come
 * parametro e stampa le proprietà della
 *  persona.
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
/**
 * posso anche fare un'interfaccia a parte per l'indirizzo in questo modo
 * 
 * interface IIndirizzo{
 * strada: string;
    citta: string;
    stato: string;
 * }
    e poi nell'interfaccia IPersona
interface IPersona {
  nome: string;
  eta: number;
  indirizzo: IIndirizzo;
}

 */

let personaI: IPersona = {
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

/**
 * tipo-02.ts
Crea un tipo di dato enum per rappresentare
i giorni della settimana. Scrivi una funzione che 
accetta un giorno della settimana come parametro e
 stampa un messaggio di saluto appropriato in base al 
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

/**
 * tipo-03.ts
Crea un'interfaccia per rappresentare un prodotto con le seguenti proprietà: 
nome (stringa), prezzo (numero) e disponibilità (booleano). 
Crea una funzione che accetta un array di prodotti come parametro e restituisce un 
nuovo array contenente solo i prodotti disponibili.
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

/**
 * tipo-04.ts
Definisci un tipo di dato per rappresentare un numero di telefono. 
L'input dovrebbe essere una stringa con il formato "xxx-xxx-xxxx", 
dove "x" rappresenta un cifra numerica. Crea una funzione che accetta un numero di telefono
 come parametro e restituisce true se il formato è corretto e false altrimenti.
 */
let telefono : string;

function ValidaTelefono(string){
  if(telefono.length===12 && telefono.substring(3)==="-"
  && telefono.substring(7)==="-" && (telefono.substring(0,3)).match("[0-9]")
  && (telefono.substring(4,7)).match("[0-9]") && (telefono.substring(8,12)).match("[0-9]")){
    return true;
  }else{
    return false;
  }

}