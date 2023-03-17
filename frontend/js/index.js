import Display from './lib/display.js';
/*import RequestAPI from './lib/requestAPI.js';*/
import Filter, { changeValue } from './lib/filters.js';

function initialisation (){

/*let htmlProject = '';*/
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
		console.log(data)
		Display.categoryFilters(data)
	})

let buttonAll ={
	value:  true,
	numb: 0,
}
let buttonObjetcs ={
	value:  false,
	numb: 1,
}
let buttonAppartements ={
	value:  false,
	numb: 2,
}
let buttonHotelRest ={
	value:  false,
	numb: 3,
}

let allButton = document.getElementById("allButton")
let objects = document.getElementById("1")
let appartements = document.getElementById("2")
let hotel = document.getElementById("3")

allButton.addEventListener('click', Display.showCardProject)
objects.addEventListener('click',Filter.active, Filter.filterdisplay)
appartements.addEventListener('click',Filter.active, Filter.filterdisplay)
hotel.addEventListener('click',Filter.active, Filter.filterdisplay)

changeValue(buttonHotelRest)

}

initialisation();

/* concept DRY don't repeat yourself KISS keep it simple and stupid*/
/* single responsability les fichier n'ont qu'une seule responsabilité*/ 