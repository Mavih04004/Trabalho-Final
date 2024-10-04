const express = require('express');
const router = express.Router();
const Controladorproduto = require('../controlador/ControladorJogos');

// Rota para criar um novo produto
router.post('/produtos', Controladorproduto.createProduto);

// Rota para obter todos os produtos
router.get('/produtos', Controladorproduto.getAllProdutos);

// Rota para obter um produto pelo ID
router.get('/produtos/:id', Controladorproduto.getProdutoById);

// Rota para atualizar um produto
router.put('/produtos/:id', Controladorproduto.updateProduto);

 // Rota para deletar um produto
router.delete('/produtos/:id', Controladorproduto.deleteProduto);

// Rota para registrar entrada de estoque
//router.post('/produtos/:id/entrada', Controladorproduto.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/produtos/:id/saida', Controladorproduto.registrarSaida);

module.exports = router;