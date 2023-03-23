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
  DeleteRequestDto,
  LoginRequestDto,
  UpdateRequestDto,
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
      id: input.Id,
      name: input.FirstName,
      lastname: input.LastName,
      email: input.Email,
      gender: input.Gender,
      birthday: input.Birthday,
    };
    return res;
  }

  async findOne(Id: number): Promise<UserResponseDto> {
    const userDbData = await this.usersRepository.findOneBy({ Id });
    return this.convertUserOutputModel(userDbData);
  }
  async updateUser(
    id: number,
    updateUserDto: UpdateRequestDto,
  ): Promise<UserResponseDto> {
    const update = await this.findOne(id);
    (update.name = updateUserDto.name),
      (update.lastname = updateUserDto.lastname),
      (update.birthday = updateUserDto.birthday),
      (update.email = updateUserDto.email),
      (update.gender = updateUserDto.gender);
    return update;
  }
  async removeUser(id: number): Promise<DeleteRequestDto> {
    const res = await this.usersRepository.delete({ Id: id });
    if (res.affected != null && res.affected > 0) {
      console.log("Successfully id is deleted.", { Id: id });
    } else {
      throw new NotFoundException("This is id not found");
    }
    const deletes: DeleteRequestDto = {
      UserId: id,
    };
    return deletes;
  }

  async create(user: CreateUserRequestDto): Promise<UserResponseDto> {
    const exist = await this.usersRepository.exist({
      where: { Email: user.email },
    });
    const Password = enCodePassword(user.password);
    const hashingPassword = this.usersRepository.create({ ...user, Password });
    console.log("hash", hashingPassword);
    if (exist) {
      throw new ConflictException();
    }
    const requsetUser = {
      FirstName: user.name,
      LastName: user.lastname,
      Email: user.email,
      Password: user.password,
      Birthday: user.birthday,
      Gender: user.gender,
    };
    const userDbData = await this.usersRepository.save(requsetUser);
    return this.convertUserOutputModel(userDbData);
  }

  async login(user: LoginRequestDto): Promise<UserResponseDto> {
    const userDbData = await this.usersRepository.findOne({
      where: {
        Email: user.email,
        Password: user.password,
      },
    });
    return this.convertUserOutputModel(userDbData);
  }
}
