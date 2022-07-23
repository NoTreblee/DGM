const navLinks = document.getElementsByClassName('nav__link');
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const body = document.getElementById('body');

mybutton = document.getElementById('myBtn');
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();
const handleNav = () => {
  navBtn.classList.toggle('is-active');
  navMobile.classList.toggle('nav-mobile--active');
  body.classList.toggle('fixed');
};
for (const navLink of navLinks) {
  navLink.addEventListener('click', function closeNav() {
    navMobile.classList.remove('nav-mobile--active');
    navBtn.classList.toggle('is-active');
    body.classList.toggle('fixed');
  });
}
navBtn.addEventListener('click', handleNav);
