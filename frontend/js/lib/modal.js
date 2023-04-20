let modal = null
export function openModal(event) {
    event.preventDefault();
    closeModal();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target;
    modal.addEventListener('click', closeModal);
    modal.querySelector('.modalCloseScript').addEventListener('click', closeModal);
    modal.querySelector('.modalStopScript').addEventListener('click', stopPropagation);

}

export function closeModal(event) {
    const modalAside = document.querySelectorAll("aside.modalScript")
    //event.preventDefault();
    modalAside.forEach(modal => {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', true);
        modal.removeAttribute('aria-modal');
        modal.removeEventListener('click', closeModal);
        modal.querySelector('.modalCloseScript').removeEventListener('click', closeModal);
        modal.querySelector('.modalStopScript').removeEventListener('click', stopPropagation);
    })
    //modal = null;
}


function stopPropagation(event) {
    event.stopPropagation();
}


export default {
    openModal,
    closeModal,
}