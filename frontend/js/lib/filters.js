export function active(button) {
    const buttonAll= document.getElementById('0');
    const count = document.querySelectorAll(".active").length;
    const buttoncount = document.querySelectorAll(".buttonfilter").length;
    if (count === buttoncount - 1) {
        activeAll();
    } else if (!button.classList.contains("active") && buttonAll.classList.contains("active")) {
        button.classList.add('active');
        buttonAll.classList.remove('active');
    } else if (button.classList.contains("active")) {
        activeAll();
    } else {
        button.classList.toggle('active');
    }
}

export function activeAll() {
    document.querySelectorAll(".buttonfilter").forEach((element) => {
            element.classList.remove('active');
    },)
    const allActive = document.getElementById("0")
    allActive.classList.add('active');
}

export default {
    active,
    activeAll,
}
