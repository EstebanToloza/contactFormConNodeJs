const http = require('http')
const fs = require('fs') //módulo para manera manejar el sistema de archivos

const port = 3000

const server = (req, res) => {

    fs.readFile('front/index.html', (error, file) => {

        if(error){
            res.writeHead(404, { "Content-Type" : "text/plain"})
            res.end(`Malio sal...`)
        } else {
            res.writeHead(200, { "Content-Type" : "text/html"})
            res.end(file)
        }
    })
    //res.end("Soy tu Script...")
}

http.createServer( server ).listen(port) //configuro las propiedades del servidor









/* console.log("I am you Script") */