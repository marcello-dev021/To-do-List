# 📝 To-Do List — Full Stack (Frontend + API + Banco de Dados)

Aplicação de lista de tarefas desenvolvida para praticar conceitos de **desenvolvimento Full Stack**, integrando interface web com uma API e banco de dados.

## 🚀 Funcionalidades

* ➕ Adicionar novas tarefas
* 📋 Listar tarefas cadastradas
* ❌ Remover tarefas (rota DELETE)
* 💾 Persistência em banco de dados
* 🔄 Atualização dinâmica sem recarregar a página

## 🖥️ Interface

Interface simples e intuitiva onde o usuário pode:

* Digitar uma nova tarefa
* Adicionar à lista
* Excluir tarefas concluídas

## 🧠 Objetivo do Projeto

Este projeto foi desenvolvido com fins educacionais para praticar:

* Manipulação de DOM com JavaScript
* Comunicação com API (HTTP Requests)
* CRUD básico
* Integração Frontend + Backend
* Persistência de dados
* Boas práticas de organização de código

## 🛠️ Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express

### Banco de Dados

* (Ex: PostgreSQL / MySQL / SQLite — ajuste conforme usar)

## 🔌 API — Rotas

### ➕ Criar tarefa

```
POST /tasks
```

Body:

```json
{
  "title": "Estudar JavaScript"
}
```

---

### 📋 Listar tarefas

```
GET /tasks
```

---

### ❌ Deletar tarefa

```
DELETE /tasks/:id
```

---

## 💾 Estrutura do Projeto

```
📁 todo-list
 ┣ 📁 frontend
 ┃ ┣ index.html
 ┃ ┣ style.css
 ┃ ┗ script.js
 ┣ 📁 backend
 ┃ ┣ server.js
 ┃ ┗ routes
 ┣ 📁 database
 ┗ README.md
```

## ⚙️ Como executar o projeto

### 1️⃣ Clonar repositório

```
git clone https://github.com/seu-usuario/todo-list.git
```

---

### 2️⃣ Instalar dependências do backend

```
npm install
```

---

### 3️⃣ Iniciar servidor

```
npm run dev
```

ou

```
node server.js
```

---

### 4️⃣ Abrir o frontend

Abra o arquivo `index.html` no navegador.

## 📌 Melhorias futuras

* ✔️ Marcar tarefa como concluída
* ✏️ Editar tarefas
* 🔐 Autenticação de usuários
* 📱 Design responsivo
* ☁️ Deploy da aplicação
* 🧩 Transformar e
