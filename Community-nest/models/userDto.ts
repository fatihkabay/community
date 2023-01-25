import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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