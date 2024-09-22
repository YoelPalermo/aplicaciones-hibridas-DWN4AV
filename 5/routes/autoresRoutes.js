import express from "express"
import { getAllAutores, getAllAutoresById } from "../models/autoresModel";

const router = express.Router();

router.get('/', getAllAutores)
router.get('/:id', getAllAutoresById)
router.post('/')
router.put('/:id')
router.delete('/:id')

export default router();