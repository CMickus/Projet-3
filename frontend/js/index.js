import Display from './lib/display.js';
import RequestAPI from './lib/requestAPI.js';
import Filter from './lib/filters.js';
import Modal from './lib/modal.js';

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
		if (button.nodeName === 'BUTTON') {
			const id = parseInt(button.id)
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
					if (filterbutton.classList.contains('active')) {
						projectfilter = projectfilter.concat(projects.filter((project) => project.categoryId === filterid));
					}
				})
			}
			Display.showCardProject(projectfilter);
		}
	})
	if (localStorage.getItem('userId') == '1') {
		document.getElementById('connexion').innerHTML = '<a id="logout" class="logout">logout</a>';
		document.querySelectorAll('.connexionOnOff').forEach((balise) => {
			balise.style.display = null;
		});
		document.querySelector('.filters').innerHTML = '';
	}
	document.getElementById('logout').addEventListener('click', () => {
		localStorage.clear('userid', 'token');
		document.getElementById('connexion').innerHTML = '<a href="./login.html">login</a>';
		document.querySelectorAll('.connexionOnOff').forEach((balise) => {
			balise.style.display = 'none';
		});
		Display.categoryFilters(category);
	})

	Display.modalPictures(projects);

	document.querySelector('#portfolio a').addEventListener('click',()=>{
		Modal.openModal();
	})

	document.querySelectorAll('.modalScriptChange').forEach(element =>{
		element.addEventListener('click', (event)=>{
			Modal.changeModal(event);
		})
	})

	window.addEventListener('keydown', event => {
		if (event.key === "Escape" || event.key === "ESC") {
			Modal.closeModal(event);
		}
	})

	document.querySelector('.projectPictures').addEventListener('click', event => {
		const button = event.target;
		if (button.dataset.id != undefined) {
			const userToken = localStorage.getItem('token');
			RequestAPI.del("http://localhost:5678/api/works/" + button.dataset.id, userToken)
		}
	})


	document.getElementById('addFilePicture').addEventListener('click', (event) => {
		event.preventDefault();
		console.log(event)
		document.getElementById('filePicture').click();
		Display.displayPictureInput();
	})




	document.querySelector('.modalInputs').addEventListener('submit', async (event) => {
		console.log(document.querySelector('.modalInputs'))
		event.preventDefault();
		let projectData = new FormData();
		const formTitle = document.getElementById('titleProject')
		const formCategory = document.getElementById('categorySelect')
		const formPicture = document.getElementById('filePicture')
		console.log(formTitle.value)
		console.log(formCategory.value)
		console.log(formPicture.files[0])
		projectData.append('image', formPicture.files[0]);
		projectData.append('title', formTitle.value);
		projectData.append('category', formCategory.value);
		console.log(projectData)
		if (!formTitle.value) {
			document.querySelector('.errorTitle').innerHTML = "Veuillez enregistrer un titre";
		}
		if (formCategory.value === 0) {
			document.querySelector('.errorCategory').innerHTML = "Category invalide";
		}
		if (/\.(jpg|png)$/i.test(formPicture.files[0].name) === false || formPicture.files[0].size > 4194304) {
			document.querySelector('.errorPicture').innerHTML = "Mauvais type de fichier ou ficher trop lourd";
			formPicture.reset();
		}
		const userToken = localStorage.getItem('token');
		console.log(formTitle.checkValidity())
		console.log(formPicture.checkValidity())
		console.log(formCategory.checkValidity())
		console.log(formPicture.files[0].size)
		if (formTitle.checkValidity() && /\.(jpg|png|)$/i.test(formPicture.files[0].name) === true && !formCategory.value == 0 && formPicture.files[0].size < 4194304) {
			const result = await RequestAPI.adminPost('http://localhost:5678/api/works', projectData, userToken)
			console.log(result);
			document.querySelector('.modalInputs').reset();
			const newImage = document.querySelector('.newImageProject');
			URL.revokeObjectURL(newImage.src);
		}
	})

	const formTitle = document.getElementById('titleProject');
	const formCategory = document.getElementById('categorySelect');
	const formPicture = document.getElementById('filePicture');

	formTitle.addEventListener('input', ()=>{
		Display.changeColor();
	})
	formCategory.addEventListener('input',()=>{
		Display.changeColor();
	})
	formPicture.addEventListener('input',()=>{
		Display.changeColor();
	})

}
initialisation();