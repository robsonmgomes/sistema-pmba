# Sistema de Cadastro de Alunos - CFSD PMBA

Sistema web desenvolvido para o cadastro de alunos do Curso de Formação de Soldados da Polícia Militar da Bahia (PMBA), utilizando Node.js, HTML/CSS e MySQL.

## 🔧 Funcionalidades

- Cadastro de alunos via formulário HTML
- Armazenamento das informações em banco de dados MySQL
- Redirecionamento para página de sucesso após o cadastro
- Identificação de cada aluno com um campo específico de "número do aluno" (ex: Aluno 01, Aluno 12, etc.)

## 🧾 Informações coletadas no formulário

- Número do Aluno (ex: 01, 12, 99)
- Nome completo
- CPF
- RG
- Cidade

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5 + CSS3
- **Backend**: Node.js + Express
- **Banco de Dados**: MySQL
- **Servidor local**: WAMP (opcional para testes)

## 📂 Estrutura do Projeto

```
sistema-pmba/
├── public/
│   ├── index.html         # Formulário de cadastro
│   ├── sucesso.html       # Página de sucesso estilizada
│   └── style.css          # Estilos aplicados nas páginas
├── server.js              # Servidor Express e rotas
├── package.json
└── README.md
```

## 📋 Script de Criação da Tabela MySQL

```sql
CREATE DATABASE pmba;
USE pmba;

CREATE TABLE alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero_aluno VARCHAR(10) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(20) NOT NULL,
  rg VARCHAR(20) NOT NULL,
  cidade VARCHAR(100) NOT NULL
);
```

> 💡 O campo `numero_aluno` foi adicionado para representar a identificação exclusiva usada no cotidiano militar, como "Aluno 01", "Aluno 45", etc.

## ▶️ Como executar

1. Clone o repositório:
   ```
   git clone https://github.com/robsonmgomes/sistema-pmba.git
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure o MySQL com os dados corretos no `server.js`:
   ```js
   const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',      // sua senha do MySQL
     database: 'pmba'
   });
   ```

4. Inicie o servidor:
   ```
   node server.js
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📄 Licença

Este projeto é livre para fins acadêmicos e de aprendizado.

---

Desenvolvido como parte da avaliação final da disciplina **Imersão Profissional - Curso de Análise e Desenvolvimento de Sistemas - Faculdade Uniasselvi**.
