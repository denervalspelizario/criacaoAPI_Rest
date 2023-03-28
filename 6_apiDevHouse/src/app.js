

// comando para criar o package.json yarn init -y 
// comando para adicionar o express ao projeto yarn add express
// depois criar pasta src, e adicionar app.js - routes.js - server.js ambos em pasta src


const express = require('express') // importando o express

const routes = require('./routes') //importando as routes

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

module.exports = new App().server; // para poder exportar o sercer de app



