const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Jogos extends Model {}

Jogos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Categoria: {
        type: DataTypes.STRING
    },
    Nome: {
        type: DataTypes.STRING
    },
    Avaliacao: {
        type: DataTypes.STRING

    },
    preco: {
        type: DataTypes.DECIMAL
    },

    Data_Lancamento: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'jogos',
    timestamps: false
});

module.exports = Jogos;