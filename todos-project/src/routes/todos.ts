import { Router } from "express";
import {
  createToDo, deleteToDos, getToDos, updateToDos,getOneToDo,
} from "../controllers/todos";
const router = Router();
router.post("/", createToDo);
router.get("/", getToDos);
router.get("/:id", getOneToDo);
router.put("/:id", updateToDos);
router.delete("/:id", deleteToDos);
export default router;