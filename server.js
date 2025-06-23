const express = require('express');         // Framework web para criar o servidor
const mysql = require('mysql2');             // Cliente MySQL para conexão com o banco de dados
const bodyParser = require('body-parser');   // Middleware para interpretar dados enviados via formulário

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // Permite ler dados do corpo da requisição em formato URL-encoded
app.use(express.static('public'));                   // Serve arquivos estáticos (HTML, CSS) da pasta 'public'

const db = mysql.createConnection({                   // Configura a conexão com o banco de dados MySQL
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pmba'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

app.post('/cadastrar', (req, res) => {
  const { nome, cpf, rg, cidade } = req.body;        // Extrai os dados enviados pelo formulário
  const sql = 'INSERT INTO alunos (nome, cpf, rg, cidade) VALUES (?, ?, ?, ?)'; // Query SQL para inserir dados na tabela
  db.query(sql, [nome, cpf, rg, cidade], (err) => {  // Executa a query com os dados recebidos
    if (err) throw err;
    res.redirect('/sucesso.html');                     // Redireciona para página de sucesso após cadastro
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');       // Inicia o servidor na porta 3000
});


