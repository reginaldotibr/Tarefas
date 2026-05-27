const express = require('express');
const router = express.Router();

// Importando controller
const tarefaController = require('../controllers/tarefaController');

// Rotas corretas (AGORA FUNCIONA)
console.log("ROTA ID carregada");
router.get('/tarefas/:id', tarefaController.buscarTarefaPorId);
router.get('/tarefas', tarefaController.listarTarefas);
router.post('/tarefas', tarefaController.criarTarefa);
router.put('/tarefas/:id', tarefaController.editarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);


module.exports = router;