import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript";
import { User } from "./User"
@Table({
  timestamps: false,
  tableName: "todos",
})

export class Todo extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
  @BelongsTo(() => User)
  user!: User;

}
