import { getAllAutores } from "../models/autoresModel.js";

export const getAllAutores = (req, res) => {
const Autores  = getAllAutores();
res.json(Autores)
}


export const getAllAutoresById = (req, res) => {
    const AutoresId  = parseInt(req.params.id);
    const Autores = getAllAutoresById(AutoresId)

    if(Autores){
        res.json(Autores)
    }else{
        res.status(404).json({error:"autor no encontrado"})
    }
    }