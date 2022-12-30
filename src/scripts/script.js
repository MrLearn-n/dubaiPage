'use strict';



const items = document.querySelectorAll('.comments__column > .comment_row');
const items_btn = document.querySelectorAll('.comments__item > .change')




items_btn.forEach(function(items, i) {
    items.addEventListener('click', function () {
        NotactiveBtn ();
        this.classList.add('active');
    })
})



function NotactiveBtn () {
    items_btn.forEach(function(items) {
        items.classList.remove('active');
    })
}

