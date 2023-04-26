let modal = null
export function openModal(event) {
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

export function closeModal(event) {
    //if (modal === null) {
      //  return
    //}
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', true);
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.modalCloseScript').removeEventListener('click', closeModal);
    modal.querySelector('.modalStopScript').removeEventListener('click', stopPropagation);
    //modal = null;
    const modal1 = document.querySelector('.modal1')
    const modal2 = document.querySelector('modal2')
    if(modal1.classList.contains('modalBottom')){
        modal1.classList.remove('modalBottom');
        modal1.classList.add('modalTop');
        modal2.classList.remove('modalTop');
        modal2.classList.add('modalBottom');
    }
    
    
}

export function changeModal(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.classList.contains('modalBottom')
        target.classList.remove('modalBottom');
        target.classList.add('modalTop')
}
/* essayer de plutot faire ouvrir les deux mais n'en afficher qu'une ( plutot une seule modale et dedans deux écrans) attention quand je ferme je ferme les deux quand on la rouvre on soit sur qu'on est bien sur la première 
idée leur donner des positions 1 et 2 qui s'alterne à la fermeture tout réinitialisée a test*/

function stopPropagation(event) {
    event.stopPropagation();
}


export default {
    openModal,
    closeModal,
    changeModal,
}