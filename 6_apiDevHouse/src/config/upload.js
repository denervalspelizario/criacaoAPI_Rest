


// para trabalhar com imagens precisa instalar   yarn add multer biblioteca para envio de imagens
// Este é o arquivos de configuração de envio das imagens

import multer from 'multer'; // importando multer
import path from 'path'; // para trabalhar com caminhos 


export default {
  storage: multer.diskStorage({ // estou dizendo que vou salvar as imagens da requisição aqui no projeto mesmo em algum local


                                        // descre uma pasta( .. ) desce outra pasta ( .. )
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // estou dizendo ao node onde é a raiz do nosso projeto e depois 
                                                                // mostrando o caminho da pasta que será adicionada as imagens que serão enviadas que no caso é uploads

    filename: (req, file, cb) => {  // req = requisição  file = tem acesso ao nome, extensão, ao tamhanho do arquivo
                                    // cb = calback que é chamado após manipular o nome da imagen ou seja esta pronto ele chama o cb (callback)
      
      const ext = path.extname(file.originalname) // pega o nome original da imagem e guarda somente a extensão na const ext    
      
      const name = path.basename(file.originalname, ext) // pegando o nome do aquivo + extensão      
      
      cb(null, `${name}-${Date.now()}${ext} `) // chamando o callback(cb) inical com null caso gere o erro ele ja para 
                                         // depois CONCATENA o nome do arquivo mais a timeStamp gerando um nome unico + extensão

    },                                                            

  })
}