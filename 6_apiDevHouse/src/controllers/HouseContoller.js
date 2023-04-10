import House from '../models/House' // importando house que contem a tabela HouseSchema tb chamada de House
class HouseContoller{
  async store(req, res){ // lembre-se store é criação de sessão
    
    const { filename } = req.file;  // pegando a imagem 

    const { description, price, location, status } = req.body; // pegando todo os dados do body de HouseSchema

    const { user_id } = req.headers; // pegando o id do usuario


    const house = await House.create({ // criando uma const que recebe um novo regristro no banco de dados
      user: user_id, // user referente ao id do usuario que esta criando a casa
      thumbnail: filename, //imagem recebendo o nome la do req.file
      description,
      price,
      location,
      status
    });


    return res.json(house) // retorna o nossa const com o no registro no database

  }
}


export default new HouseContoller();