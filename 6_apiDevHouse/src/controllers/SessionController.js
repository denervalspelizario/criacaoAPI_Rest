
// metodos são index, show, update, store, destroy
/*
  index: listagem de sessoes
  store: criar uma sessão
  show: Quando queremos listar uma unica sessão
  update: quando queremos alterar alguma sessão
  destroy: quando queremos deletar uma sessão
*/

import User from '../models/User' // importando o user para poder modifica-lo

class SessionController{

  async store(req, res){ // Para fazer um login usa-se o metodo store 
    
    const { email } = req.body; // acessandos somento o email da requisição  

    let user = await User.findOne({ email })

    if(!user){
      user = await User.create({ email }) // criamos um usuário usando este email
    }
    
    
    //let usuario = await User.create({ email }) // criamos um usuário usando este email

    return res.json(user) // retornando o usuário para ver o email
  
  }

}

export default new SessionController();