// Importa o model
const tarefaModel = require('../models/tarefaModel');

// LISTAR
exports.listarTarefas = (req, res) => {
    const tarefas = tarefaModel.listar();
    res.json(tarefas);
};

// CRIAR
exports.criarTarefa = (req, res) => {
    const { titulo } = req.body;

    const novaTarefa = tarefaModel.criar(titulo);

    res.status(201).json(novaTarefa);
};


// BUSCAR POR ID
exports.buscarTarefaPorId = (req, res) => {
    console.log("ROTA DE ID FOI CHAMADA ✅");

    const { id } = req.params;

    const tarefa = tarefaModel.buscarPorId(id);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.json(tarefa);
};


// EDITAR
exports.editarTarefa = (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;

    const tarefa = tarefaModel.atualizar(id, titulo);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.json(tarefa);
};

// EXCLUIR
exports.excluirTarefa = (req, res) => {
    const { id } = req.params;

    const removido = tarefaModel.remover(id);

    if (!removido) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.json({ mensagem: "Tarefa removida com sucesso" });
};