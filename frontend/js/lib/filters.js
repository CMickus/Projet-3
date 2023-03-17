
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


function filter(i){
    const allButton = [buttonObjetcs, buttonAppartements, buttonHotelRest];
        if(allButton[(i - 1)].value == true){
            fetch('http://localhost:5678/api/categories')
                .then((response) => response.json())
                .then((data) => {
                    let htmlProject = '';
                    data.forEach((data) =>{
                        if (data.numb == i){
                            htmlProject += `<figure>
                            <img src="${data.imageUrl}" foo="bar" alt="${data.title}">
                            <figcaption>${data.title}</figcaption>
                            </figure>`;
                        }
                    })
                document.querySelector('.gallery').innerHTML = htmlProject;
                })
        }
}

export function filterdisplay(){
    const itemfilter = document.querrySelector("filters").childElementCount
    for (i = 1; i < itemfilter; i++){
        filter(i);
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
