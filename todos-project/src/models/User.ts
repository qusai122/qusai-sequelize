import { Table, Model, Column, DataType ,HasMany} from "sequelize-typescript";
import { Todo } from "./todos";
@Table({
  timestamps: true,
  tableName: "users",
})

export class User extends Model {
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    firstName!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      lastName!: string;
    @Column({
      type: DataType.STRING,
      allowNull: false,
      validate:{ isEmail: true}
    })
    email!: string;
    @HasMany(() => Todo)
    todos!: Todo[];

  }
  