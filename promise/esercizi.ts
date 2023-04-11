/**
 * ### promise-01.ts

Implementare la seguente funzione che restituisce una Promise di un numero casuale tra 1 e 10.
Utilizzo del metodo then() per stampare il numero in console.

function getRandomNumber01(): Promise<number> {
   // TODO
}
 */

function getRandomNumber01(): Promise<number> {
   return new Promise<number>((resolve,reject)=>{
    const nrCasuale= Math.floor(Math.random() * 10);
    resolve(nrCasuale);
   });
 }
 const promiseNrCasuale= getRandomNumber01();
 promiseNrCasuale.then(numero=>{
    console.log(numero);
 });

 /**
 * ### promise-02.ts
 *
 * Con riferimento all'esercizio precedente, modificare l'implementazione della funzione
 * in modo tale che se il numero casuale è minore o uguale a 5 la Promise viene risolta
 * con il numero stesso, altrimenti viene rifiutata con un messaggio di errore.
 * Utilizzo del metodo then() per stampare il numero in console o il metodo catch() per
 * stampare il messaggio di errore.
 *
 * function getRandomNumber02(): Promise<number> {
 *     // TODO
 * }
 */
 function getRandomNumber02(): Promise<number> {
       return new Promise<number>((resolve,reject)=>{
        const nrCasuale1=Math.floor(Math.random() * 10);
        if(nrCasuale1<=5){
            resolve(nrCasuale1);
        }else{
        
         reject("errore");
        
        }
       });
     }

     const promiseNrCasuale2=getRandomNumber02();
     promiseNrCasuale2
     .then(numero=>{
        console.log(numero);
     })
     .catch(error=>{
        console.log(error);
     });

     /**
 * ### promise-03.ts
 *
 * La funzione fornita qui sotto esegue una richiesta HTTP GET a un endpoint API REST
 * restituendo Una Promise di un oggetto JSON che rappresenta una pagina di elenco utenti.
 *
 * Estraete dalla Promise l'elenco degli utenti in un array di oggetti "User"
 * per stamparne il contenuto in console.
 *
 * ```typescript
 *
 * interface User {
 *     id: number;
 *     email: string;
 *     first_name: string;
 *     last_name: string;
 *     avatar: string;
 * }
 *
 * interface UserListResponse {
 *     page: number;
 *     per_page: number;
 *     total: number;
 *     total_pages: number;
 *     data: User[];
 *     support: {
 *         url: string;
 *         text: string;
 *     }
 * }
 *
 *
 * function getUserList(): Promise<UserListResponse> {
 *     return fetch('https://reqres.in/api/users')
 *         .then(response => {
 *             if (!response.ok) {
 *                 throw new Error(response.statusText)
 *             }
 *             return response.json() as Promise<UserListResponse>
 *         });
 * }
 * ```
 */

// interfaccia come da formato dell'oggetto JSON restituito dall'endpoint API REST
// consultabile nella documentazione all'URL https://reqres.in/, https://reqres.in/api-docs/


interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UserListResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: {
        url: string;
        text: string;
    }
}


function getUserList(): Promise<UserListResponse> {
    return fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<UserListResponse>
        });
}


const pUserList = getUserList();
pUserList
    .then(response => {
        // console.log("risultato ottenuto: ", response);

        // estraggo l'array di oggetti User
        const users: User[] = response.data;
        let i = 0;
        for (const user of users) {
            i++;
            console.log(`user ${i}: { ${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${user.avatar} }`);
        }
    })
    .catch(error => {
        console.log("risultato in errore: ", error);
    });
