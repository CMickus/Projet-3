let htmlProject = '';
/*
appel à l'api pas besoin d'un let ou const si on fait dynamiquement à la palce on a les variable dans les promesses*/
fetch('http://localhost:5678/api/works')
/*creation d'un json avec objet; then c'est quand j'ai une reponse*/
	.then((response) => response.json())
	/*maintenant on a la reponse on appele l'array avec son nom de variable ici data qui est donc un array json ici c'est des objets chacun
	ont deux propriété utilisé ici imgurl et title*/
	.then((data) => data.forEach(element => {
		htmlProject += `<figure>
					<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
					<figcaption>${element.title}</figcaption>
					</figure>`
					
	}))
	/*une fois avoir check chaque elelemtn de l'array on va les récupéré pour les update dans le dom ici comme on demande une classe faut préciser quel ellement de cette classe ici le premier donc l'element 0
	*/.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
/*
idée pour le filtre avoir un bouton qui demande ce que l'on veut ( trois options) apèrs la ligne 5 faire un if else:
if 1 === true { data.categoryID.forEach et rajouter tout le reste } le if aura deux autres conditions pour le moment 2 === true et 3 === true correspondant aux ID indiqué sur l'API
penser à rajouter 4 boutons pour les filtres du coup
mettre la ligne 16 après les if: si les filtres peuvent prendre deux conditions ils prendront plus de place et de facon générale c'est plus propre*/

let buttonAll = true;
let buttonObjetcs = false;
let buttonAppartements = false;
let buttonHotelRest = false;

let all = document.getElementById("all")
let objects = document.getElementById("objects")
let appartements = document.getElementById("appartements")
let hotel = document.getElementById("hotelAndRestaurant")

all.addEventListener('click', activeAll, display)
objects.addEventListener('click',active1, display)
appartements.addEventListener('click',active2, display)
hotel.addEventListener('click', active3, display)

function activeAll(){
		buttonAll = true;
		buttonObjetcs = false;
		buttonAppartements = false;
		buttonHotelRest = false;
}

function active1(){
	if (buttonAll === true){
		buttonAll = false;
		buttonObjetcs = true;
	} else if (buttonAppartements === true && buttonHotelRest === true && buttonObjetcs === false ){
		buttonAppartements = false;
		buttonHotelRest = false;
		buttonObjetcs = false;
		buttonAll = true;
	} else {
		buttonObjetcs = true
	}
}

function active2(){
	if(buttonAll === true){
		buttonAll= false;
		buttonAppartements = true;
	} else if ( buttonAppartements=== false && buttonHotelRest === true && buttonObjetcs === true){
		buttonAppartements = false;
		buttonHotelRest = false;
		buttonObjetcs = false;
		buttonAll = true;
	} else {
		buttonAppartements = true
	}
}

function active3(){
	if (buttonAll === true){
		buttonAll = false;
		buttonHotelRest = true;
	} else if ( buttonAppartements=== true && buttonHotelRest === false && buttonObjetcs === true){
		buttonAppartements = false;
		buttonHotelRest = false;
		buttonObjetcs = false;
		buttonAll = true;
	} else {
		buttonHotelRest = true
	}
}

function display(){
	if (buttonAll === true){
		fetch('http://localhost:5678/api/works')
			.then((response) => response.json())
			.then((data) => data.forEach(element => {
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`				
		}))
			.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	} else if (buttonAppartements === true && buttonHotelRest === true && buttonObjetcs === false){
		fetch('http://localhost:5678/api/works')
		.then((response) => response.json())
		.then((data) => data.forEach(element => {
			if ( element.id === 2 || element.id === 3 ){
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`
		}}))
		.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	} else if (buttonAppartements === true && buttonHotelRest === false && buttonObjetcs === true){
		fetch('http://localhost:5678/api/works')
		.then((response) => response.json())
		.then((data) => data.forEach(element => {
			if ( element.id === 2 || element.id === 1 ){
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`
		}}))
		.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	} else if (buttonAppartements === false && buttonHotelRest === true && buttonObjetcs === true){
		fetch('http://localhost:5678/api/works')
		.then((response) => response.json())
		.then((data) => data.forEach(element => {
			if ( element.id === 3 || element.id === 1 ){
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`
		}}))
		.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	} else if (buttonAppartements === false && buttonHotelRest === false && buttonObjetcs === true){
		fetch('http://localhost:5678/api/works')
		.then((response) => response.json())
		.then((data) => data.forEach(element => {
			if (element.id === 1 ){
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`
		}}))
		.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	} else if (buttonAppartements === false && buttonHotelRest === true && buttonObjetcs === false){
		fetch('http://localhost:5678/api/works')
		.then((response) => response.json())
		.then((data) => data.forEach(element => {
			if (element.id === 3 ){
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`
		}}))
		.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	} else if (buttonAppartements === true && buttonHotelRest === false && buttonObjetcs === false){
		fetch('http://localhost:5678/api/works')
		.then((response) => response.json())
		.then((data) => data.forEach(element => {
			if (element.id === 2 ){
				htmlProject += `<figure>
						<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
						<figcaption>${element.title}</figcaption>
						</figure>`
		}}))
		.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlProject);
	}
}	