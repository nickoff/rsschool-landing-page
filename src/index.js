const burgerButton = document.querySelector('.burger');
const navList = document.querySelector('.header-nav');

burgerButton.addEventListener('click', () => {
  navList.classList.toggle('active')
  burgerButton.classList.toggle('active')
})

navList.addEventListener('click', (event) => {
  if (event.target.closest('.header-nav__link')) {
    navList.classList.toggle('active')
    burgerButton.classList.toggle('active')
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