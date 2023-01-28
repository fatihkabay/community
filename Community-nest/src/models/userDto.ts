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
  birthday: number;
}


export class CreateUserResponseDto {
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
  birthday: number;
}