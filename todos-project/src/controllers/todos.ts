import { RequestHandler } from "express";

import { Todos } from "../models/todos";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await Todos.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
};

export const getToDos: RequestHandler = async (req, res, next) => {
  const todos: Todos[]  = await Todos.findAll();
  return res
    .status(200)
    .json(todos);
};

export const updateToDos: RequestHandler = async (req, res, next) => {
const {id} = req.params;
  const result: any[]  = await Todos.update({ ...req.body },{where:{id}});
  if(result[0]){
    return res
    .status(200)
    .json({ ...req.body })
  }
  return res
  .status(400)
  .json("the file wan't updated")
};

export const deleteToDos: RequestHandler = async (req, res, next) => {
  const {id } = req.params;
    const result = await Todos.destroy({where:{id}});
    if(result){
      return res
      .status(200)
      .json("it was deleted")
    }
    return res
    .status(400)
    .json("the file wan't deleted")
  };