var handler = function (resolve, reject) {
    // calcolo che impiega del tempo
    // …
    var valore = {
        nome: "daniele",
        cognome: "arduini",
        numeroCasuale: Math.random()
    };
    if (valore.numeroCasuale > 0.5) {
        resolve(valore);
    }
    else {
        reject("Errore nella costruzione del valore");
    }
};
var persona = null;
var promise = new Promise(handler);
console.log("ottengo il risultato 1:");
promise.then(function (risultato) {
    console.log("risultato 1 ottenuto: ", risultato);
    persona = risultato;
    persona.nome;
    persona.cognome;
});
console.log("aaaa");
console.log("persona: ", persona);
promise.then(function (risultato2) {
    console.log("risultato 2 ottenuto: ", risultato2);
});
promise
    .then(function (risultato) {
    console.log("risultato 1 ottenuto: ", risultato);
})["catch"](function (error) {
    console.log("risultato in errore: ", error);
});
/**
 * Stampa la variabile persona ogni secondo fino a quando non è valorizzata
 */
function stampaPersona(numeroChiamata, p) {
    console.log("stampaPersona(): ", numeroChiamata, p);
}
stampaPersona(1, persona);
setTimeout(function () {
    stampaPersona(2, persona);
}, 5000);
/**
 * Senza le Promise():
 */
function dammiUnaPersona() {
    var risultato = {
        nome: "Daniele",
        cognome: "Arduini",
        numeroCasuale: Math.random()
    };
    return risultato;
}
console.log("prima dammiUnaPersona(): ", persona);
persona = dammiUnaPersona();
console.log("dopo dammiUnaPersona(): ", persona);
/**
 * Con le Promise():
 */
function dammiUnaPromisePersona() {
    return new Promise(function (resolve, reject) {
        var risultato = {
            nome: "Daniele",
            cognome: "Arduini",
            numeroCasuale: Math.random()
        };
        resolve(risultato);
        //return risultato;
    });
}
var pp = dammiUnaPromisePersona();
pp.then(function (p) {
    persona = p;
});
console.log(persona);
console.log(persona);
console.log(persona);
console.log(persona);
console.log(persona);
// =======================
/**
 * Funzione che data una persona, va a recuperare l'elenco dei documenti di quella persona
 * @param p
 * @returns
 */
function scaricaDocumenti(p) {
    var res = ["doc1", "doc2"];
    // uso la versione semplificata della resolve, perché ho già il risultato
    return Promise.resolve(res);
    // Oppure uso la versione classica della resolve
    //return new Promise<string[]>((resolve, reject) => {
    //    resolve(res);
    //});
    // Oppure in caso di errore:
    //return Promise.reject("Errore di comunicazione con il server");
    // Oppure in caso di errore con Promise esplicita:
    //return new Promise<string[]>((resolve, reject) => {
    //    reject("Errore di comunicazione con il server");
    //});
}
var listaDocumenti = null;
var promiseDocumenti = promise.then(function (risultato) {
    // console.log("risultato 1 ottenuto +: " + risultato);
    console.log("scarico i documenti: ", risultato);
    var pDocumenti = scaricaDocumenti(risultato);
    return pDocumenti;
});
promiseDocumenti
    .then(function (lista) {
    listaDocumenti = lista;
})["catch"](function (error) {
    console.log("risultato in errore: ", error);
});
if (listaDocumenti != null) {
    console.log("Stampo i documenti da codice globale:");
    for (var i = 0; listaDocumenti != null && i < listaDocumenti.length; i++) {
        var doc = listaDocumenti[i];
        console.log("Documento+: " + doc);
    }
}
else {
    console.log("Non posso stampare i documenti da codice globale perché listaDocumenti ancora null:", listaDocumenti);
}
promiseDocumenti.then(function (lista) {
    console.log("Stampo i documenti da dentro una promise:");
    for (var i = 0; i < lista.length; i++) {
        var doc = lista[i];
        console.log("Documento+: " + doc);
    }
});
