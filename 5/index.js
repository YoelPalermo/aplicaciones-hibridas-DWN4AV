import express from "express"
 import autoresRoutes from "./routes/autoresRoutes.js";
 import librosRoutes from "./routes/librosRoutes.js";


const app = express();
const PORT = 3000;

app.use(express.json());


 app.use('/autores', autoresRoutes)
 app.use('/libros', librosRoutes)






app.listen(PORT, () => console.log (`http://localhost:${PORT}`));