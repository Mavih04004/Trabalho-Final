const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Rota para servir os arquivos frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota para obter todos os jogos
app.get('/api/jogos', (req, res) => {
  fs.readFile('./data/games.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler os dados.');
    res.json(JSON.parse(data));
  });
});

// Rota para buscar jogos por nome
app.get('/api/jogos/search', (req, res) => {
  const searchTerm = req.query.q?.toLowerCase() || '';
  fs.readFile('./data/games.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler os dados.');

    const jogos = JSON.parse(data);
    const resultados = jogos.filter(jogo =>
      jogo.title.toLowerCase().includes(searchTerm)
    );
    res.json(resultados);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
