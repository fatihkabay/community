import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserRequestDto } from "../../models/userDto";
import { UserService } from "./user.service";

@Controller("user")
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  getUser(@Param("id") id: string): string {
    return id;
  }
  @Post("register")
  async create(@Body() createUserDto: CreateUserRequestDto) {
    const res = await this.userService.create(createUserDto);
    return res;
  }
  // @Post("/login")
  // async save(@Body() saveUserDto: SaveUserDto) {
  //   this.userService.save(saveUserDto);
  // }
  // @Post("/forgot-password")
  // async forgot(@Body() forgotPasswordDto: ForgotPasswordDto) {
  //   this.userService.forgotPassword(forgotPasswordDto);
  // }
}
