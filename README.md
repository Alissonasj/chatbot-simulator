Esse é um projeto Fullstack NextJs de um Simulador de Chatbot.

## Instalação

Primeiro, após fazer o clone do projeto e entrar na pasta pelo terminal, rode o comando:

```bash
pnpm install
# depois
pnpm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser.


## Estrutura do Projeto

Adotei uma arquitetura organizada por responsabilidades, separando as camadas de backend e frontend para facilitar a manutenção e escalabilidade do sistema.

### Backend (backend)

Dentro da pasta (backend), a estrutura foi dividida conforme a função de cada camada:

📁 api

- Contém os endpoints da aplicação.
- Cada endpoint está separado em seu respectivo arquivo, facilitando a manutenção e localização.

📁 db

Responsável por toda a integração com o banco de dados:
- schemas: definição das entidades do banco.
- database.ts: é o arquivo responsável por criar a conexão com o banco de dados.

📁 model

- Contém os modelos de acesso ao banco, centralizando as operações de CRUD.
- Os modelos fazem a comunicação direta com as entidades definidas nos schemas.

### Frontend

No frontend, foi criada a pasta /services para centralizar o consumo dos endpoints da API, mantendo a organização e facilitando o reuso do código.

Os estados do React foram utilizados para:
- armazenar os dados retornados da API;
- gerenciar alterações nos usuários e outras entidades;
- manter o fluxo de dados previsível na aplicação.
