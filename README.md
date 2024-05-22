# Challenge Semana XII - Compass UOL

Repositório Backend do 3° Desafio do Programa de Bolsas Fullstack da Compass UOL.

## Descrição

Recebe os dados da criação de um novo motorista vindo do Frontend, faz as validações necessárias e adiciona no banco de dados. Também popula a tabela de carros assim que o projeto é inicializado, as informações serão consumidas no Frontend (seção 2).

## Iniciando

### Configuração do arquivo ".env"

Crie um arquivo .env no projeto com a seguinte configuração para o uso do banco de dados.

```bash
  DATABASE_URL="mysql://admin:wasabi30@desafioxii-luan.c3cw6w2iu4x7.us-east-1.rds.amazonaws.com:3306/desafioxii-luan"
```

### Instalação e Execução

<ul>
  <li>Clone o repositório.</li>
  <li>Acesse por uma IDE, entre no diretório com o comando: </li>

  ```bash
    $ cd myride-back
  ```

  <li>Use a CLI para instalar as dependências com o comando: </li>

  ```bash
    $ npm install
  ```

  <li>Inicialize o projeto com o comando: </li>

  ```bash
    $ npm start
  ```
</ul>

Com isso a aplicação já estará rodando, pronta para receber as informações do Frontend.

## Tecnologias utilizadas

<ul>
  <li> <a href="https://nodejs.org/en" target="_blank">Node.js</a> - Interpretador de JavaScript/TypeScript </li>
  <li> <a href="https://www.npmjs.com/" target="_blank">npm</a> - Gerenciador de pacotes </li>
  <li> <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> - Linguagem utilizada </li>
  <li> <a href="https://docs.nestjs.com/" target="_blank">NestJS</a> - Framework utilizado </li>
  <li> <a href="https://www.prisma.io/" target="_blank">Prisma</a> - ORM </li>
  <li> <a href="https://www.mysql.com/" target="_blank">MySQL</a> - rodando na AWS RDS </li>
  <li> <a href="https://github.com/typestack/class-validator" target="_blank">class validator</a> - Validações </li>
</ul>