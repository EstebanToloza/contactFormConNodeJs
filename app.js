const express = require('express')
const app = express()

const port = 3000 //configurando puerto

app.listen(port) //se configura que escuche el puerto asignado
/* 
-Plantilla modelo para "endpoints" de express()
app.TIPO_HTTP("/RUTA", (req, res) => {  

})
 */
app.get("/contacto", (req, res) => {  
    res.end('Desde acá vamos a contactarnos...')
})