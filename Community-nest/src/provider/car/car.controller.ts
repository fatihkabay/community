import { Body, Controller, Get, Param, Post, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCarRequestDto, CarResponseDto, CarUpdateDto } from "src/models/Car";
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

  @Post("car/create")
  async create(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.create(car);
    return res;
  }
  @Put('car/update')
  update(@Param('id') id: number, @Body() updateCatDto: CarUpdateDto) {
    return `This action updates a #${id} cat`;
  }
  @Delete('car/delete')
  remove(@Param('id') id: number) {
    return `This action removes a #${id} cat`;
  }

}
