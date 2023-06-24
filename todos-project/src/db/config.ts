import { Sequelize } from "sequelize-typescript";
import { Todo } from "../models/todos";
import { User } from "../models/User";
const dbConfig = require("../../../config/config.json")["development"];

const connection = new Sequelize({
dialect: dbConfig.dialect,
host: dbConfig.host,
username: dbConfig.username,
password: dbConfig.password,
database: dbConfig.database,
logging: dbConfig.logging,
models: [Todo,User],
});

export default connection;
