import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "../../entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserRequestDto, LoginRequestDto, UserResponseDto } from "src/models/User";
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
    }
    return res;
  }

  async findOne(Id: number): Promise<UserResponseDto> {
    const userDbData = await this.usersRepository.findOneBy({ Id });
    return this.convertUserOutputModel(userDbData);
  }

  async remove(Id: string): Promise<void> {
    await this.usersRepository.delete(Id);
  }

  async create(user: CreateUserRequestDto): Promise<UserResponseDto> {
    const exist = await this.usersRepository.exist({ where: {  Email: user.email } })

    if (exist) {
      throw new ConflictException()
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
