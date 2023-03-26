import RequestAPI from './requestAPI.js';
/*export function changeValue(button) {
    button.classList.toggle('active');
}*/

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
    } else if (!button.classList.contains("active") && buttonAll.classList.contains("active")) {
        button.classList.add('active');
        buttonAll.classList.remove('active');
    } else {
        button.classList.toggle('active');
    }
}

export function activeAll() {
    document.querySelectorAll(".buttonfilter").forEach((element) => {
        /*const itemClass = element.className*/
            element.classList.remove('active');
    },)
    const allActive = document.getElementById("0")
    allActive.classList.add('active');
}

export default {
    active,
    activeAll,
    /*changeValue,*/
}
