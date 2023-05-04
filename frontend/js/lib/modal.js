let modal = null
export function openModal() {
    //event.preventDefault();
    const target = document.getElementById('modal');
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target;
    modal.addEventListener('click', closeModal);
    const modal1 = document.getElementById(modal1);
    const modal2 = document.getElementById(modal2);
    if (modal2.classList.contains('modalTop')){
        modal1.classList.remove('modalBottom');
        modal1.classList.add('modalTop');
        modal2.classList.remove('modalTop');
        modal2.classList.add('modalBottom');
    }
}

export function closeModal(event) {
    //if (modal === null) {
      //  return
    //}
    //event.preventDefault();
    console.log('modal',modal.id, 'target', event.target.id);
    if (event.target.id ==='modal1' || event.target.id === 'modal2'){
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', true);
        modal.removeAttribute('aria-modal');
        modal.removeEventListener('click', closeModal);
    }
    if (event.target.classList.contains('modalClose')){
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', true);
        modal.removeAttribute('aria-modal');
        modal.removeEventListener('click', closeModal);
    }    
}

export function changeModal(event) {
    //event.preventDefault();
    const button = event.target;
    console.log(button);
    const target1 = document.getElementById('modal2');
    const target2 = document.getElementById('modal1');
    if (button.id === 'changeToModal2'){
        target1.classList.remove('modalBottom')
        target1.classList.add('modalTop');
        if (target2.classList.contains('modalTop')){
            target2.classList.remove('modalTop');
            target2.classList.add('modalBottom');
        }
    } else if (button.id === 'changeToModal1'){
        target2.classList.remove('modalBottom')
        target2.classList.add('modalTop');
        if (target1.classList.contains('modalTop')){
            target1.classList.remove('modalTop');
            target1.classList.add('modalBottom');
        }
    }
}

export default {
    openModal,
    closeModal,
    changeModal,
}