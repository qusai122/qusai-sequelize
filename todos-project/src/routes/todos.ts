import { Router } from "express";
import {
  createToDo, deleteToDos, getToDos, updateToDos,getElementByid,
} from "../controllers/todos";
const router = Router();
router.post("/", createToDo);
router.get("/", getToDos);
router.get("/:id", getElementByid);
router.put("/:id", updateToDos);
router.delete("/:id", deleteToDos);
export default router;