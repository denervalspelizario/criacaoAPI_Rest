
import  { Router } from 'express';

import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store) // quando ele acessar a rota sessions vai ser chamado a SessionController com o metodo store

export default routes // exportando a routes