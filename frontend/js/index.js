import Display from './lib/display.js';
import RequestAPI from './lib/requestAPI.js';
import Filter, { active, activeAll} from './lib/filters.js';
import requestAPI from './lib/requestAPI.js';

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

	document.querySelector('.loginButton').addEventListener('click', async (event) => {
		event.preventDefault();
		const user = { email: document.getElementById('username').value,
			password: document.getElementById('password').value,};

		const result = await requestAPI.post('http://localhost:5678/api/users/login',user);
		console.log(result);
		if(result === -1){
			alert('Email ou mot de passe incorrect');
		} else {
			window.localStorage(result);
			window.location('./index.html');
		}
	})
		/*
		fetch('http://localhost:5678/api/users/login',{
			method: "POST",
			headers: {/*il décrit dans la partie http ce qui se passe en get on a pas besoin de le préciser
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user), body pour le contenu du post et stringyfy puisque http connais que string et binnaire*/
		
		//on veut qu'il renvoit un jwt json web token si c'est bon il renvoit 200 avec le token (jwt) c'est la clef de sécurité
		// il faudra le conserver pour pouvoir modifer les projets ajout et suppression 
		//conservation du token via local storage check ce que c'est 
		//creer dans requestapi une fonciton post dans le meme model que le get mais avec un body qui existe
			/*.then((response) => response.json())
			.then((user) =>{
				alert("connecting")
				document.location = "./index.html";
			})
			.catch((error) => {
				alert("Email ou mot de passe incorrect")
				console.log(error)
			})
			*/
			/*comprendre comment sont traité les données ce qu'est la method post et a quoi sert le header 
			method post envoi les données recueillies sur la page suivant pour le traitement des donnes (?)
			JSON de ce que j'ai compris :
			voir ce qu'il faut mettre dans content type 
			je suppose qu'il faut comparer les données prises dans le formulaire avec chacun des des objet importés de l'api jusqu'a ce que ce soit compatible
			une idée serait un async / await on récupère les données dans un premier temps puis on les utilise pour la comparaison a voir si c'est le plus optimal
			necessite plus de connaissance sur methode post get et ce qu'est le JSON puisque les donnés lisible sur l'api sont difficile a comprendre^^" mais je suppose que le JSON. sert à "traduire" tout ça*/ 
			/*demander comment on gère les fichier JS quand on a plusieurs fichers HTML ou bien on creer integralement le ficher html via du JS?*/
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