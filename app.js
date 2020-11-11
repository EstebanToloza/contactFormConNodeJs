const http = require('http')

const port = 3000

const server = (req, res) => {
    res.end("Soy tu Script...")
}

http.createServer( server ).listen(port)









/* console.log("I am you Script") */