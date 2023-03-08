import { Body, Controller, Get, Param, Post, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCarRequestDto, CarResponseDto, updateCarDto } from "src/models/Car";
import { CarService } from "./car.service";
@Controller("car")
@ApiTags("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get(":id")
  async getCar(@Param("id") id: number) {
    const res = await this.carService.findOne(id)
    return res;
  }
  @Post("create")
  async create(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.create(car);
    return res;
  }
   @Put('update')
   async update(car: CreateCarRequestDto, @Body() newCar: CarResponseDto) {
     const res = await this.carService.updatePost(car, newCar); 
     return res;
  }
  @Delete('delete')
  async remove(@Param('id') car: CarResponseDto): Promise<void> {
    const res = await this.carService.remove(car);
    return res; 
  }
}
