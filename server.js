const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pmba'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

app.use(express.static('public'));

app.post('/cadastrar', (req, res) => {
  const { numero_aluno, nome, cpf, rg, cidade } = req.body;
  const sql = 'INSERT INTO alunos (numero_aluno, nome, cpf, rg, cidade) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [numero_aluno, nome, cpf, rg, cidade], (err) => {
    if (err) throw err;
    res.redirect('/sucesso.html'); // ← caminho absoluto
  });
});



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});



