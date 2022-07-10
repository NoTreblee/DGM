const navLinks = document.getElementsByClassName('nav__link');
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();
const handleNav = () => {
  navBtn.classList.toggle('is-active');
  navMobile.classList.toggle('nav-mobile--active');
};
for (const navLink of navLinks) {
  navLink.addEventListener('click', function closeNav() {
    navMobile.classList.remove('nav-mobile--active');
    navBtn.classList.toggle('is-active');
  });
}
navBtn.addEventListener('click', handleNav);
