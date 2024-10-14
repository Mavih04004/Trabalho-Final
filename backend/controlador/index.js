const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Porta onde o servidor será executado

// Middleware para permitir requisições de outros domínios (CORS)
app.use(cors());

// Middleware para interpretar JSON no corpo das requisições
app.use(bodyParser.json());

// Simulação de um "banco de dados"
const usuarios = [];

// Rota para cadastro de usuário
app.post('/cadastrar', (req, res) => {
    const { nome, email, senha, apelido } = req.body;

    // Verificando se todos os campos foram preenchidos
    if (!nome || !email || !senha || !apelido) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    // Verificando se o e-mail já foi cadastrado
    const usuarioExistente = usuarios.find((user) => user.email === email);
    if (usuarioExistente) {
        return res.status(400).json({ message: 'E-mail já cadastrado.' });
    }

    // Criando e armazenando o novo usuário
    const novoUsuario = { nome, email, senha, apelido };
    usuarios.push(novoUsuario);

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
