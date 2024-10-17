const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentImageIndex = 0;

function updateImage() {
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

updateImage();

// Manipulação de Comentários
const reviewForm = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');

reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `<strong>${username}</strong><p>${comment}</p>`;

    reviewList.appendChild(reviewItem);

    reviewForm.reset();
});
