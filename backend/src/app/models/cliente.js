const { DataTypes } = require('sequelize');

const database = require('../../database/index');
const Cidade = require('./cidade');

const Cliente = database.define('Cliente', {
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dt_nascimento: DataTypes.DATE,
    salario: DataTypes.FLOAT,
});

Cliente.belongsTo(Cidade, { foreignKey: 'cidade_id', as: 'cidade', });

module.exports = Cliente;