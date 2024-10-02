const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : track.children.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < track.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}