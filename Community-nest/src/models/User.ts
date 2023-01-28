import { ApiProperty } from '@nestjs/swagger';

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
