// Simulação de banco de dados em memória
let tarefas = [];

// LISTAR tarefas
const listar = () => {
    return tarefas;
};

// CRIAR tarefa
const criar = (titulo) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo
    };

    tarefas.push(novaTarefa);
    return novaTarefa;
};

// BUSCAR por ID
const buscarPorId = (id) => {
    return tarefas.find(t => t.id == id);
};

// ATUALIZAR tarefa
const atualizar = (id, titulo) => {
    const tarefa = tarefas.find(t => t.id == id);

    if (!tarefa) return null;

    tarefa.titulo = titulo;
    return tarefa;
};

// REMOVER tarefa
const remover = (id) => {
    const tamanhoAntes = tarefas.length;

    tarefas = tarefas.filter(t => t.id != id);

    return tarefas.length < tamanhoAntes;
};

// EXPORTAR funções
module.exports = {
    listar,
    criar,
    buscarPorId,
    atualizar,
    remover
};



