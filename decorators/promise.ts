interface Persona {
    nome: string;
    cognome: string;
    numeroCasuale: number;
  }
  
  const handler = function(resolve, reject) {
    // calcolo che impiega del tempo
    // …
    const valore: Persona = {
      nome: "daniele",
      cognome: "arduini",
      numeroCasuale: Math.random()
    };
  
    if (valore.numeroCasuale >0.5) {
      resolve(valore);
    } else {
      reject("Errore nella costruzione del valore");
    }
  };
  
  let persona: Persona = null;
  const promise = new Promise(handler);
  
  console.log("ottengo il risultato 1:");
  
  promise.then((risultato: Persona) => {
    console.log("risultato 1 ottenuto: ", risultato);
  
    persona = risultato;
    persona.nome;
    persona.cognome;
  });
  
  console.log("aaaa");
  
  console.log("persona: ", persona);
  
  promise.then((risultato2: Persona) => {
    console.log("risultato 2 ottenuto: ", risultato2);
  });
  
  promise
    .then(risultato => {
      console.log("risultato 1 ottenuto: ", risultato);
    })
    .catch(error => {
      console.log("risultato in errore: ", error);
    });
  
  /**
   * Stampa la variabile persona ogni secondo fino a quando non è valorizzata
   */
  function stampaPersona(numeroChiamata:number,p:Persona) {
    console.log("stampaPersona(): ",numeroChiamata, p);
   
  }
  
  stampaPersona(1,persona);
  setTimeout(()=>{
stampaPersona(2,persona);
  },5000);
  



  /**
   * Senza le Promise():
   */
  function dammiUnaPersona(): Persona {//creazione sincrona dell'oggetto, ottengo subito il risultato
    const risultato = {
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
  function dammiUnaPromisePersona(): Promise<Persona> {//qui il return è una promise di quell'oggetto
    return new Promise<Persona>((resolve, reject) => {
      const risultato = {
        nome: "Daniele",
        cognome: "Arduini",
        numeroCasuale: Math.random()
      };
      resolve(risultato);
      //return risultato;
    });
  }
  
  let pp: Promise<Persona> = dammiUnaPromisePersona();
  pp.then(p => {
    persona = p;
  }).catch((err)=>console.error(err));
  
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
  function scaricaDocumenti(p: Persona): Promise<string[]> {
    const res = ["doc1", "doc2"];
  
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
  
  let listaDocumenti: string[] = null;
  
  let promiseDocumenti = promise.then(risultato => {
    // console.log("risultato 1 ottenuto +: " + risultato);
    console.log("scarico i documenti: ", risultato);
    let pDocumenti = scaricaDocumenti(risultato);
    return pDocumenti;
  });
  
  promiseDocumenti
    .then(lista => {
      listaDocumenti = lista;
    })
    .catch(error => {
      console.log("risultato in errore: ", error);
    });
  
  if (listaDocumenti != null) {
    console.log("Stampo i documenti da codice globale:");
    for (let i = 0; listaDocumenti != null && i < listaDocumenti.length; i++) {
      const doc = listaDocumenti[i];
      console.log("Documento+: " + doc);
    }
  } else {
    console.log(
      "Non posso stampare i documenti da codice globale perché listaDocumenti ancora null:",
      listaDocumenti
    );
  }
  
  promiseDocumenti.then(lista => {
    console.log("Stampo i documenti da dentro una promise:");
    for (let i = 0; i < lista.length; i++) {
      const doc = lista[i];
      console.log("Documento+: " + doc);
    }
  });
  
