// console.log("asd");

const http = require('http');

const PORT = 3000;

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
    }





// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end("hello world");
})

server.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
})