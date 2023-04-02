import { Schema, model } from 'mongoose';

// models representa tabelas 



const UserSchema = new Schema({ // Schema é a esttutura do usuario quais campos vai ter na tabela usuário

  email: String, // neste caso precisa somente do email para fazer o cadastro mas poderia ter nome :String ou talves idade:Number

});

export default model('User', UserSchema) //exportando nome do model = User e o Schema do model que é o UserSchema