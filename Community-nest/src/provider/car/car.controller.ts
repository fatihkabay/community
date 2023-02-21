import { Body, Controller, Get, Param, Post, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";
import { CarService } from "./car.service";
@Controller("car")
@ApiTags("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get(":id")
  async getUser(@Param("id") id: number) {
    const res = await this.carService.findOne(id)
    return res;
  }

  @Post("car/create")
  async create(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.create(car);
    return res;
  }
  // @Put('car/update')
  // async update(@Param('id') car: CreateCarRequestDto, @Body() updateCarDto: CarResponseDto) {
  //   const res = await this.carService.updatePost(car); 
  //   return res;
  // }
  @Delete('car/delete')
  async remove(@Param('id') car: CreateCarRequestDto) {
    const res = await this.carService.deletePost(car);
    return res;
  }
}
