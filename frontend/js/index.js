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
		document.getElementById('connexion').innerHTML = '<a id="logout">logout</a>';
		function editionBar(){
			const mainDiv = document.createElement('div');
			const button = document.createElement('button');
			const link = document.createElement('a');
			const icon = document.createElement('i');
			const buttonContent = document.createTextNode('publier les changements');
			const linkContent = document.createTextNode('Mode édition');
			icon.className = 'fa-regular fa-pen-to-square penIcon';
			mainDiv.className = "editBar";
			button.className = "publish";
			link.className = "addProject";
			button.appendChild(buttonContent);
			link.appendChild(linkContent);
			mainDiv.appendChild(icon);
			mainDiv.appendChild(link);
			mainDiv.appendChild(button);
			const currentContent = document.getElementsByTagName("header");
			document.body.prepend(mainDiv);
		}
		editionBar();
	}
	document.getElementById('logout').addEventListener('click', () => {
		localStorage.clear('userid','token');
		document.getElementById('connexion').innerHTML = '<a href="./login.html">login</a>';
	})
}
/*allButton.addEventListener('click',Filter.activeAll)*/
initialisation();