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

Ao iniciar o servidor a base de dados encontrar-se-á com 2 registos por padrão, um Doutor com nome `Doutor` e um paciente com nome `Paciente`, ambos tendo a palavra passe `password`. Para inserir novos pacientes basta entrar na página `localhost:3000/register`. É preciso apenas nome completo e palavra passe, para inserir novos médicos é preciso também esses dados e adicionalmente um ficheiro para simular a licença médica.


### Navegação
Ao logar com o Paciente ou Medico serão direcionados as páginas `patient/profile` ou `doctor/profile` mas ao navegar com a barra lateral e tentar aceder a estas páginas irá direcionar o utilizador a uma página em branco com caminho `profile`, devendo-se isto ao facto de não termos conseguido implementar a sessões para a aplicação saber se temos um paciente ou um médico autenticado. Isto também acontece com a página de comunicação.

### lista de caminhos a funcionar
- `/`
- `/login`
- `/register`
- `/patient/profile`
- `/doctor/profile`
- `/patient/communication`
- `/doctor/communication`
- `/calendar`
- `/calendar/add-event`
- `/health-plan`
