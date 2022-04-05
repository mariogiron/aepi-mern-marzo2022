// Recibir peticiones y gestionar las respuestas
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('URL', req.url);
    console.log('Método', req.method);
    console.log('Headers', req.headers);
    res.end('Fin de la petición');
});

server.listen(3000);