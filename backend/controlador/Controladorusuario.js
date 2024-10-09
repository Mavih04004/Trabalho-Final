const Usuario = require('../modelo/Usuario');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const UsuarioController = {
    createUsuario: async (req, res) => {
        try {
            const novoUsuario = await Usuario.create(req.body);
            res.json(novoUsuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllUsuarios: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getUsuarioById: async (req, res) => {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            res.json(usuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateUsuario: async (req, res) => {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            await usuario.update(req.body);
            res.send('Usuario atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteUsuario: async (req, res) => {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            await usuario.destroy();
            res.send('Usuario deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    login: async (req, res) => {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    email: req.body.email // Usa o e-mail que veio do frontend
                }
            });

            if(req.body.email == usuario.email && req.body.senha == usuario.senha){
                res.json(usuario)
            } else {
                res.status(400).send('Email ou senha incorreta')
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    login: async (req, res) => {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    email: req.body.email // Usa o e-mail que veio do frontend
                }
            });
    
            if(req.body.senha == usuario.senha){
                res.json(usuario)
            } else {
                res.status(400).send('Email ou senha incorreta')
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = UsuarioController;