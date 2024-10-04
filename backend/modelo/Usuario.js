
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

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
        type: DataTypes.TEXT
    },
    apelido: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;