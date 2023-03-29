

// comando para criar o package.json yarn init -y 
// comando para adicionar o express ao projeto yarn add express
// depois criar pasta src, e adicionar app.js - routes.js - server.js ambos em pasta src

// para instalar o nomemon e o sucrase juntos o comando é yarn add sucrase nodemon -D
// * o sucrase é para ao invez de usar const  ... = require('./)  usar o import igual o react e react-native

// depois ir em package.json e embaixo de license "scripts": { "dev": "nodemon src/server.js"},

// em seguida criar um aruivo chamado nodemon.js e adciona o comando { "execMap": { "js": "node -r sucrase/register" } } senao o sucrase não funciona

// agora pra rodar basta digitar no console yarn dev


// apos criar para rodar o comando é yarn sucrase-node ./src/server.js   - vai ficar piscando então acesse localhost/3333


import express from 'express' // importando o express com sucrase

import  routes from './routes' //importando as routes

// aqui fica a parte dos middle e servidor
class App{

  constructor(){
    this.server = express() // funcao que chama o express

    this.middlewares() // precisa chamas as funcoes middlewares e routes para que elas funcionem assim que carregar o constructor
    this.routes()

  }
  middlewares(){ // metodos dos middleware

    this.server.use(express.json()) // chamando o json no express 
  }

  routes(){ // rotas

    this.server.use(routes) // chamando o routes
  } 

}

export default new App().server; // para poder exportar o sercer de app



