import Display from './lib/display.js';
import RequestAPI from './lib/requestAPI.js';
import Filter, { changeValue } from './lib/filters.js';

async function initialisation (){
const projects = await  RequestAPI.get('http://localhost:5678/api/works');
console.log(projects)
if (projects === -1){
	alert('Server Out!');
	return
}
Display.showCardProject(projects);

const filtres = await RequestAPI.get('http://localhost:5678/api/categories');
console.log(filtres);
Display.categoryFilters(filtres);

let allButton = document.getElementById("allButton")
filtres.forEach((filtre) => {
	let button = document.getElementById(filtre.id)
	button.addEventListener('click',() => Filter.filter(button))
})
allButton.addEventListener('click',() => Display.showCardProject(projects))
allButton.addEventListener('click',Filter.activeAll)

}

initialisation();

/* concept DRY don't repeat yourself KISS keep it simple and stupid*/
/* single responsability les fichier n'ont qu'une seule responsabilité*/ 
/*
let htmlProject = '';

appel à l'api pas besoin d'un let ou const si on fait dynamiquement à la palce on a les variable dans les promesses
fetch('http://localhost:5678/api/works')
creation d'un json avec objet; then c'est quand j'ai une reponse
	.then((response) => response.json())
	maintenant on a la reponse on appele l'array avec son nom de variable ici data qui est donc un array json ici c'est des objets chacun
	ont deux propriété utilisé ici imgurl et title
	.then((data) => {
			console.log(data)
			Display.showCardProject(data)
			/*on récupère la fonction d'un autre document et on l'utilise
		}
	)

fetch('http://localhost:5678/api/categories')
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
		Display.categoryFilters(data)
	})
*/