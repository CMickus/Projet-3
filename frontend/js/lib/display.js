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
    let htmlFilter = ``;
    filters.forEach((filter) =>{
        let classes = 'buttonfilter buttonstyle';
        console.log(filter)
        if (filter.id === 0){
            classes +=' active';  
        }
        htmlFilter += `<button id="${filter.id}" class="${classes}" type="button">${filter.name}</button>`;
    })
    document.querySelector('.filters').innerHTML = htmlFilter;
    document.getElementById('0').classList.toggle("buttonfilter")
}

export default {
    showCardProject,
    categoryFilters,
}