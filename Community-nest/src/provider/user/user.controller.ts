import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../../../models/userDto";
import { SaveUserDto } from "models/saveDto";
import { ForgotPasswordDto } from "../../../models/forgotPasswordDto";
import { UserService } from "./user.service";
import { userInfo } from "os";
@Controller("user")
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  getUser(@Param("id") id: string): string {
    return id;
  }
  @Post("/register")
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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
