'use strict';

const modal_buttons = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const close_button = document.querySelector('.close-modal');
const modal_window = document.querySelector('.modal');

function show_modal_window() {
    modal_window.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function close_modal_window() {
    modal_window.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let index = 0; index < modal_buttons.length; index++) {
    modal_buttons[index].addEventListener('click', function() {
       show_modal_window(); 
    });
}

close_button.addEventListener('click', function() {
    close_modal_window();
});
overlay.addEventListener('click', function() {
    close_modal_window()
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (!modal_window.classList.contains('hidden'))
            close_modal_window();
    }
})