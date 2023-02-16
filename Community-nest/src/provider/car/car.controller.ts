import { Body, Controller, Get, Param, Post, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";
import { CarService } from "./car.service";

@Controller("car")
@ApiTags("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get("get/id")
  async getCar(@Param("UserId") UserId: number) {
    const res = await this.carService.find(UserId)
    return res;
  }

  @Post("car/get")
  async create(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.create(car);
    return res;
  }
   @Put('car/update')
   async update(@Body() UserId: number, Post: CreateCarRequestDto): Promise<CarResponseDto> {
     const res = await this.carService.updatePost(UserId, Post);
     return res;
   }
  @Delete("car/delete")
  async delete(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.deletePost(car);
    return res.raw;
  }

}
