const express = require("express")
const app = express()
const nodemailer = require("nodemailer")

const port = 3000 //configurando puerto

const miniOutlook = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.PUERTO_MAIL,
    auth: {
        user: process.env.CASILLA_MAIL,
        pass: process.env.CLAVE_MAIL
    },
});

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
    
    miniOutlook.sendMail({
        from : contacto.correo, // sender address
        to : "estebanisaiastoloza@gmail.com", // list of receivers
        replyTo : contacto.correo,
        subject : `Asunto #${contacto.asunto}`, // Subject line
        text : "Hello world?", // plain text body
        html : `<blockquote>${contacto.mensaje}</blockquote>`, // html body
    });
    
    res.end('Desde acá vamos a enviar un email de contacto...')
})