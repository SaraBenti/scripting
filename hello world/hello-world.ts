console.log("Hello World!");

function saluto(msg: string) { 
    console.log("Ciao " + msg);
}
saluto("5");

/**adesso guardiamo i tipi
 * 
 */

//booleano
let fatto: boolean=true; //or false

//number
let anno:number=2018;

//stringa
let colore1:string="rosso";
let colore2;
colore2="blu";

//array(sequenze di tipi di dato primitivo)
let elenco1:number[]=[1,2,3,4];
let elenco2:Array<number>=[1,2,3,4,5,6];
//sono la stessa cosa per dire che l'array contiene dei numeri
let elenco3:string[];//se inserisco il numero all'interno delle quadre stabilisco quanti elementi
// deve avere l'array quindi la sua dimensione
elenco3 = ["a","b"];

//Tupla(array composto da numeri e stringhe)
let indirizzo:[string,number];
indirizzo=["corso d'augusto",4];

//Any non fa la gestione dei tipi
let nonsaprei:any=4;
nonsaprei="pippo";
nonsaprei= true;

//Enum consente di specificare il suo valore creando un nuovo tipo
//tipo Colore che non è stringa,numero,booleano..e sono possibili solo quelli che abbiamo 
//dato nella definizione
//nuovo tipo Colore che può essere solo Rosso, Giallo, Blu
//il traduttore in js assegna a rosso=0, giallo=1,blu=2
enum Colore {
    Rosso, Giallo, Blu};
let c: Colore = Colore.Rosso;
c=0;
//in js scrive una funzione che converte da stringa a numero
enum HTTPStatus{
    NOT_FOUND=404,
    BAD_REQUEST=400,
    INTERNAL_SERVER_ERROR=500,
    NOT_PERMITTED=403,
    NOT_AUTHENTICATED=401
};
let httpstatus:HTTPStatus;
httpstatus=HTTPStatus.NOT_FOUND;
console.log("httpstatus = "+httpstatus);

enum HTTPStatusMessage{
    NOT_FOUND=" 404 - Not Found",
    BAD_REQUEST= "400 - Bad Request",
    INTERNAL_SERVER_ERROR= "500 - Internal Server Error",
    NOT_PERMITTED= "403 - Not Permitted",
    NOT_AUTHENTICATED= "401 - Not Authenticated"
};
let httpstatusMessage:HTTPStatusMessage;
httpstatusMessage=HTTPStatusMessage.NOT_FOUND;
console.log("httpstatusMessage = " + httpstatusMessage);

//Void quando non vogliamo usare nessun tipo
//in questo caso la funzione non deve ritirnare nulla
//void è utile per il ritorno delle funzioni

function avviso(msg:string): void {
console.log("Premi OK per continuare.");
};
avviso("errore");

//Null e undefined
let nonusabile1: null = null;
let nonusabile2: undefined = undefined;
//Sono dei “sotto-tipi”, assegnabili anche agli altri tipi!
//servono se per qualche ragione 
//nella pratica non servono: sono utili quando ad una variabile si vuol concedere un valore stringa oopure null
//ad esempio uando l'utente ha dei campi opzionali 

//composizione di tipi
let variabileFacoltativa: string | null;//può essere stringa or null
variabileFacoltativa=null;
//le composizioni di tipo si possono fare su qualunque tipo
let interaOStringa: number | string;
interaOStringa=1;
interaOStringa="ciaone";
//sugli oggetti è molto più utilizzato che sui tipi primitivi
//(animale di tipo CANE o GATTO)

//tipi dati personalizzati
type UserData = {
    id: number;
    name: string;
    surname?: string;// il surname è facoltativo
    };
    
    type UserAddress= {
    address: string;
    city: string;
    state?: string;
    country: string;
    };
    
    let user1:UserData;
    user1={
        id:12500,
        name:"Sara"
    };

    let user2:UserAddress;
    user2={
        address:"via Milano",
        city:"Rimini",
        state:"Italia",
        country:"Viserba"
    };

    let userProfile1:UserData | UserAddress; //con l'or lo posso compilare o in un modo o in un altro
    let userProfile2:UserData & UserAddress;
    //devo inserire tutti i dati obbligatori
    type User=UserData & UserAddress;
    //oppure identifico un nuovo tipo che comprende entrambi
    // i tipi non vengono tradotti in js perchè sono solo degli artefatti per il controllo

    //Interfacce
    //non molto diverso dai tipi, si possono usare entrambi
    // ogni interfaccia rappresenta un sottoinsieme di attributi coerenti
    //interface .. extends.. è come se fosse nei tipi un &
    //l'operatore extends unisce gli attributi
    interface IUserData {
        id: number;
        name: string;
        surname?: string;
        }
        
        interface IUserAddress {
        address: string;
        city: string;
        state?: string;
        country: string;
        }
        
        
        let dataI: IUserData = { id: 1, name: 'Daniele' };
        
        let addressI: IUserAddress =
        { address: 'via Flaminia, 12', city: 'Rimini', country: 'Italy' };
        
        interface IUser extends IUserData, IUserAddress {}
        let userI: IUser = { id: 2, name: 'Mario', surname: 'Rossi',
        address: 'via Dante, 4', city: 'Rimini', country: 'Italy' };
         
        function spedisciAIndirizzo(addr:IUserAddress):void{
            console.log("spedisci a indirizzo: ",addr.address);
        }
        spedisciAIndirizzo(userI);//in questo caso mi estrae solo il sottoinsieme dell'indirizzo via Dante 4
        
