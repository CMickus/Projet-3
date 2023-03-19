import RequestAPI from './requestAPI.js';
export function changeValue (bool){
    bool = !bool
    console.log(bool)
}

export function active(){
    const allButton = [buttonObjetcs, buttonAppartements, buttonHotelRest];
    const count = allButton.filter(Boolean).length;
	if (buttonAll === true){
        this.changeValue();
		changeValue(buttonAll);
	} else if (count.length == (allButton.length - 1)){
		buttonAppartements = false;
		buttonHotelRest = false;
		buttonObjetcs = false;
		buttonAll = true;
	} else {
		this.changeValue();
	}
	console.log(buttonAll,buttonAppartements,buttonObjetcs,buttonHotelRest)
}


async function filter(i,buttonObjetcs,buttonAppartements,buttonHotelRest){
    const allButton = [buttonObjetcs, buttonAppartements, buttonHotelRest];
    const  projects = await RequestAPI.get('http://localhost:5678/api/works')
    console.log(projects)
        if(allButton[(i - 1)].value == true){
                    let htmlProject = '';
                    projects.forEach((project) =>{
                        if (data.numb == i){
                            htmlProject += `<figure>
                            <img src="${data.imageUrl}" foo="bar" alt="${data.title}">
                            <figcaption>${data.title}</figcaption>
                            </figure>`;
                        }
                    })
                document.querySelector('.gallery').innerHTML = htmlProject;
        }
}


export function filterdisplay(buttonObjetcs,buttonAppartements,buttonHotelRest){
    const itemfilter = document.querySelector('.filters').childElementCount
    for (let i = 1; i < itemfilter; i++){
        filter(i,buttonObjetcs,buttonAppartements,buttonHotelRest);
    }
}

export function activeAll(){
    buttonAll.value = true;
    buttonObjetcs.value = false;
    buttonAppartements.value = false;
    buttonHotelRest.value = false;
    console.log(buttonAll.value,buttonAppartements.value,buttonObjetcs.value,buttonHotelRest.value)
}

export default{
    active,
    filterdisplay,
    activeAll,
    changeValue,
}
