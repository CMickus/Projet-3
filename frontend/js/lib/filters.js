import RequestAPI from './requestAPI.js';
export function changeValue(buttonElem) {
    const isActive = buttonElem.getAttribute("active")
    buttonElem.setAttribute("active", !isActive)
}

export function active(button) {
    console.log(button.getAttribute("active"))
    const count = document.querySelectorAll("button[active='true']").length
    const buttoncount = document.querySelectorAll(".buttonfilter").length
    console.log(count)
    if (document.getElementById("allButton").getAttribute("active") === true) {
        changeValue(button);
        changeValue(document.getElementById("allButton"));
    } else if (count === buttoncount-1) {
        activeAll()
    } else {
        changeValue(button);
    }
    filter(button)
}


export function filter(button) {
    document.querySelectorAll('figure[categoryId~="' + button.getAttribute('id').toString() + '"]')
        .forEach(element => {
            element.classList.toggle('hidden')})
    };


export function activeAll() {
    document.querySelectorAll(".buttonfilter").forEach((element) => element.setAttribute("active", false));
    document.getElementById("allButton").setAttribute("active", true);
    
}

export default {
    active,
    filter,
    activeAll,
    changeValue,
}
