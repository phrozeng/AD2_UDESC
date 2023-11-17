/**
 * Define a classe modelo aluno a ser persistida.
 */

// Import das bibliotecas
const {Sequelize, Model, DataTypes, INTEGER } = require("sequelize");

// Import das configurações do banco
const sequelize = require("./dbconfig");

// Define o modelo para aluno
class Aluno extends Model {}

Aluno.init({
    alunoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    turma: DataTypes.STRING,
    datanascimento: DataTypes.STRING
    }, 
    { sequelize, 
    modelName: 'aluno' 
    }
);

// Sincroniza o modelo com o banco de dados
sequelize.sync();
// Exporta o modelo
module.exports = Aluno;