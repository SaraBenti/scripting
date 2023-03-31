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
var personaI = {
    //oggetti in json
    nome: "Mario",
    eta: 28,
    indirizzo: { strada: "via Rossi", citta: "Rimini", stato: "Italia" },
};
function stampaPersona(p) {
    console.log(p);
}
stampaPersona(personaI);
function stampaIndirizzo(p) {
    console.log("indirizzo di " +
        p.nome +
        " è " +
        p.indirizzo.strada +
        " " +
        p.indirizzo.citta +
        " " +
        p.indirizzo.stato);
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
var Settimana;
(function (Settimana) {
    Settimana[Settimana["Lunedi"] = 0] = "Lunedi";
    Settimana[Settimana["Martedi"] = 1] = "Martedi";
    Settimana[Settimana["Mercoledi"] = 2] = "Mercoledi";
    Settimana[Settimana["Giovedi"] = 3] = "Giovedi";
    Settimana[Settimana["Venerdi"] = 4] = "Venerdi";
    Settimana[Settimana["Sabato"] = 5] = "Sabato";
    Settimana[Settimana["Domenica"] = 6] = "Domenica";
})(Settimana || (Settimana = {}));
function stampaSalutoGiornoConSwitch(g) {
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
function stampaSalutoQuotidiano(g) {
    // uso una serie di if per determinare il giorno
    if (g == Settimana.Lunedi) {
        console.log("Buongiorno è lunedì");
    }
    else if (g == Settimana.Martedi) {
        console.log("Buongiorno è martedì");
    }
    else if (g == Settimana.Mercoledi) {
        console.log("Buongiorno è mercoledi");
    }
    else if (g == Settimana.Giovedi) {
        console.log("Buongiorno è giovedì");
    }
    else if (g == Settimana.Venerdi) {
        console.log("Grazie a dio è venerdì");
    }
    else if (g == Settimana.Sabato) {
        console.log("Buongiorno è sabato");
    }
    else {
        console.log("Buongiorno è domenica");
    }
}
var giorno1 = Settimana.Venerdi;
stampaSalutoQuotidiano(giorno1);
stampaSalutoGiornoConSwitch(giorno1);
console.log("giorno 1 è ", giorno1); //in questo caso stampa giorno 1 è 4
var prodotto1 = {
    nome: "L'alchimista",
    prezzo: 20,
    disponbilita: true,
};
var prodotto2 = { nome: "La casta", prezzo: 15, disponbilita: true };
var prodotto3 = {
    nome: "Fatto in casa da Benedetta",
    prezzo: 20,
    disponbilita: false,
};
var prodotto4 = { nome: "1984", prezzo: 16, disponbilita: false };
var listaProdotti = [prodotto1, prodotto2, prodotto3, prodotto4];
/**
 * La funzione prende in ingresso una lista di prodotti,
 * fornisce in uscita la lista dei soli prodotti disponibili
 *
 * @param listaProdotti
 */
function disponibile(listaProdotti) {
    var result = [];
    for (var i = 0; i < listaProdotti.length; i++) {
        var p_1 = listaProdotti[i];
        if (p_1.disponbilita == true) {
            result.push(p_1);
        }
    }
    return result;
}
var listaDisponibili = disponibile(listaProdotti);
console.log(listaDisponibili);
/**
 * tipo-04.ts
Definisci un tipo di dato per rappresentare un numero di telefono.
L'input dovrebbe essere una stringa con il formato "xxx-xxx-xxxx",
dove "x" rappresenta un cifra numerica. Crea una funzione che accetta un numero di telefono
 come parametro e restituisce true se il formato è corretto e false altrimenti.
 */
var telefono;
function validaTelefono(telefono) {
    if (telefono.length === 12 &&
        telefono.substring(3, 4) === "-" &&
        telefono.substring(7, 8) === "-" &&
        telefono.substring(0, 3).match("^[0-9]+$") &&
        //nelle regular expression dall'inizio della substring
        // è fatta tutta di numeri? ^ []+$
        //oppure scrivere
        //[0-9]{3}che significa tutti e 3 i caratteri
        telefono.substring(4, 7).match("^[0-9]+$") &&
        telefono.substring(8, 12).match("^[0-9]+$")) {
        return true;
    }
    else {
        return false;
    }
}
//altro modo di fare l'esercizio
function validaTelefono1(telefono) {
    if (telefono.length === 12 && telefono.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * tipo-05.ts
Definisci un tipo di dato per rappresentare un punteggio.
Il punteggio dovrebbe essere un numero compreso tra 0 e 100.
Crea una funzione che accetta un punteggio come parametro e
restituisce una stringa che indica se il punteggio è insufficiente,
sufficiente, buono o eccellente.
 */
var punteggio;
function riceviPunteggio(punteggio) {
    //ho cercato sulla documentazione perchè se ritornavo solo string mi dava errore
    //Function lacks ending return statement and return type does not include 'undefined'.
    //ho inserito |undefined ma non ho capito il perchè!!!!!!!!!!
    if (punteggio >= 0 && punteggio <= 100) {
        if (punteggio < 60) {
            return "Punteggio insufficiente";
        }
        else if (punteggio >= 60 && punteggio < 75) {
            return "Punteggio sufficiente";
        }
        else if (punteggio >= 75 && punteggio < 90) {
            return "Punteggio buono";
        }
        else if (punteggio >= 90) {
            return "Punteggio eccellente";
        }
    }
    else {
        return "Il punteggio non è valido";
    }
}
punteggio = 105;
var p = riceviPunteggio(punteggio);
console.log(p);
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
var libri = [
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
function filtraLibriPerGenere(libri, genere) {
    var libriFiltrati = [];
    for (var _i = 0, libri_1 = libri; _i < libri_1.length; _i++) {
        var libro = libri_1[_i];
        if (libro.genere === genere) {
            libriFiltrati.push(libro);
        }
    }
    return libriFiltrati;
}
console.log(filtraLibriPerGenere(libri, "Fantasy"));
/**
 * tipo-07.ts
Definisci un tipo di dato primitivo per rappresentare un'ora del giorno.
L'input dovrebbe essere una stringa con il formato "hh:mm", dove "hh"
 rappresenta le ore e "mm" rappresenta i minuti. Crea una funzione che
 accetta un'ora del giorno come parametro e restituisce una stringa che
 indica se l'ora è del mattino, del pomeriggio o della sera.
 */
var orario;
function verificaOrario(orario) {
    var oreMinuti = orario.split(':');
    var ore = parseInt(oreMinuti[0]);
    var minuti = parseInt(oreMinuti[1]);
    if (ore >= 0 && ore <= 24) {
        if (minuti >= 0 && minuti <= 60) {
            if (ore < 12) {
                return "Mattino";
            }
            else if (ore < 18) {
                return "Pomeriggio";
            }
            else {
                return "Sera";
            }
        }
        else {
            return "Il formato orario non è valido";
        }
    }
    else {
        return "Il formato orario non è valido";
    }
}
orario = "22:70";
var o = verificaOrario(orario);
console.log(o);
var animali = [
    {
        nome: "cane",
        specie: "mammifero",
        nrZampe: 4
    },
    {
        nome: "pinguino",
        specie: "uccello",
        nrZampe: 2
    },
    {
        nome: "fenicottero",
        specie: "uccello",
        nrZampe: 2
    }
];
function filtraZampe(animali, nrZampe) {
    var zampeAnimali = [];
    for (var _i = 0, animali_1 = animali; _i < animali_1.length; _i++) {
        var zampa = animali_1[_i];
        if (zampa.nrZampe === 4) {
            zampeAnimali.push(zampa);
        }
    }
    return zampeAnimali;
}
console.log(filtraZampe(animali, 4));
/**
 * tipo-09.ts
Definisci un tipo di dato primitivo per rappresentare un
indirizzo email. L'input dovrebbe essere una stringa con il
formato "nomeutente@dominio.com". Crea una funzione che accetta
un indirizzo email come parametro e restituisce true se
il formato è corretto e false altrimenti.
 */
var mail;
function validaMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    else {
        return false;
    }
}
mail = "sarabenti@ciao.com";
var m = validaMail(mail);
console.log(m);
