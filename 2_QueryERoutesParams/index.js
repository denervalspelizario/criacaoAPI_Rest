
// $ yarn init -y 
// comando para criar o package.json


// yarn add express
// comando para instalar o expresse os node_modules

// cria um arquivo js neste caso o index.js 

// os Query params = ?nome=NodeJS  parametros que são passados na frente da rota
// os Route Params = /curso/2  
// os Request Body = { nome: 'Nodejs', tipo: 'Backend' }


const express = require('express')

const server = express(); // adicionar o express a const 

server.listen(3000) // nome da porta 

server.get('/curso/:id', (req, res) => {  // localhost:3000/curso/numerDoId 
                                          // server.get é uma rota que traz informações ao navegador
                                          // req representa os dados do app ja o res representa as infos que retornarão ao front end


  const id = req.params.id


  return res.json({ curso: `Curso ${id}` })

})  

// pra rodar é node nomeDoArquivo.js