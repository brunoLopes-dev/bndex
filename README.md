
# Bndex Pokédex App

## Descrição

O **Pokédex App** é uma aplicação web que permite aos usuários visualizar informações detalhadas sobre os Pokémon da região de Kanto. A aplicação foi desenvolvida utilizando Angular e Ionic, com o objetivo de fornecer uma interface amigável e responsiva para explorar e favoritar Pokémon.

## Funcionalidades

- **Visualização da lista de Pokémon**: A tela principal exibe uma lista com o nome e a imagem dos Pokémon.
- **Detalhes dos Pokémon**: Ao clicar em um Pokémon, o usuário é redirecionado para uma tela com informações detalhadas sobre o Pokémon, incluindo altura, peso, habilidades, experiência base, habitat, forma e cor.
- **Favoritar Pokémon**: Os usuários podem marcar qualquer Pokémon como favorito, visualizando-os em uma lista separada.
- **Navegação entre Pokémon**: Na tela de detalhes, é possível navegar para o próximo ou anterior Pokémon utilizando setas de navegação.
- **Suporte para orientação móvel**: A interface foi adaptada para suportar mudanças de orientação em dispositivos móveis.

## Tecnologias Utilizadas

- **Angular**: Framework principal para construção da aplicação.
- **Ionic**: Framework para desenvolvimento mobile e web com Angular.
- **TypeScript**: Linguagem principal para desenvolvimento.
- **HttpClientModule**: Para fazer requisições HTTP à API do Pokémon.
- **Local Storage**: Para armazenar os favoritos dos usuários.

## Instalação e Uso

### Pré-requisitos

- Node.js
- Angular CLI
- Ionic CLI

### Passos para Instalação

1. Clone o repositório:
   ```bash
   https://github.com/brunoLopes-dev/bndex.git
   cd bndex-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute a aplicação:
   ```bash
   ionic serve
   ```

4. Acesse a aplicação em `http://localhost:8100`.

## Estrutura do Projeto

- **src/app/home**: Componente da página inicial que exibe a lista de Pokémon.
- **src/app/details**: Componente da página de detalhes que exibe informações detalhadas sobre o Pokémon.
- **src/app/favorite**: Componente da página de favoritos que exibe os Pokémon marcados como favoritos.
- **src/assets**: Imagens e outros recursos estáticos.
- **src/services**: Serviços para gerenciamento de dados.

## Abordagem e Solução

A aplicação foi construída com foco na modularidade e reutilização de componentes. Utilizamos Angular para criar uma aplicação web escalável e fácil de manter, e Ionic para garantir uma interface responsiva em dispositivos móveis. A injeção de dependência do Angular foi utilizada para gerenciar serviços, como o HttpClient para requisições HTTP.

### Desafios e Soluções

- **Gerenciamento de Favoritos**: Utilizamos Local Storage para armazenar os favoritos do usuário. Isso permite que as preferências do usuário sejam preservadas entre sessões.
- **Navegação entre Detalhes**: Implementamos setas de navegação na página de detalhes para permitir que o usuário navegue facilmente entre os Pokémon.

## Boas Práticas

- **Commits Semânticos**: Utilizamos mensagens de commit claras e significativas para facilitar o entendimento do histórico de alterações.
- **Código Modular**: Estruturamos o código em componentes e serviços reutilizáveis.

## Vídeo Demonstrativo

[Veja o vídeo do projeto](https://youtu.be/DibHSCKwIjs)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.


