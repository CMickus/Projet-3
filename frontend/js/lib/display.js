export function showCardProject(projects) {
    let htmlProject = '';
    projects.forEach((project) => {
        htmlProject += `<figure categoryId="${project.categoryId}">
    <img src="${project.imageUrl}" alt="${project.title}">
    <figcaption>${project.title}</figcaption>
    </figure>`;
    })
    document.querySelector('.gallery').innerHTML = htmlProject;
}

export function modalPictures(projects) {
    let htmlPictures = '';
    projects.forEach((project) => {
        htmlPictures += `<figure categoryId="${project.categoryId}">
        <div class="iconproject">
        <button class="iconProjectStyle projectDelete"> 
        <i class="fa-solid fa-trash-can" data-id="${project.id}"></i>
        </button>
        </div>
        <img src="${project.imageUrl}" alt="${project.title}">
        <a>éditer</a>
        </figure>`
    })// on peut faire addevent listerner et donner l'id direct depuis le boutton
    document.querySelector('.projectPictures').innerHTML = htmlPictures;
    const icon = document.createElement('div');
    const iconContent = document.createElement('i');
    iconContent.className = 'fa-solid fa-up-down-left-right';
    icon.className = 'iconProjectStyle crossicon';
    icon.prepend(iconContent);
    document.querySelector('.iconproject').prepend(icon);
}

export function categoryFilters(filters) {
    let htmlFilter = ``;
    let htmlSelect = `<option value="0" selected disabled></option>`;
    filters.forEach((filter) => {
        let classes = 'buttonfilter buttonstyle';
        console.log(filter)
        if (filter.id === 0) {
            classes += ' active';
            htmlSelect += ``;
        } else {
            htmlSelect += `<option value ="${filter.id}">${filter.name}</option>`
        }
        htmlFilter += `<button id="${filter.id}" class="${classes}" type="button">${filter.name}</button>`;
    })
    document.querySelector('.filters').innerHTML = htmlFilter;
    document.querySelector('.modalSelectInput').innerHTML = htmlSelect
    document.getElementById('0').classList.toggle("buttonfilter")
}

export function displayPictureInput() {
    document.getElementById('filePicture').addEventListener('change', (event) => {
        const target =event.target
        console.log(target)
        if (target.files && target.files[0]) {
            const newImage = document.querySelector('.newImageProject');
            newImage.onload = () =>{
                URL.revokeObjectURL(newImage.src);
            }
            newImage.src = URL.createObjectURL(target.files[0]);
            document.querySelector(".pictureInput").style.display = "none";
        }
    })
}

export default {
    showCardProject,
    categoryFilters,
    modalPictures,
    displayPictureInput,
}