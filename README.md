## ReduxShoes

Este projeto consiste em duas telas:
- Listagem de produtos
- Carrinho de compras

O mesmo foi desenvolvido com o intuito de demonstrar, principalmente, o funcionamento de um projeto React utilizando Redux/Redux Saga, além da utilização de outras bibliotecas secundárias.

Para elaborar a API do projeto foi utilizada a biblioteca json-server (https://github.com/typicode/json-server) que simula uma API Rest de acordo com o modelo elaborado. Nela, estão contidas as informações e o número em estoque de cada um dos produtos.

## Para executar o projeto

1- Dirigir-se à pasta do projeto em seu computador, através do terminal;

2- Executar o comando `yarn start` (para que o front-end seja executado, utilizando a porta 3000;

3- Em outra aba do terminal, executar o comando `json-server server.json -p 3333` (para que a API (contida no arquivo server.json na raiz do projeto seja executada na porta 3333).
