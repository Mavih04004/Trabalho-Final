const express = require('express');
const app = express();
const cors = require('cors');

// Configuração do Sequelize
const db = require('./config/database');

// Testar a conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar com o banco de dados:', err));

// Middlewares
app.use(express.json());
app.use(cors())

// Importar rotas
const jogosRoutes = require('./rotas/RotasJogo');
const usuariosRoutes = require('./rotas/Rotasusuario');
// Usar rotas
app.use('/api', jogosRoutes);
app.use('/api', usuariosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
``