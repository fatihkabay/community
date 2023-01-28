import { Injectable } from "@nestjs/common";
import { User } from "../../entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserRequestDto } from "src/models/userDto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  findOne(Id: number): Promise<User> {
    return this.usersRepository.findOneBy({ Id });
  }
  async remove(Id: string): Promise<void> {
    await this.usersRepository.delete(Id);
  }
  async create(user: CreateUserRequestDto): Promise<number | User> {
    
    const userDbData = {
      FirstName: user.name,
      LastName: user.lastname,
      Email: user.email,
      Password: user.password,
      Birthday: user.birthday.toString(),
      Gender: user.gender
    }

    const res = await this.usersRepository.save(userDbData);
    return res;
  }
}
