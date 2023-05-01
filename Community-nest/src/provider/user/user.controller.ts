import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import {
  CreateUserRequestDto,
  DeleteRequestDto,
  UpdateRequestDto,
  UserResponseDto,
} from "../../models/User";
import { LoginRequestDto } from "../../models/User";
import { UserService } from "./user.service";
@Controller("user")
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param("id") id: number) {
    const res = await this.userService.findOne(id);
    return res;
  }

  @Get("email/forgot-password/:email")
  async forgotPsw(@Body() email: string) {
    const res = await this.userService.forgotPassword(email);
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

  @Put("update/:id")
  async updateUser(
    @Param("id") userId: number,
    @Body() updateUserDto: UpdateRequestDto,
  ) {
    const res = await this.userService.updateUser(userId, updateUserDto);
    return res;
  }
  @Delete("delete/:id")
  @ApiParam({ name: "id", type: Number })
  async deleteUser(@Param("id") id: number): Promise<DeleteRequestDto> {
    const res = await this.userService.deleteUser(id);
    return res;
  }
}
