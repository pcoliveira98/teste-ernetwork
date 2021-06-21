const { DataTypes } = require('sequelize');

const database = require('../../database/index');

const Cidade = database.define('Cidade', {
    nome: DataTypes.STRING,
    uf: DataTypes.STRING
});

module.exports = Cidade;