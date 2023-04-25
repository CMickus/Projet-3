let modal = null
export function openModal(event) {
    event.preventDefault();
    closeModal();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.classList.remove('hidden');
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
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', true);
        modal.removeAttribute('aria-modal');
        modal.removeEventListener('click', closeModal);
        modal.querySelector('.modalCloseScript').removeEventListener('click', closeModal);
        modal.querySelector('.modalStopScript').removeEventListener('click', stopPropagation);
    })
    //modal = null;
}

/* essayer de plutot faire ouvrir les deux mais n'en afficher qu'une ( plutot une seule modale et dedans deux écrans) attention quand je ferme je ferme les deux quand on la rouvre on soit sur qu'on est bien sur la première 
idée leur donner des positions 1 et 2 qui s'alterne à la fermeture tout réinitialisée a test*/

function stopPropagation(event) {
    event.stopPropagation();
}


export default {
    openModal,
    closeModal,
}