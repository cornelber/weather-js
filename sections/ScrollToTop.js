// Scroll To Top
const scrollToTopElement = document.querySelector('.scroll-to-top');
const halfOfViewportHeight = window.innerHeight / 2;

document.addEventListener('scroll', () => {
    if(window.scrollY > halfOfViewportHeight) {
        scrollToTopElement.classList.remove('unshow');
    } else {
        scrollToTopElement.classList.add('unshow');
    }
});

scrollToTopElement.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});