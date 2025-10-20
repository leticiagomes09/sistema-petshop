import { Router } from "express"; 
import * as AnimalController from './../controllers/animalController.js'

const router = Router();

router.get("/", AnimalController.listarTodos);
router.get("/:id", AnimalController.listarUm);



export default router;

