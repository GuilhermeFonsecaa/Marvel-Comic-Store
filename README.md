# Loja de Histórias em Quadrinhos da Marvel

Bem-vindo à **Loja de Histórias em Quadrinhos da Marvel**! Este projeto é uma aplicação web construída utilizando React, Vite e diversas bibliotecas incríveis. Com a integração à API da Marvel, os usuários podem explorar, buscar e adquirir suas histórias em quadrinhos favoritas. Siga as instruções abaixo para configurar e utilizar o projeto.

## Recursos

- Navegação entre uma seleção das HQs da Marvel.
- Busca por HQs através de títulos.
- Visualização detalhada das HQs, incluindo capas, descrições e mais.
- Adição de HQs ao carrinho para posterior compra.
- Finalização das compras usando a plataforma de pagamento PayPal.

## Tecnologias Utilizadas

- React
- Vite
- React Router DOM
- React PayPal-js
- React Icons
- Currency.js
- API da Marvel

## Guia de Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- Chave de API da Marvel (Obtenha sua chave [aqui](https://developer.marvel.com/))

### Instalação

1. Clone o repositório:

```bash
   git clone https://github.com/GuilhermeFonsecaa/Marvel-Comic-Store.git
```
Instale as dependências:

  ```bash
npm install
````

2. Configuração
Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente:
```bash
VITE_API_KEY=apikey=sua_api_da_marvel
VITE_API=https://gateway.marvel.com/v1/public/comics/
VITE_API_LIST_COMICS=https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&modifiedSince=20200101&orderBy=title&limit=39&
VITE_API_SEARCH=https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&titleStartsWith=
VITE_HASH=hash=sua_hash
VITE_CLIENT_ID_PAYPAL=seu_id_do_cliente_paypal
```
Uso
Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Explore a lista de HQs, faça buscas por títulos e adicione HQs ao carrinho.

Avance para a finalização da compra e conclua a transação através do gateway de pagamento do PayPal.

## Variáveis de Ambiente

VITE_API_KEY: Sua chave de API da Marvel para acessar a API.

VITE_API: URL base para requisições à API da Marvel.

VITE_API_LIST_COMICS: URL para buscar uma lista de HQs.

VITE_API_SEARCH: URL para buscar HQs por título.

VITE_HASH: Parâmetro de hash para autenticação na API.

VITE_CLIENT_ID_PAYPAL: ID do Cliente do PayPal para integração de pagamentos.
