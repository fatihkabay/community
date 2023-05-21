import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Brand: string;

  @Column()
  Model: string;

  @Column()
  Year: number;

  @Column()
  Kilometer: number;

  @ManyToOne(() => User, (user) => user.Cars)
  User: User;
}
