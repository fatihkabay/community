import { EntitySchema } from "typeorm";
import { Car } from "./car.entity";
import { User } from "./user.entity";

export const CarSchema = new EntitySchema<Car>({
    name: "Car",
    target: Car,
    columns: {
      Id: {
        type: Number,
        primary: true,
        generated: true,
      },
      Brand: {
        type: String,
      },
      Model: {
        type: String,
      },
      Year: {
        type: String,
      },
      Kilometer: {
        type: String,
      },
    },
  });
  
  