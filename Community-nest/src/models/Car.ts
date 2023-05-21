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

export class UpdateRequestDto {
  @ApiProperty()
  brand: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  kilometer: number;
}

export class DeleteRequestDto {
  @ApiProperty()
  UserId: number;
}
