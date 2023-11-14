let hamburguer = document.getElementById('hamburguer');
let navBar = document.getElementById('nav');

hamburguer.addEventListener('click', () => {
    navBar.classList.add('open');
});

document.addEventListener('click', function(event) {
    if(navBar.classList.contains('open') && !event.target.isEqualNode(hamburguer) && !event.target.isEqualNode(navBar) && !navBar.contains(event.target)) {
        navBar.classList.remove('open');
    }
});