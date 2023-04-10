import { Schema, model } from 'mongoose';

// models representa tabelas a estrutura que será usada



const HouseSchema = new Schema({ // Schema é a estrutura do usuario quais campos vai ter na tabela HouseSchema
  thumbnail: String, // armazendo o caminho pra acessar essa foto como é o caminho é string
  description: String,// descripção é um texto
  price: Number, // preço em numero
  location: String, // localização um endereço logo um string
  status: Boolean, // status sera false ou true logo um boolean
  user: {
    type: Schema.Types.ObjectId, // essa é a sintaxe para pegar o id do User
    ref: 'User' // referenciando User o usuario
  }
  
}, {
  toJSON:{
    virtuals: true // dizendo para usar esta variável virtual JUNTO com a requisição quando a gente fizer
  }
});

HouseSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`;
})



export default model('House', HouseSchema) //exportando nome do model = User e o Schema do model que é o HouseSchema