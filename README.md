# Test Login API

Projeto de estudo com uma API simples em Python (Flask) e uma interface web em HTML, CSS e JavaScript para simular um fluxo de login.

## Visão geral

O repositório está dividido em duas partes:

- `api/`: backend com Flask responsável por receber requisições de login.
- `web/`: frontend estático com formulário de login e envio da requisição via `fetch`.

A aplicação demonstra a comunicação entre frontend e backend usando JSON em uma rota HTTP `POST`.

## Estrutura do projeto

```text
.
|-- api/
|   `-- main.py
|-- web/
|   |-- index.html
|   |-- login.html
|   |-- login.js
|   `-- style.css
`-- README.md
```

## Tecnologias utilizadas

### Backend

- Python
- Flask
- Flask-CORS

### Frontend

- HTML5
- CSS3
- JavaScript (Fetch API)

## Backend (`api/main.py`)

A API inicia um servidor Flask com modo de depuração ativado e CORS liberado para rotas `/api/*`.

### Comportamento principal

- Define um objeto fixo de usuário em memória.
- Expõe o endpoint `POST /api/login`.
- Lê o corpo JSON enviado na requisição.
- Retorna o usuário fixo em formato JSON.

### Endpoint

- Método: `POST`
- Rota: `/api/login`
- Content-Type esperado: `application/json`
- Resposta: JSON com os dados do usuário

Exemplo de resposta:

```json
{
  "id": 1,
  "name": "Dayane",
  "email": "dayane@dayane.com"
}
```

## Frontend (`web/`)

### `login.html`

Página com formulário contendo:

- Campo de email (`#iptEmail`)
- Campo de senha (`#iptPass`)
- Botão `Entrar` que chama a função `login()`

Também importa:

- `style.css` para estilização da página
- `login.js` para lógica da requisição

### `login.js`

Implementa a função `login()` que:

1. Captura os valores dos campos de email e senha.
2. Monta o corpo da requisição em JSON.
3. Envia `POST` para `http://127.0.0.1:5000/api/login` usando `fetch`.
4. Define `Content-Type: application/json` no header.
5. Trata status de resposta e tenta converter retorno para JSON.

### `style.css`

Define o layout centralizado da tela e o estilo do cartão de login, incluindo:

- Container com layout em coluna
- Estilização dos campos de entrada
- Estilização do botão com efeito `hover`

### `index.html`

Página HTML simples presente no projeto.

## Como executar

### 1. Subir a API

No diretório do projeto:

```bash
cd api
python main.py
```

A API inicia em `http://127.0.0.1:5000`.

### 2. Abrir o frontend

Abra o arquivo `web/login.html` no navegador.

Ao clicar em **Entrar**, o frontend envia a requisição para a API local.

## Fluxo de funcionamento

1. Usuário preenche email e senha na tela de login.
2. JavaScript cria um objeto JSON com esses dados.
3. Frontend envia `POST /api/login` para a API Flask.
4. Backend recebe o JSON e devolve os dados fixos do usuário.

## Objetivo do projeto

Este projeto serve como base para aprendizado de integração entre:

- formulário web
- requisições HTTP com JavaScript
- API REST simples com Flask
- troca de dados em JSON
