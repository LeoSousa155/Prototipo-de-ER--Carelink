# Prototipo de ER: Carelink
 Este projeto é o nosso prototipo para a cadeira de Engenharia de Requisitos

 O nosso projeto chama-se Carelink e tenta ser uma plataforma de teleconsultas

## comandos de inicialização do projeto
### Frontend
Entre na pasta `/client` e execute o comando`npm install` para instalar as dependencias e depois `npm run start` para iniciar o cliente na porta 3000

### Backend
Depois de instalar as dependencias no `/cliente`, execute o comando `npm run build` para compilar o frontend depois entre na pasta `/server` e execute o comando `npm install` para instalar as dependencias e depois `npm run start` para iniciar o servidor na porta 5000

### Base de dados
A base de dados é `SQLite` e a biblioteca usada foi adicionada ao `Node 22.5.0`, portanto é necessário ter uma versão igual ou superior para executar o servidor.

Ao executar o servidor a base de dados será criada com o nome `carelink.sqlite`

Ao iniciar o servidor a base de dados encontrar-se-á vázia portanto será preciso registar alguns médicos e pacientes, para isso podem entrar na página `localhost:3000/register` e preencher o formulário, para inserir novos pacientes é preciso apenas nome completo e palavra passe, para inserir novos médicos é preciso também esses dados e adicionalmente um ficheiro para simular a licença médica.