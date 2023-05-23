import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Car } from "./car.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  birthday: string;

  @Column()
  password: string;

  @OneToMany(() => Car, (car) => car.User)
  Cars: Car[];
}
