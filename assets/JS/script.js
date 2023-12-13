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

function handleFocus(searchBoxId) {
    const searchBox = document.getElementById(searchBoxId);
    searchBox.style.border = "1px solid #000000";
}

function handleBlur(searchBoxId) {
    const searchBox = document.getElementById(searchBoxId);
    searchBox.style.border = "none";
}

