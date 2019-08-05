document.addEventListener('DOMContentLoaded', init);
let hammyDiv;
let isOpen = true;
function init() {
    hammyDiv = document.querySelector('div.hammyContent');
    let hammyBtn = document.querySelector('button.hammyButton');
    hammyBtn.addEventListener('click', toggleNavbar);
    toggleNavbar();
}
function toggleNavbar() {
    if (isOpen) {
        hammyDiv.classList.remove('active');
    } else {
        hammyDiv.classList.add('active');
    } isOpen = !isOpen;
}