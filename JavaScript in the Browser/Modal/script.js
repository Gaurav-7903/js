'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
btnShowModal.forEach((btn)=>{
    btn.addEventListener('click',openModal)
});
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',(event)=>{
    if(event.key === 'Escape' &&!modal.classList.contains('hidden')){
        closeModal();
    }
})
