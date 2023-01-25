import { ApiProperty } from '@nestjs/swagger';

export class SaveUserDto {

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string; 

}