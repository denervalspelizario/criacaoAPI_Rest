
import  { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import SessionController from './controllers/SessionController';
import HouseContoller from './controllers/HouseContoller';



const routes = new Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store) // quando ele acessar a rota sessions vai ser chamado a SessionController com o metodo store

routes.post('/houses', upload.single('thumbnail') , HouseContoller.store) // quando ele acessar a rota houses vai ser chamado a HouseController com o metodo store(criação de sessão)
                                                                          // como estamos passando apenas 1 imagen é upload.single se fossem varias seria upload.array

export default routes // exportando a routes