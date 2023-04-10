import Display from './lib/display.js';
import RequestAPI from './lib/requestAPI.js';
import Filter from './lib/filters.js';
import Modal from './lib/modal.js' ;

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
		document.querySelectorAll('.connexionOnOff').forEach((balise) =>{
			balise.style.display = null; });
		document.querySelector('.filters').innerHTML = '';
		/*function editionBar(){
			const laDiv = `
			<i class="fa-regular fa-pen-to-square penIcon"></i>
			<a href="#modal" class="addProject modalScript">Mode édition</a>
			<button class="publish">Publier les changements</button> 
			`
			/*const mainDiv = document.createElement('div');
			const button = document.createElement('button');
			//const link = document.createTextNode('a');
			const icon = document.createElement('i');
			const buttonContent = document.createTextNode('publier les changements');
			//const linkContent = document.createTextNode('Mode édition');
			icon.className = 'fa-regular fa-pen-to-square penIcon';
			mainDiv.className = "editBar";
			button.className = "publish";
			//link.setAttribute('href', "#modal");
			//link.className = "addProject modalScript";
			button.appendChild(buttonContent);
			//link.appendChild(linkContent);
			mainDiv.appendChild(icon);
			//mainDiv.appendChild(link);
			mainDiv.appendChild(button);
			document.querySelector('.editBar').innerHTML = laDiv;
		}
		editionBar();*/
	}
	document.getElementById('logout').addEventListener('click', () => {
		localStorage.clear('userid','token');
		document.getElementById('connexion').innerHTML = '<a href="./login.html">login</a>';
		document.querySelectorAll('.connexionOnOff').forEach((balise) =>{
			balise.style.display = 'none'; });
		Display.categoryFilters(category);
	})

	let modal = null
	Display.modalPictures(projects);
	
	//document.querySelector

	document.querySelectorAll('.modalScript').forEach(element =>{
		element.addEventListener('click', Modal.openModal);
	})

	window.addEventListener('keydown', event => {
		if (event.key === "Escape" || event.key === "ESC"){
			Modal.closeModal(event);
		}
	})

	document.querySelectorAll('.projectDelete').addEventListener('click', target => {
		RequestAPI.del("http://localhost:5678/api/works/"+target.id);
	})
}
/*allButton.addEventListener('click',Filter.activeAll)*/
initialisation();