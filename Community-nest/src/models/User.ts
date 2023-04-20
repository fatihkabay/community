import { ApiProperty } from "@nestjs/swagger";

export class CreateUserRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  birthday: string;
}

export class UserResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  birthday: string;
}

export class LoginRequestDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class UpdateRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  birthday: string;
}

export class DeleteRequestDto {
  @ApiProperty()
  UserId: number;
}

export class ForgotPasswordRequestDto {
  @ApiProperty()
  email: string;
}
