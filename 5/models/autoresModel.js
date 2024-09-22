import { autores} from "../data/autores.js"



export const getAllAutores = () => {
    return autores;
}


export const getAllAutoresById = (id) => {
    return autores.find(autor => autor.id === id);
}