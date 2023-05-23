import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { User } from "../../entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateUserRequestDto,
  LoginRequestDto,
  UserResponseDto,
} from "src/models/User";
import { enCodePassword } from "src/utils/bcrypt";
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  private convertUserOutputModel(input: User): UserResponseDto {
    if (input === null) {
      throw new NotFoundException("User not found");
    }
    const res: UserResponseDto = {
      id: input.id,
      name: input.firstName,
      lastname: input.lastName,
      email: input.email,
      gender: input.gender,
      birthday: input.birthday,
    };
    return res;
  }

  async findOne(id: number): Promise<UserResponseDto> {
    const userDbData = await this.usersRepository.findOneBy({ id });
    return this.convertUserOutputModel(userDbData);
  }

  async create(user: CreateUserRequestDto): Promise<UserResponseDto> {
    const exist = await this.usersRepository.exist({
      where: { email: user.email },
    });
    const password = enCodePassword(user.password);
    const hashingPassword = this.usersRepository.create({ ...user, password });
    console.log("hash", hashingPassword);
    if (exist) {
      throw new ConflictException();
    }
    const requsetUser = {
      firstName: user.name,
      lastName: user.lastname,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
      gender: user.gender,
    };
    const userDbData = await this.usersRepository.save(requsetUser);
    return this.convertUserOutputModel(userDbData);
  }

  async login(user: LoginRequestDto): Promise<UserResponseDto> {
    const userDbData = await this.usersRepository.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    });
    return this.convertUserOutputModel(userDbData);
  }
}
