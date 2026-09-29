const burgerButton = document.querySelector('.burger');
const navList = document.querySelector('.header-nav');

burgerButton.addEventListener('click', () => {
  navList.classList.toggle('active');
  burgerButton.classList.toggle('active');
  document.body.classList.toggle('no-scroll', navList.classList.contains('active'));
})

navList.addEventListener('click', (event) => {
  if (event.target.closest('.header-nav__link')) {
    navList.classList.remove('active');
    burgerButton.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (navList.classList.contains('active')) {
      navList.classList.remove('active')
      burgerButton.classList.remove('active')
    }
  }
});