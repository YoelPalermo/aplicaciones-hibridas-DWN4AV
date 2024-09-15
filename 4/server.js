import express from "express"

const app = express();


app.get("/", (req, res) => {
res.send("Yoel Palermo")
})

app.get("/materia", (req, res) => {
    res.send("apps hibridas")
    })
    

    app.get("/profesor", (req, res) => {
        res.send("Camila")
        })


        const peliculas = [
          {id:1, nombre: 'Deadpool'},
            {id:2, nombre: 'asd'},
            {id:3, nombre: 'Home Alone'}
        ];
        
        
        app.get('/peliculas', (req, res) =>{
            res.json(peliculas)
        })




 app.get("/peliculas/:nombre", (req, res) =>{
     const peli = peliculas.find(peli => peli.nombre === req.params.nombre)
    
     if (peli) {
        res.send('a película seleccionada ya está en favoritos');
    } else {
        res.send('404 – película no encontrada');
    }
    
    
 })




 const productos = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
    { id: 4, nombre: "Producto 4", precio: 400 },
    { id: 5, nombre: "Producto 5", precio: 500 },
    { id: 6, nombre: "Producto 6", precio: 600 },
    { id: 7, nombre: "Producto 7", precio: 700 },
    { id: 8, nombre: "Producto 8", precio: 800 },
    { id: 9, nombre: "Producto 9", precio: 900 },
    { id: 10, nombre: "Producto 10", precio: 1000 }
];
        
// app.get('/productos', (req, res) =>{
//     res.json(productos)
// })
app.get('/productos', (req, res) => {
    const min = parseFloat(req.query.min);
    const max = parseFloat(req.query.max);

    let productosFiltrados = productos;

    if (!isNaN(min)) {
        productosFiltrados = productosFiltrados.filter(p => p.precio >= min);
    }

    if (!isNaN(max)) {
        productosFiltrados = productosFiltrados.filter(p => p.precio <= max);
    }

    res.json(productosFiltrados);
});



app.get("/productos/:id", (req, res) =>{
    const prod = productos.find(p => p.id === parseInt(req.params.id));
   
    if (prod) {
       //res.send('datos del producto');
       res.json(prod)
   } else {
       res.status(404).send('404 – ');
   }
   
   
})




// Manejar todas las demás rutas
app.use((req, res) => {
    res.status(404).send("Página no encontrada");
});
const PORT = 3000;
app.listen(PORT, (() => console.log("server running on port http://localhost/3000")))