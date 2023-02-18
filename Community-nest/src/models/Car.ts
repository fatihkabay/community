import { ApiProperty } from "@nestjs/swagger";
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
    UserId: number;
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
    UserId: number;
  }

  export class CarUpdateDto {
    @ApiProperty()
    Brand: string;
  
    @ApiProperty()
    Model: string;
    
    @ApiProperty()
    Year: number;

    @ApiProperty()
    Kilometer: number;
  }

  export class CarDeleteDto {
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
    UserId: number;
  }
