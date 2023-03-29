
import  { Router } from 'express'

const routes = new Router();

routes.get('/', (req, res) => { // criando a rota que se inicia com /

  return res.json({ok: true})

})

export default routes // exportando a routes