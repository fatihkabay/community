import { EntitySchema } from "typeorm";
import { User } from "./user.entity";

export const UserSchema = new EntitySchema<User>({
  name: "User",
  target: User,
  columns: {
    Id: {
      type: Number,
      primary: true,
      generated: true,
    },
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
    Gender: {
      type: String,
    },
    Birthday: {
      type: Number,
    },
  },
});
