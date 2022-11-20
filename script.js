//responsive navigation bar
let menu = document.querySelector('#check');
let navbar = document.querySelector('.navbar'); 

menu.onclick =() => {
    menu.classList.toggle('fas fa-bars'); 
    navbar.classList.toggle('open');
}
