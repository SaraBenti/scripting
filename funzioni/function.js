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
var f = function dado() { return Math.floor(Math.random() * 6 + 1); };
var g = function () { return Math.floor(Math.random() * 6 + 1); };
var h = function () { return Math.floor(Math.random() * 6 + 1); };
console.log(g);
console.log(h);
var hello = function () { console.log("hello!"); };
hello();
var printMessage = function (msg) { console.log(msg); };
printMessage("Ciao!");
setTimeout(function () { console.log("hello!"); }, 2000);
