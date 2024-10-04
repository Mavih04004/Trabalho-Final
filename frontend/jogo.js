let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".carousel-images img");
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // Esconde todas as imagens
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reseta o índice se ultrapassar o total
    }
    slides[slideIndex].style.display = "block"; // Mostra a imagem atual
    setTimeout(showSlides, 3000); // Muda de imagem a cada 3 segundos
}

function changeSlide(n) {
    const slides = document.querySelectorAll(".carousel-images img");
    slides.forEach((slide) => {
        slide.style.display = "none"; // Esconde todas as imagens
    });
    slideIndex += n; // Altera o índice de acordo com a direção
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Reseta o índice se menor que 0
    } else if (slideIndex >= slides.length) {
        slideIndex = 0; // Reseta o índice se ultrapassar o total
    }
    slides[slideIndex].style.display = "block"; // Mostra a nova imagem
}
