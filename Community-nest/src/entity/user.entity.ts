import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Car } from "./car.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Email: string;

  @Column()
  Gender: string;

  @Column()
  Birthday: string;

  @Column()
  Password: string;

  @OneToMany(() => Car, (car) => car.User)
  cars: Car;
}