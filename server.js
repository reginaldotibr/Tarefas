console.log("INICIO DO SERVER");


// Importa o pacote express
const express = require('express');

// Cria a aplicação
const app = express();

// Middleware para interpretar JSON
app.use(express.json()); // ✅ TEM QUE ESTAR AQUI

// Define uma porta
const PORT = 3000;

// Importa rotas de tarefas
const tarefasRoutes = require('./src/routes/tarefasRoutes');

// Usa as rotas
app.use('/api', tarefasRoutes);



// Rota inicial
app.get('/', (req, res) => {
    res.send('API de Tarefas funcionando 🚀');
});


console.log("ANTES DO LISTEN");



// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

