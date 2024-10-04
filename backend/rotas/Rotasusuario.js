const express = require('express');
const router = express.Router();
const Controladorusuario = require('../controlador/ControladorUsuario');

// Rota para criar um novo usuario
router.post('/usuarios', Controladorusuario.createUsuario);

// Rota para obter todos os usuarios
router.get('/usuarios', Controladorusuario.getAllUsuarios);

// Rota para obter um usuario pelo ID
router.get('/usuarios/:id', Controladorusuario.getUsuarioById);

// Rota para atualizar um usuario
router.put('/usuarios/:id', Controladorusuario.updateUsuario);

 // Rota para deletar um usuario
router.delete('/usuarios/:id', Controladorusuario.deleteUsuario);

// Rota para fazer um login
 router.post('/usuario/login', Controladorusuario.login);

// Rota para registrar entrada de estoque
//router.post('/usuarios/:id/entrada', Controladorusuario.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/usuarios/:id/saida', Controladorusuario.registrarSaida);

module.exports = router;