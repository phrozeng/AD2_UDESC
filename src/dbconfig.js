/**
 *  Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const { Sequelize } = require('sequelize');

// Cria e sequencializa a instância
const sequelize = new Sequelize({
    //Dialeto do banco de dados
    dialect: 'sqlite',
    // Nome do arquivo do banco de dados
    storage: './database.db'
});

// Exporta a instância
module.exports = sequelize;