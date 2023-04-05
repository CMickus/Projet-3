import Display from './lib/display.js';
import RequestAPI from './lib/requestAPI.js';
import Filter, { active, activeAll } from './lib/filters.js';

async function initialisation() {
	const projects = await RequestAPI.get('http://localhost:5678/api/works');
	if (projects === -1) {
		alert('Server Out!');
		return
	}
	Display.showCardProject(projects);

	const filtres = await RequestAPI.get('http://localhost:5678/api/categories');
	const category = [
		{ id: 0, name: 'Tous' },
		...filtres
	]
	Display.categoryFilters(category);
	document.querySelector('.filters').addEventListener('click', (event) => {
		const button = event.target;
		let projectfilter = [];
		/*propagation des evenements check doc*/
		console.log(button.nodeName)
		if (button.nodeName === 'BUTTON') {
			const id = parseInt(button.id)
			console.log(button)
			console.log(id)
			if (id != 0) {
				Filter.active(button);
			} else {
				Filter.activeAll();
			}
			if (document.getElementById('0').classList.contains('active')) {
				projectfilter = projects;
			} else {
				document.querySelectorAll('.buttonstyle').forEach((filterbutton) => {
					const filterid = parseInt(filterbutton.id);
					console.log(filterid)
					if (filterbutton.classList.contains('active')) {
						projectfilter = projectfilter.concat(projects.filter((project) => project.categoryId === filterid));
					}
				})
				console.log(projectfilter)
			}
			Display.showCardProject(projectfilter);
		}
	})
	console.log(localStorage)
	if (localStorage.getItem('userId') == '1') {
		console.log('lol')
		document.getElementById('connexion').innerHTML = '<a>logout</a>';
	}
}
/*allButton.addEventListener('click',Filter.activeAll)*/
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