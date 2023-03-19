export function showCardProject(projects){
    let htmlProject = '';
    projects.forEach((project) => {
    htmlProject += `<figure>
    <img src="${project.imageUrl}" foo="bar" alt="${project.title}">
    <figcaption>${project.title}</figcaption>
    </figure>`;
})
    document.querySelector('.gallery').innerHTML = htmlProject;
}

export function categoryFilters(filters){
    let htmlFilter = `<button id="allButton" type="button">Tous</button>`;
    filters.forEach((filter) =>{
        htmlFilter += `<button id="${filter.id}" type="button">${filter.name}</button>`;
    })
    document.querySelector('.filters').innerHTML = htmlFilter;
}

export default {
    showCardProject,
    categoryFilters,
}