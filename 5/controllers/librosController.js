import { getAllLibros } from "../models/librosModel.js";

export const getAllLibros = (req, res) => {
const librosgetAllLibros  = getAllLibros();
res.json(librosgetAllLibros)
}


export const getAllLibrosById = (req, res) => {
    const librosgetAllLibrosId  = parseInt(req.params.id);
    const librosgetAllLibros = getAllLibrosById(librosgetAllLibrosId)

    if(librosgetAllLibros){
        res.json(librosgetAllLibros)
    }else{
        res.status(404).json({error:"autor no encontrado"})
    }
    }