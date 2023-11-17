/**
 * Métodos de acesso aos dados de Aluno no banco de dados.
 */

// Import das bibliotecas próprias
const Aluno = require("./aluno");

// Retorna uma lista com todos os Alunos
const getLista = async (request, response) => {
    const alunos = await Aluno.findAll();    
    response.status(200).json(alunos);
};
    
// Procura um aluno pelo alunoId
const getAluno = async (request, response) => {
    const aluno = await Aluno.findByPk(request.params.alunoId);    
    response.status(200).json(aluno);
};
    
// Insere um novo cliente
const inserir = async (request, response) => {
    const aluno = await Aluno.create(request.body);    
    response.status(201).json({ message: `Aluno inserido com alunoId: ${aluno.alunoId}` });
};

// Altera um aluno pelo id
const alterar = async (request, response) => {
    const aluno = await Aluno.findByPk(request.params.alunoId);
    if (aluno) {
        await aluno.update(request.body);
        response.status(200).json( { message: `Aluno modificado com alunoId: ${aluno.alunoId}` });
    } else {
        response.status(404).json( { message: `Aluno não encontrado com alunoId: ${request.params.alunoId}` });
    }
};
    
// Exclui um aluno pelo id
const excluir = async (request, response) => {
    const aluno = await Aluno.findByPk(request.params.alunoId);
    if (aluno) {
        await aluno.destroy();        
        response.status(200).json( { message: `Aluno excluído com alunoId: ${aluno.alunoId}` });
    } else {        
        response.status(404).json( { message: `Aluno não encontrado com alunoId: ${request.params.alunoId}` });
    }
};

// Exporta as funções
module.exports = {
    getLista,
    getAluno,
    inserir,
    alterar,
    excluir
};