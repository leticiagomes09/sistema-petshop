import { Router } from "express"; 
import * as AnimalController from './../controllers/animalController.js'

const router = Router();

router.get("/", AnimalController.listarTodos);
router.get("/:id", AnimalController.listarUm);
router.post("/", AnimalController.criar);
router.delete("/:id", AnimalController.apagar);
router.put("/:id", AnimalController.atualizar );


export default router;

