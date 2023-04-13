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
		function editionBar(){ // mettre dans display c'ets du display deux fonction le editionOn et editionOff
			const laDiv = `
			<i class="fa-regular fa-pen-to-square penIcon"></i>
			<a href="#modal" class="addProject modalScript">Mode édition</a>
			<button class="publish">Publier les changements</button> 
			`
			document.querySelector('.editBar').innerHTML = laDiv;
		}
		editionBar();
	}
	document.getElementById('logout').addEventListener('click', () => {
		localStorage.clear('userid','token');
		document.getElementById('connexion').innerHTML = '<a href="./login.html">login</a>';
	})

	let modal = null

	function openModal  (event) {
		event.preventDefault();
		const target = document.querySelector(event.target.getAttribute('href'));
		target.style.display = null;
		target.removeAttribute('aria-hidden');
		target.setAttribute('aria-modal', 'true');
		modal = target;
		modal.addEventListener('click', closeModal);
		modal.querySelector('.modalCloseScript').addEventListener('click', closeModal);
		modal.querySelector('.modalStopScript').addEventListener('click', stopPropagation);

	}

	function closeModal  (event) {
		if (modal === null){
			return
		}
		event.preventDefault();//voir précisément ce que c'est
		modal.style.display = "none";
		modal.setAttribute('aria-hidden', true);
		modal.removeAttribute('aria-modal');
		modal.removeEventListener('click', closeModal);
		modal.querySelector('.modalCloseScript').removeEventListener('click', closeModal);
		modal.querySelector('.modalStopScript').removeEventListener('click', stopPropagation);
		modal = null;
	}

	function stopPropagation (event){
		event.stopPropagation();
	}

	document.querySelectorAll('.modalScript').forEach(element =>{
		element.addEventListener('click', openModal);
	})

	window.addEventListener('keydown', event => {
		if (event.key === "Escape" || event.key === "ESC"){
			closeModal(event);
		}
	})
}
/*allButton.addEventListener('click',Filter.activeAll)*/
initialisation();