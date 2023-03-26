
// $ yarn init -y 
// comando para criar o package.json


// yarn add express
// comando para instalar o expresse os node_modules

// cria um arquivo js neste caso o index.js 

// para instalar o nodemon o comando é yarn add nodemon -D           obs ele é tipo um watch do typescript para atualizar automaticamente 
// depois vá em package.json embaixo de license adicione "scripts": { "dev": "nodemon index.js" } ai pra rodar é só digitar o comando yarn dev

// os Query params = ?nome=NodeJS  parametros que são passados na frente da rota
// os Route Params = /curso/2  
// os Request Body = { nome: 'Nodejs', tipo: 'Backend' }


const cursos = ['Node JS', 'Javascript', 'React-Native' ]


const express = require('express')

const server = express(); // adicionar o express a const 

server.listen(3000) // nome da porta 

server.get('/curso/:index', (req, res) => {  // localhost:3000/curso/numerDoId
                                          // server.get é uma rota que traz informações ao navegador
                                          // req representa os dados do app ja o res representa as infos que retornarão ao front end


  const { index } = req.params


  return res.json(cursos[index])

})  

// pra rodar é node nomeDoArquivo.js