# DESAFIO3-REACTJS
  

## Visão geral
O desafio3-ReactJS é uma implementação front-end utilizando reactJS para construir uma aplicação web para gerenciamento da listagem de repositórios.

O desafio 3 é a resolução do desafio do módulo 1 parte 2 do curso Bootcamp da Rocketseat para aplicação dos conhecimentos iniciais sobre ReactJS, como propriedades, estados e imutabilidade.

O desafio é composto pela construção de uma página simples com um formulário de adição e uma listagem de repositórios. A aplicação se integra com o servidor construido no desafio02-NodeJS responsável pelo gerenciamanto e armazenamento da listagem de repositórios. Os dados de repositórios adicionados via formulário devem ser inseridos na listagem da página e enviados para o servidor.

Além de adicionar, também podemos excluír um item de repositório da listagem.

### Funcionalidades
- adição de um  repositório na listagem.
- ~~alteração de um  repositório da listagem.~~
- listagem dos repositórios da listagem.
- remoção de um repositório da listagem.
- ~~adição de um like a um repositório.~~


### Bibliotecas utilizadas
- axios: utilizada para fazer requisições http para o servidor;
- react-icons: biblioteca de icones;
<br />

## Instalação do servidor em uma máquina local
	
### 1. Requisitos para instalação
- NodeJS na versão 8 ou superior;
- yarn ou npm;

### 2. Download do projeto

Clonar a pasta do projeto para sua máquina local e instalar as dependências.
```bash
 # clonar o repositório
 $ git clone https://github.com/marciovz/desafio3-conceitos-reactjs.git
 
 # acessar a pasta backend
 $ cd desafio3-conceitos-reactjs
 
 # instalar as dependências do projeto
 $ yarn
```

<br />

## Testando a aplicação

### 1. Iniciar o servidor backend

Na pasta do projeto do servidor backend via terminal rodar o comando abaixo:
```bash
$ yarn dev
```

### 2. Iniciar a aplicação
Na pasta do projeto do front-end rodar o comando abaixo:
```bash
$ yarn start
```
A aplicação irá iniciar, e em seguida irá abrir uma abá do navegador com a aplicação rodando.
Adicione a remova items utilizando o formulário apresentado.
