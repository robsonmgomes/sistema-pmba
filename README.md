# 📘 Sistema de Cadastro de Alunos – PMBA

Sistema web desenvolvido para o cadastro de alunos do Curso de Formação de Soldados da Polícia Militar da Bahia (PMBA), utilizando Node.js, HTML/CSS e MySQL.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL
- **Ambiente Local:** WampServer
- **Editor de Código:** Visual Studio Code

---

## 📂 Estrutura do Projeto

```
sistema-pmba/
├── public/
│   ├── index.html      # Formulário de cadastro
│   └── style.css       # Estilo visual
├── server.js           # Backend em Node.js
├── package.json        # Gerenciador de dependências
└── README.md           # Documentação
```

---

## ⚙️ Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/robsonmgomes/sistema-pmba.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd sistema-pmba
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   node server.js
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000/index.html
   ```

---

## 🗃️ Estrutura do Banco de Dados

```sql
CREATE DATABASE pmba;
USE pmba;

CREATE TABLE alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(14),
  rg VARCHAR(20),
  cidade VARCHAR(50)
);
```

---

## 📌 Funcionalidades

- Cadastro de alunos via formulário web.
- Armazenamento seguro dos dados no MySQL.
- Confirmação de cadastro após envio.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar e modificar com os devidos créditos.

---

## 🙋‍♂️ Autor

Desenvolvido por Robson Medeiros Gomes.  
Contato: robson.mgomes@hotmail.com

