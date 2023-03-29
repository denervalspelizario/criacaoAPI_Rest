
const { Router } = require('express')

const routes = new Router();

routes.get('/', (req, res) => { // criando a rota que se inicia com /

  return res.json({ok: true})

})

module.exports = routes // exportando a routes