export function showCardProject(projects){
    let htmlProject = '';
    /*convention d'ecriture "(projects)" au cas ou j'ai plusieurs valeurs*/
    projects.forEach((project) => {
    htmlProject += `<figure>
    <img src="${project.imageUrl}" foo="bar" alt="${project.title}">
    <figcaption>${project.title}</figcaption>
    </figure>`;
})
    document.querySelector('.gallery').innerHTML = htmlProject;
}

export function categoryFilters(filters){
    let htmlFilter = '<button id="all" type="button">Tous</button>';
    filters.forEach((category) =>{
        htmlFilter += `<button id="${category.id}" type="button">${category.name}</button>`;
    })
    document.querySelector('.filters').innerHTML = htmlFilter;
}

export default {
    showCardProject,
    categoryFilters,
}