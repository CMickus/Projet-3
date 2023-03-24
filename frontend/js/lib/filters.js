import RequestAPI from './requestAPI.js';
export function changeValue(button) {
    button.classList.toggle('active');
}

/*essayer avec un classList.toggle(active) plutot*/

export function active(button) {
    console.log(button.className);
    const buttonAll= document.getElementById('0');
    const count = document.querySelectorAll(".active").length;
    console.log(count);
    const buttoncount = document.querySelectorAll(".buttonfilter").length;
    console.log(buttoncount)
    if (count === buttoncount - 1) {
        activeAll();
    } else if (button.className != "active" && buttonAll.className === "active") {
        changeValue(button);
        changeValue(buttonAll);
    } else {
        changeValue(button);
    }
}

/*
export function filter(button) {
        button.classList.toggle('active')
    };
*/

export function activeAll() {
    document.querySelectorAll(".buttonfilter").forEach((element) => {
        /*const itemClass = element.className*/
        if (element.className === "active") {
            element.classList.toggle('active');
        }
    },)
    const allActive = document.getElementById("0")
    if (allActive.className != 'active'){
        changeValue(allActive);
    }
}

export default {
    active,
    /*filter,*/
    activeAll,
    changeValue,
}
