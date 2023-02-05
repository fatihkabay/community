import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";
import { CarService } from "./car.service";

@Controller("car")
@ApiTags("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get("get/:id")
  async getUser(@Param("id") id: number): Promise<CarResponseDto> {
    const res = await this.carService.find(id)
    return res;
  }

  @Post("car/create")
  async create(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.create(car);
    return res;
  }
}