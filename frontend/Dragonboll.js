const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentImageIndex = 0;

// Função para atualizar a imagem exibida
function updateImage() {
  images.forEach((img, index) => {
    img.style.display = index === currentImageIndex ? 'block' : 'none';
  });
}

// Evento de clique para botão "anterior"
prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
});

// Evento de clique para botão "próximo"
nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
});

// Exibir a primeira imagem ao carregar
updateImage();
