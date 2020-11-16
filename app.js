const express = require('express')
const app = express()

const port = 3000 //configurando puerto

app.listen(port) //se configura que escuche el puerto asignado
app.use( express.static('public') ) //indicamos la ubicación del archivo de contacto en la carpeta 'public'
app.use ( express.urlencoded({ extended : true }) ) //de x-www-urlencoded a objetos.


/* 
-Plantilla modelo para "endpoints" de express()
app.TIPO_HTTP("/RUTA", (req, res) => {  

})
 */

app.post("/enviar", (req, res) => {  
    const contacto = req.body
    console.log(contacto)
    res.end('Desde acá enviamos..')
})



