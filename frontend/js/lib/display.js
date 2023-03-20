export function showCardProject(projects){
    let htmlProject = '';
    projects.forEach((project) => {
    htmlProject += `<figure categoryId="${project.categoryId}">
    <img src="${project.imageUrl}" alt="${project.title}">
    <figcaption>${project.title}</figcaption>
    </figure>`;
})
    document.querySelector('.gallery').innerHTML = htmlProject;
}

export function categoryFilters(filters){
    let htmlFilter = `<button id="allButton" active="true" class="buttonstyle" type="button">Tous</button>`;
    filters.forEach((filter) =>{
        htmlFilter += `<button id="${filter.id}" active="false" class="buttonfilter, buttonstyle" type="button">${filter.name}</button>`;
    })
    document.querySelector('.filters').innerHTML = htmlFilter;
}

export default {
    showCardProject,
    categoryFilters,
}