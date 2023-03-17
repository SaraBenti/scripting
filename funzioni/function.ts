//funzioni
        // let funzioneFiltro=disponibile;
        // let funzioneFiltro2= function AAAA(listaProdotti:Prodotto[]):Prodotto[]{
        //     return [];
        // }
        // funzioneFiltro(listaProdotti);
//anche le fuznzioni diventano variabili
//modo per scrivere meno codice nelle funzioni: notazione a freccia
//la freccia viene inserita per far riconoscere che è una funzione
        // let funzioneFiltro3=(listaProdotti:Prodotto[]):Prodotto[]=>{
        //     return [];
        // }
//filtro 3 e 2 sono identiche
//le funzioni freccia sono chiamate anonime proprio perchè il nome che avevano prima non
//interessa più visto che viene data a un nome di una variabile che da ora .
//in poi è quello usato

let f = function dado() {
    return Math.floor(Math.random() * 6 + 1);
};

console.log("f(): ", f());

let g = () => {
    return Math.floor(Math.random() * 6 + 1);
};
let h = () => Math.floor(Math.random() * 6 + 1);

console.log("g(): ", g());
console.log("h(): ", h());

let hello = () => {
    console.log("hello!");
};
hello();

const printMessage = (msg: string): void => {
    console.log(msg);
};
printMessage("Ciao!");

setTimeout(() => {
    console.log("dentro la setTimeout, f(): ", f());
}, 5000);//esegue la funzione dopo 5 secondi

setInterval(() => {
    console.log("dentro la setInterval, f(): ", f());
}, 2000);//esegue la funzione ogni 2 secondi

//fare una funzione che fa l'orologio su un html

//le funzioni non vengono eseguite in sequenza► è diverso come lo scrivo e come viene eseguito
//base fondante del js: una pagina dinamica reagisce a degli eventi
// CALLBACK = piccole funzioni chiamate successivamente