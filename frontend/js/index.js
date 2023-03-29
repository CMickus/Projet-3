import Display from './lib/display.js';
import RequestAPI from './lib/requestAPI.js';
import Filter, { active, activeAll} from './lib/filters.js';

async function initialisation() {
	const projects = await RequestAPI.get('http://localhost:5678/api/works');
	/*console.log(projects)*/
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
	/*console.log(category);*/
	Display.categoryFilters(category);
	/*
	category.forEach((filtre) => {
		let button = document.getElementById(filtre.id)
		button.addEventListener('click',() => Filter.filter(button,projects))
	})
	allButton.addEventListener('click',() => Display.showCardProject(projects))*/
	document.querySelector('.filters').addEventListener('click', (event) => {
		const button = event.target;
		let projectfilter = [];
		/*propagation des evenements check doc*/
		console.log(button.nodeName)
		if (button.nodeName === 'BUTTON') {
			const id = parseInt(button.id)
			console.log(button)
			console.log(id)
			if (id !=0){
				Filter.active(button);
			} else {
				Filter.activeAll();
			}
			if (document.getElementById('0').classList.contains('active')){
				projectfilter = projects;
				/*Filter.activeAll();*/
			} else {
			document.querySelectorAll('.buttonstyle').forEach((filterbutton) => {
				const filterid = parseInt(filterbutton.id);
				console.log(filterid)
				if (filterbutton.classList.contains('active')){
					projectfilter = projectfilter.concat(projects.filter((project)=> project.categoryId === filterid));
				}
				})
				console.log(projectfilter)
			}
			Display.showCardProject(projectfilter);
			/*const id = parseInt(button.id);*/
			/*const gallery = document.querySelector(".gallery")
			gallery.forEach()*/
			/*const buttons = document.querySelector('.filters')
			console.log(buttons)
			buttons*/
			/*if (id === 0) {
				projectfilter = projects;
				Filter.activeAll();
			} else if (id > 0) {
				Filter.active(button);
				const gallery = document.querySelector(".gallery")
				document.querySelectorAll('.filters').forEach((element) => {
					const elemId = parseInt(element.id)
					console.log(elemId)
					if (element.className === "active") {
						/*projectfilter += projects.forEach((project) => project.categoryId === elemId);
						projectfilter += projects.filter(project=> project.categoryId === elemId);
					} 
				})
			}*/
			/*projectfilter = projects.filter((project)=> project.categoryId === id);*/
		}
	}
	)

	document.querySelector('.loginButton').addEventListener('click',async () => {
		const user = { email: document.getElementById('username').value,
			password: document.getElementById('password').value,}

		const reponse = await requestAPI.get('http://localhost:5678/api/users/login');
		
		/*
		let response = await fetch('http://localhost:5678/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(user)
			});*/
			/*
			if ( user === "sophie.bluel@test.tld" && password ==="S0phie"){
				alert("Connecting");
				document.location = "./index.html"
			}*/
	})
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