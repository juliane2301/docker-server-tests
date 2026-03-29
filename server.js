const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensagem: 'Bem-vindo a minha primeira aplicação Node!',
    timestamp: new Date(),
    ambiente: process.env.NODE_ENV
  });
});

// IMPORTANTE: 0.0.0.0 para funcionar no Docker
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});