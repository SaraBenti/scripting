/**
 * Definisci un'interfaccia per rappresentare
 *  una persona con le seguenti proprietà: 
 * nome (stringa), età (numero) e indirizzo
 *  (oggetto con proprietà strada, città e 
 * stato). Crea una funzione che accetta 
 * un'istanza di questa interfaccia come 
 * parametro e stampa le proprietà della
 *  persona.
 */
interface IPersona{
    nome: string;
    eta: number;   
    indirizzo: {
         strada: string;
         citta: string;
         stato: string;
    }
}
let PersonaI: IPersona={nome: 'Mario',eta:28, indirizzo:{strada:'via Rossi',
citta:'Rimini',stato:'Italia'}};
function stampaPersona(p:IPersona):void{
    console.log(p.indirizzo);
}
stampaPersona(PersonaI);
