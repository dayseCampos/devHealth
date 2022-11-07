//menu sticky
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

//responsivo
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.barra-menu');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '30px',
	duration: 2600,
	reset: true
})

//delay footer
sr.reveal('.footer',{delay:200, origin:'bottom'})