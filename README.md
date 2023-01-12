# Backend in NodeJS + Mysql


## Para rodar este projeto

```bash
$ git clone https://github.com/jluarosouza/backend-nodejs-cadastro
$ cd backend-nodejs-cadastro
$ npx install 
ou 
$ npm install 
ou 
$ yarn install

## DataBase:
    Deve ser criado um banco de dados mysql "nome de sua preferência".

    após criar o banco volte ao terminal para criar o .env 
    
    $ cp .env.exemple .env
    
    pelo editor de código de sua preferência configure o arquivo .env com as credenciais de seu banco mysql.

    #criar as tabelas:
    $ npx sequelize db:migrate
    
    feito isso 3 tabelas devem ser cradas na base de dados que você criou e configurou no .env
##

##Executar a aplicação backend
$ npm start

```

### Informações importantes
 - Esta aplicação é apenas o Backend para a aplicação "frontend-reactjs-cadastro"
