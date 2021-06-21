'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('clientes', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        sexo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        rg: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        dt_nascimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        salario: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        cidade_id: {
          type: Sequelize.INTEGER,
          references: {model: 'cidades', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  }
};
