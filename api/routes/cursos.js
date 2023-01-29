import express from "express"
import { getCursos, addCurso, updateCurso, deleteCurso } from "../controllers/curso.js"

const router = express.Router()

router.get("/", getCursos)

router.post("/", addCurso)

router.put("/:id", updateCurso)

router.delete("/:id", deleteCurso)

export default router