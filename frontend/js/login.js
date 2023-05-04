import RequestAPI from './lib/requestAPI.js';

async function initialisation() {
	document.getElementsByClassName('loginButton')[0].addEventListener('click', async (event) => {
		event.preventDefault();
		const user = { email: document.getElementById('email').value,
			password: document.getElementById('password').value,
		};
		const result = await RequestAPI.post('http://localhost:5678/api/users/login',user);
		if(result === -1){
			const loginFail = document.querySelector('.loginError');
			loginFail.style.display = null;
		} else {
            Object.keys(result).forEach(element => {
                window.localStorage.setItem(element, result[element])
            });
			window.location.href = './index.html';
		}
	})

}
initialisation();
