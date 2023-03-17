import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/entity/user.entity";
import { CreateUserRequestDto, UpdateRequestDto, UserResponseDto } from "../../models/User";
import { LoginRequestDto } from "../../models/User";
import { UserService } from "./user.service";

@Controller("user")
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param("id") id: number) {
    const res = await this.userService.findOne(id)
    return res;
  }

  @Post("register")
  async register(@Body() createUserDto: CreateUserRequestDto) {
    const res = await this.userService.create(createUserDto);
    return res;
  }

  @Post("login")
  async login(@Body() LoginUserDto: LoginRequestDto): Promise<UserResponseDto> {
    const res = await this.userService.login(LoginUserDto);
    return res;
  }
  @Put('update')
   async updatePost(userId: number, @Body() updateUserDto: UpdateRequestDto) {
     const res = await this.userService.updatePost(userId, updateUserDto); 
     return res;
  }
  @Delete('delete')
  async remove(@Param('id') id: number): Promise<void> {
    const res = await this.userService.remove(id);
    return res;
  }
}
