import { ApiProperty } from "@nestjs/swagger";
export class CreateCarRequestDto {
  @ApiProperty()
  brand: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  kilometer: number;

  @ApiProperty()
  userId: number;
}

export class CarResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  kilometer: number;

  @ApiProperty()
  userId: number;
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
  userId: number;
}
