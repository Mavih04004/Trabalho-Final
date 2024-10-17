document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.querySelector('.games-container');
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category');


    function renderGames(games) {
        gamesContainer.innerHTML = ''; 
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game-item');
            gameElement.innerHTML = `
                <img src="img/${game.title.replace(/\s+/g, '')}.jpeg" alt="${game.title}" />
                <h3>${game.title}</h3>
                <p>R$ ${game.price.toFixed(2)}</p>
                <button class="buy-button">Comprar</button>
            `;
            gamesContainer.appendChild(gameElement);
        });
    }

    // Função para buscar jogos no backend
    async function fetchGames(query = '') {
        const response = await fetch(`/api/jogos/search?q=${query}`);
        const games = await response.json();
        renderGames(games);
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        fetchGames(query);
    });


    fetchGames();
});
