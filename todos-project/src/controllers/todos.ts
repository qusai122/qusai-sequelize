import { RequestHandler } from "express";

import { Todos } from "../models/todos";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await Todos.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
};

export const getToDos: RequestHandler = async (req, res, next) => {
  const todos: Todos[] = await Todos.findAll();
  return res
    .status(200)
    .json(todos);
};

async function getElementById(id: number) {
  return await Todos.findByPk(id);
}

export const getOneToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const result = await getElementById(parseInt(id))
  return res
    .status(200)
    .json(result);
};

export const updateToDos: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const result: any[] = await Todos.update({ ...req.body }, { where: { id } });
  if (result[0]) {
    return res
      .status(200)
      .json({ ...req.body })
  }
  return res
    .status(400)
    .json("the file wan't updated")
};

export const deleteToDos: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todo = await getElementById(parseInt(id));

  if (!todo)
    return res.status(404).json({ message: "there is no todo with this id" });
  const affectedRows = await Todos.destroy({ where: { id: id } });
  res.status(200).json(affectedRows);

};