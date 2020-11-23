const express = require("express")
const nodemailer = require("nodemailer")
const joi = require("joi")

const app = express()


const port = 3000 //configurando puerto

const miniOutlook = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.PUERTO_MAIL,
    auth: {
        user: process.env.CASILLA_MAIL,
        pass: process.env.CLAVE_MAIL
    },
});

//reglas de validación de formulario
const schema = joi.object({         
    nombre : joi.string().max(30).required(),
    correo : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'tech'] } }).required(),
    asunto : joi.number().integer().required(),
    mensaje : joi.string().required()
})

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

    const validate = schema.validate( contacto )

    if( validate.error ){
        res.end(error)
    } else {
        miniOutlook.sendMail({
            from : contacto.correo, // sender address
            to : "estebanisaiastoloza@gmail.com", // list of receivers
            replyTo : contacto.correo,
            subject : `Asunto #${contacto.asunto}`, // Subject line
            text : "Hello world?", // plain text body
            html : `<blockquote>${contacto.mensaje}</blockquote>`, // html body
        });
        
        res.end('Desde acá vamos a enviar un email de contacto...')
    } 
})