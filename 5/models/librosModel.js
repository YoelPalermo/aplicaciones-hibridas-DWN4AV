import { libros} from "../data/libros.js"



export const getAllLibros = () => {
    return libros;
}


export const getAllLibrosById = (id) => {
    return autores.find(autor => autor.id === id);
}