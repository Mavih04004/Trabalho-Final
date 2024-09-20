
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produto extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.DECIMAL
    },
    Apelido: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'produto',
    timestamps: false
});

module.exports = Produto;