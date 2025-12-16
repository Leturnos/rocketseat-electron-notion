# 📝 Rotion — Notion Clone com Electron

> 🚧 **Projeto em desenvolvimento** 🚧
> Aplicação desenvolvida como parte do curso "Apps desktop com Electron" da **Rocketseat**, com foco no estudo da arquitetura do **Electron** e na comunicação entre processos.

![Preview do Projeto](https://github.com/user-attachments/assets/0576ee47-ebef-4acc-80bb-3b8fde0f6ed2)

---

## 💻 Sobre o projeto

O **Rotion** é uma aplicação desktop para criação e gerenciamento de documentos de texto, inspirada no Notion. O projeto adota uma arquitetura moderna, separando claramente:

* **Interface (Renderer):** construída com React
* **Camada de sistema (Main Process):** responsável por acesso a APIs nativas e persistência

Essa separação garante **mais segurança, organização e performance**, seguindo as boas práticas recomendadas para aplicações Electron.

### Principais conceitos explorados

* **IPC (Inter-Process Communication):** comunicação segura entre o Renderer e o Main Process.
* **Persistência local:** armazenamento de dados do usuário com `electron-store`.
* **Gerenciamento de estado:** uso do **TanStack Query** para cache, sincronização e atualizações otimistas da UI.
* **Editor Rich Text:** editor **Tiptap** com suporte a Markdown.

---

## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

* [Electron](https://www.electronjs.org/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite (Electron-Vite)](https://vitejs.dev/) 
* [TailwindCSS](https://tailwindcss.com/)
* [TanStack Query](https://tanstack.com/query/v4)
* [Tiptap](https://tiptap.dev/)
* [Electron Router DOM](https://github.com/electron-router-dom/electron-router-dom)
* [Electron Store](https://github.com/sindresorhus/electron-store)

---

## ✨ Funcionalidades

### ✅ Implementadas

* [x] Listagem de documentos na sidebar
* [x] Criação de novos documentos
* [x] Exclusão de documentos
* [x] Atualização automática do título ao editar o conteúdo
* [x] Salvamento automático (auto-save)
* [x] Navegação por rotas dinâmicas
* [x] Extração de título e conteúdo via Regex

### 🔜 Próximos passos (Roadmap)

* [ ] **Tray Menu:** controle da aplicação via ícone na bandeja do sistema
* [ ] **Busca global (Command Palette):** menu de comandos no estilo `Ctrl + K`
* [ ] **Hotkeys globais:** atalhos para criação e navegação entre documentos
* [ ] **Build & CI/CD:** pipeline de build automatizado para Windows, macOS e Linux

---

## 📦 Como rodar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Leturnos/rocketseat-electron-notion.git

# Acesse a pasta do projeto
cd rocketseat-electron-notion

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm run dev
```

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram explorados diversos conceitos importantes, como:

* Configuração de **aliases de importação** (`@shared`, `@renderer`) no Vite e TypeScript
* Estruturação de **handlers IPC** no processo Main
* Exposição segura de APIs via `contextBridge` no Preload
* Tratamento de erros e **Empty States** no React
* Organização de código em aplicações Electron de médio porte

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

