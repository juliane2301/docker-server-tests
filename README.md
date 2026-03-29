# 🐳 Teste Node com Docker

Projeto de estudos criado para praticar a execução de um servidor Node.js com Docker.

## 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de aprender como organizar uma aplicação backend simples utilizando Node.js, Express, variáveis de ambiente e Docker.

## 🛠️ Tecnologias utilizadas

- 🟨 JavaScript
- 🟩 Node.js
- 🚀 Express
- 🐳 Docker
- ⚙️ Docker Compose
- 🔐 Dotenv
- 🔄 Nodemon

## 📂 Estrutura dos arquivos

### 🧹 `.dockerignore`
Evita que arquivos desnecessários sejam enviados para a imagem Docker.

### 🔒 `.env.example`
Mostra o modelo das variáveis de ambiente usadas no projeto.

### 🙈 `.gitignore`
Impede que arquivos desnecessários ou sensíveis sejam enviados ao GitHub.

### ⚙️ `docker-compose.yaml`
Responsável por subir e configurar o serviço da aplicação com Docker Compose.

### 🐳 `Dockerfile`
Define como a imagem Docker da aplicação será criada.

### 📦 `package.json`
Contém as informações principais do projeto, dependências e scripts.

### 📌 `package-lock.json`
Arquivo gerado automaticamente pelo npm com o controle exato das versões instaladas.

### 💻 `servidor.js`
Arquivo principal do servidor Node.js com Express.

## ▶️ Como executar o projeto

### Rodar localmente

```bash
npm install
npm start
