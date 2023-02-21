import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/entity/user.entity";
export class CreateCarRequestDto {
    @ApiProperty()
    Brand: string;
  
    @ApiProperty()
    Model: string;
    
    @ApiProperty()
    Year: number;
  
    @ApiProperty()
    Kilometer: number;

    @ApiProperty()
    UserId: User;
  }

export class CarResponseDto {
  @ApiProperty()
    Id: number;
  
    @ApiProperty()
    Brand: string;
  
    @ApiProperty()
    Model: string;
    
    @ApiProperty()
    Year: number;

    @ApiProperty()
    Kilometer: number;
    
    @ApiProperty()
    UserId: User;
  }

