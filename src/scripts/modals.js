'use strict';

let project = document.querySelectorAll('.project');
// let hoverWindow = document.querySelectorAll('.project > .hover-after');

let itemsModal = document.querySelectorAll('.nav__item > li');
let windowModal = document.querySelector('.modal-window');

itemsModal.forEach ((elem, i) => {
    elem.addEventListener('click', function () {
        if(i == 0) {
            if(!windowModal.classList.contains('active')){
                windowModal.classList.add('active');
                elem.classList.add('active');
            } else if (windowModal.classList.contains('active')) {
                windowModal.classList.remove('active');
                elem.classList.remove('active');
            }
        }
    })
})

project.forEach((items) => {
    items.addEventListener('click', function() {
        this.childNodes[4].classList.add('active');
    })
})

// function Click (main) {
//     main.forEach((items, i) => {
//         items.addEventListener('click', function () {
                // hoverWindow.forEach((link, a) => {
                    // showwAfterHover (item, i, link, a)
                // })
//         })
//     })
// }


// function showAfterHover (clickWindow, i, hoverWindow, a) {
//     
//     if (clcikWindow[i] == hoverWindow[a]) {}    
//          hoverWindow[i].classList.add('active);     
//    }
//     
// }
