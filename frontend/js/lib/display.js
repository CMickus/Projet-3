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

export function modalPictures(projects){
    let htmlPictures = '';
    projects.forEach((project) =>{
        htmlPictures += `<figure categoryId="${project.categoryId}">
        <div class="iconproject">
        <button class="iconProjectStyle projectDelete" id="${project.id}">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>
        <img src="${project.imageUrl}" alt="${project.title}">
        <a>éditer</a>
        </figure>`
    })
    document.querySelector('.projectPictures').innerHTML = htmlPictures;
    const icon = document.createElement('div');
    const iconContent = document.createElement('i');
    iconContent.className = 'fa-solid fa-up-down-left-right';
    icon.className = 'iconProjectStyle crossicon';
    icon.prepend(iconContent);
    document.querySelector('.iconproject').prepend(icon);
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
    modalPictures,
}