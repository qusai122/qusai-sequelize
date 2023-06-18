import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Root123",
  database: "db",
  logging: false,
  models: [Todos],
});

export default connection;
