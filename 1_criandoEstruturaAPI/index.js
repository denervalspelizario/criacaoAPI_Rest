
// $ yarn init -y 
// comando para criar o package.json


// yarn add express
// comando para instalar o expresse os node_modules

// cria um arquivo js neste caso o index.js 



const express = require('express')

const server = express(); // adicionar o express a const 

server.listen(3000) // nome da porta 

server.get('/curso', (req, res) => {  // server.get é uma rota que traz informações ao navegador
                                      // req representa os dados do app ja o res representa as infos que retornarão ao front end


  


  return res.json({ curso: 'Node JS' })

})  // localhost:3000/curso

// pra rodar é node nomeDoArquivo.js
