document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const games = document.querySelectorAll('.game-item');
    const searchInput = document.getElementById('search-input');

    // Função para filtrar jogos por categoria
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;

        games.forEach(game => {
            const gameCategories = game.getAttribute('data-category').split(',');
            if (selectedCategory === 'todos' || gameCategories.includes(selectedCategory)) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    });

    // Função de busca de jogos
    searchInput.addEventListener('input', () => {
        const input = searchInput.value.toLowerCase();
        games.forEach(game => {
            const gameTitle = game.getElementsByTagName('h3')[0].innerText.toLowerCase();
            if (gameTitle.includes(input)) {
                game.style.display = ''; // Mostra o jogo
            } else {
                game.style.display = 'none'; // Oculta o jogo
            }
        });
    });
});
