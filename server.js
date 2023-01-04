const { write } = require('fs')
const http = require('http')



const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')

    if (req.url == '/home') {
        res.write("welcome home")
    }
    res.end()
})

server.listen(5000, () => { console.log('server running') })