const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
  user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
  host: 'localhost',
  database: 'portifolio', // Substitua pelo nome do seu banco de dados
  password: '141003', // Substitua pela sua senha do PostgreSQL
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/projetos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projetos');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar projetos');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
