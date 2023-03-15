import Display from './lib/display.js';
/*import RequestAPI from './lib/requestAPI.js';*/
/*import Filter from './lib/filters.js';*/

function initialisation (){

let htmlProject = '';
/*
appel à l'api pas besoin d'un let ou const si on fait dynamiquement à la palce on a les variable dans les promesses*/
fetch('http://localhost:5678/api/works')
/*creation d'un json avec objet; then c'est quand j'ai une reponse*/
	.then((response) => response.json())
	/*maintenant on a la reponse on appele l'array avec son nom de variable ici data qui est donc un array json ici c'est des objets chacun
	ont deux propriété utilisé ici imgurl et title*/
	.then((data) => {
			console.log(data)
			Display.showCardProject(data)
			/*on récupère la fonction d'un autre document et on l'utilise*/
		}
	)

fetch('http://localhost:5678/api/categories')
	.then((response) => response.json())
	.then((data) => {
		Display.categoryFilters(data)
	})

let buttonAll ={
	value:  true,
	id: all,
}

let buttonObjetcs ={
	value:  false,
	id: 1,
}
let buttonAppartements ={
	value:  false,
	id: 2,
}
let buttonHotelRest ={
	value:  false,
	id: 3,
}


let all = document.getElementById("all")
let objects = document.getElementById("1")
let appartements = document.getElementById("2")
let hotel = document.getElementById("3")

all.addEventListener('click', activeAll)
objects.addEventListener('click',Filter.active, display)
appartements.addEventListener('click',Filter.active, display)
hotel.addEventListener('click',Filter.active, display)

function activeAll(){
		buttonAll.value = true;
		buttonObjetcs.value = false;
		buttonAppartements.value = false;
		buttonHotelRest.value = false;
		console.log(buttonAll.value,buttonAppartements.value,buttonObjetcs.value,buttonHotelRest.value)
}

}

initialisation();

/* concept DRY don't repeat yourself KISS keep it simple and stupid*/
/* single responsability les fichier n'ont qu'une seule responsabilité*/ 