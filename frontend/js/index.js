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
	}
	document.getElementById('logout').addEventListener('click', () => {
		localStorage.clear('userid','token');
		document.getElementById('connexion').innerHTML = '<a href="./login.html">login</a>';
		document.querySelectorAll('.connexionOnOff').forEach((balise) =>{
			balise.style.display = 'none'; });
		Display.categoryFilters(category);
	})

	Display.modalPictures(projects);
	
	//document.querySelector

	document.querySelectorAll('.modalScript').forEach(element =>{
		element.addEventListener('click', /*() =>{
      if (element.classList.contains('modal2')){
        Modal.closeModal(element)
      }*/
      Modal.openModal);
	})

	window.addEventListener('keydown', event => {
		if (event.key === "Escape" || event.key === "ESC"){
			Modal.closeModal(event);
		}
	})

	document.querySelectorAll('.projectDelete').addEventListener('click', target => {
		RequestAPI.del("http://localhost:5678/api/works/"+target.id);
	})
/*
document.querySelector('.addPicture').addEventListener('click', event => {
		const file ={
			dom: document.getElementById('filePicture'),
			binary: null,
		}

		
  // Use the FileReader API to access file content
  const reader = new FileReader();

  // Because FileReader is asynchronous, store its
  // result when it finishes reading the file
  reader.addEventListener("load", () => {
    file.binary = reader.result;
  });

  // At page load, if a file is already selected, read it.
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // If not, read the file once the user selects it.
  file.dom.addEventListener("change", () => {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData is our main function
  function sendData() {
    // If there is a selected file, wait until it is read
    // If there is not, delay the execution of the function
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // To construct our multipart form data request,
    // We need an XMLHttpRequest instance
    const XHR = new XMLHttpRequest();

    // We need a separator to define each part of the request
    const boundary = "blob";

    // Store our body request in a string.
    let data = "";

    // So, if the user has selected a file
    if (file.dom.files[0]) {
      // Start a new part in our body's request
      data += `--${boundary}\r\n`;

      // Describe it as form data
      data += 'content-disposition: form-data; '
      // Define the name of the form data
            + `name="${file.dom.name}"; `
      // Provide the real name of the file
            + `filename="${file.dom.files[0].name}"\r\n`;
      // And the MIME type of the file
      data += `Content-Type: ${file.dom.files[0].type}\r\n`;

      // There's a blank line between the metadata and the data
      data += '\r\n';

      // Append the binary data to our body's request
      data += file.binary + '\r\n';
    }

    // Text data is simpler
    // Start a new part in our body's request
    data += `--${boundary}\r\n`;

    // Say it's form data, and name it
    data += `content-disposition: form-data; name="${text.name}"\r\n`;
    // There's a blank line between the metadata and the data
    data += '\r\n';

    // Append the text data to our body's request
    data += text.value + "\r\n";

    // Once we are done, "close" the body's request
    data += `--${boundary}--`;

    // Define what happens on successful data submission
    XHR.addEventListener('load', (event) => {
      alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of an error
    XHR.addEventListener('error', (event) => {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', 'https://example.com/cors.php');

    // Add the required HTTP header to handle a multipart form data POST request
    XHR.setRequestHeader('Content-Type', `multipart/form-data; boundary=${boundary}`);

    // Send the data
    XHR.send(data);
  }

  // Get the form element
  const form = document.getElementById('theForm');

  // Add 'submit' event handler
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendData();
  });
});
*/
}
/*allButton.addEventListener('click',Filter.activeAll)*/
initialisation();