
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

// CRUD
// CREATE - READ - UPDATE - DELETE


const express = require('express')

const server = express(); // adicionar o express a const 

server.use(express.json()); // comando necessario para fazer a requisicao do tipo POST

server.listen(3000) // nome da porta 


const cursos = ['Node JS', 'Javascript', 'React-Native' ]

// buscar tipo GET
server.get('/cursos', (req, res) => {  // ao acessar http://localhost:3000/cursos o resultado será ['Node JS', 'Javascript', 'React-Native' ]

  return res.json(cursos)

 }),
  

// buscar tipo GET
server.get('/cursos/:index', (req, res) => {  // localhost:3000/curso/numerDoId
                                          // server.get é uma rota que traz informações ao navegador
                                          // req representa os dados do app ja o res representa as infos que retornarão ao front end

  const { index } = req.params

  return res.json(cursos[index])

})  


// adicao de item POST

server.post('/cursos', (req, res) => {  // criando um post (post cria/adiciona   get resgata/busca)

  const { name } = req.body; // name será o nome do objeto adicionado ao cursos
  
  cursos.push(name); // inserindo 'name' em cursos

  return res.json(cursos) // comando para dar o returno a tudo que foi feito 

  // depois va no insomnia duplique um get altere ele para post adicione { "name": "valor que deseja inserir"}  e de send ele vai inserir em cursos 


} )


// atualizando um curso

server.put('/cursos/:index', (req, res) => { // como vai acessar um item especifico precisa do id

  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name

  return res.json(cursos) // comando para dar o return  a tudo que foi feito

  // depois va até o insomnia duplique um get e altere para put adicione na url em cima /numero do id que alterar e embaixo { "name": "valor que deseja inserir no lugar do outro"}

}) 
