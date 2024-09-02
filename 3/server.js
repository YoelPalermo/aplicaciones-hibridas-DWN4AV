// console.log("asd");

const http = require('http');

const PORT = 3000;
const os = require('os');
const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    
    if(url === "/" && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("hello world");
    }else if (url === "/alumno" && method === 'GET'){
        const data={
            nombre: "Yoel Palermo",
            comision: "DWN4AV"
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    
    }else if (url === "/info" && method === 'GET'){
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(os.type());
    
    }
    else if (url === "/static" && method === 'GET'){
        const data=`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
</head>
<body>
    <h1>Bienvenido a Mi Página Web</h1>
    <p>Este es un párrafo de ejemplo en mi página web.</p>
</body>
</html>
`
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    
    }






// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end("hello world");
})

server.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
})