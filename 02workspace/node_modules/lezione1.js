var persona = {
	"name": "Mario",
	"surname": "Rossi",
	"active": true,
	"favoriteNumber": 54,
	"birthday": {
		"day": 1,
		"month": 1,
		"year": 2000
	},
	"languages": [ "it", "en" ]
};

//accedo
var nome=persona.name;
console.log(nome);

console.log(persona.birthday.year);
persona.active = false;
console.log(persona.active);

persona.birthday="1/1/2000";
console.log(persona.birthday);

function add(a,b){
    return
    a+b;
}
console.log(add(1,2));
//questa funzione è undefined perchè il return vuole la soluzione sulla stessa riga
