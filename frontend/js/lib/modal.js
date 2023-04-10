
 export function openModal  (event) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target;
    modal.addEventListener('click', closeModal);
    modal.querySelector('.modalCloseScript').addEventListener('click', closeModal);
    modal.querySelector('.modalStopScript').addEventListener('click', stopPropagation);

}

export function closeModal  (event) {
    if (modal === null){
        return
    }
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', true);
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.modalCloseScript').removeEventListener('click', closeModal);
    modal.querySelector('.modalStopScript').removeEventListener('click', stopPropagation);
    modal = null;
}

function stopPropagation (event){
    event.stopPropagation();
}


export{
    openModal,
    closeModal,
}
