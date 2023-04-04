import RequestAPI from './lib/requestAPI.js';

async function initialisation() {

	console.log(document.querySelector('.loginButton'))
	document.getElementsByClassName('loginButton')[0].addEventListener('click', async (event) => {
		event.preventDefault();
		const user = { email: document.getElementById('email').value,
			password: document.getElementById('password').value,
		};
		console.log(JSON.stringify(user))
		const result = await RequestAPI.post('http://localhost:5678/api/users/login',user);
		console.log(result);
		if(result === -1){
			alert('Email ou mot de passe incorrect');
		} else {
            Object.keys(result).forEach(element => {
                window.localStorage.setItem(element, result[element])
            });
			window.location.href = './index.html';
		}
	})

}
initialisation();
