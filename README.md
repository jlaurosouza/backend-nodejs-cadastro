# Backend in NodeJS + Mysql


## Para rodar este projeto

```bash
$ git clone https://github.com/jluarosouza/backend-nodejs-cadastro
$ cd backend-nodejs-cadastro
$ npx install ou npm install ou yarn install

## DataBase:
    Deve ser criado um bando de dados mysql "nome de sua preferência".

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



## Pré-requisitos
- PHP >= 7.0
- Laravel 8
- composer


## Anotações/Extras
As seções a seguir são anotações sobre o framework e podem não refletir a aplicação em desenvolvimento.


Composer:
```bash
$ curl -sS https://getcomposer.org/installer | php
$ sudo mv composer.phar /usr/local/bin/composer
$ sudo chmod +x /usr/local/bin/composer
$ sudo chmod -R 777 ~/.composer/cache/
$ sudo composer self-update
```

### Instalação Framework
```bash
$ composer global require "laravel/installer"
```

Exportar o path do laravel para Linux reconhecer os comandos (bash):

1. Incluir no final do arquivo ~/.bashrc: export PATH="~/.composer/vendor/bin:$PATH"

2. Depois executar: 
```bash
$ source ~/.bashrc 
```


### Criação de um projeto clean
```bash
$ laravel new nome_projeto
$ cd nome_projeto
$ php artisan serve
```

O último comando serve para testar a instalação, se em localhost:8000 aparecer LARAVEL escrito na página, tudo está ok. Ao utilizar o comando laravel new automaticamente a última versão do Laravel será baixada. Até a escrita deste documento o comando configura o Laravel 5.2. Caso deseja instalar laravel 8 LTS, substitua aquele primeiro comando por:
```bash
$ composer create-project --prefer-dist laravel/laravel nome-do-projeto 8.*
```

### Informações importantes
 - Assim que a aplicação é executada no browser, a página do cálculo é exibida.