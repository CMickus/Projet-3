let htmlproject = '';
/* appel à l'api pas besoin d'un let ou const si on fait dynamiquement à la palce on a les variable dans les promesses*/
fetch('http://localhost:5678/api/works')
/*creation d'un json avec objet; then c'est quand j'ai une reponse*/
	.then((response) => response.json())
	/*maintenant on a la reponse on appele l'array avec son nom de variable ici data qui est donc un array json ici c'est des objets chacun
	ont deux propriété utilisé ici imgurl et title*/
	.then((data) => data.forEach(element => {
		htmlproject += `<figure>
					<img src="${element.imageUrl}" foo="bar" alt="${element.title}">
					<figcaption>${element.title}</figcaption>
					</figure>`
					
	}))
	/*une fois avoir check chaque elelemtn de l'array on va les récupéré pour les update dans le dom ici comme on demande une classe faut préciser quel ellement de cette classe ici le premier donc l'element 0*/
	.then(() => document.getElementsByClassName('gallery').item(0).innerHTML = htmlproject);