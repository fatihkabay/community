import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiParam } from "@nestjs/swagger";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";
import { CarService } from "./car.service";
import { DeleteRequestDto, UpdateRequestDto } from "../../models/Car";
@Controller("car")
@ApiTags("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get(":id")
  async getCar(@Param("id") id: number) {
    const res = await this.carService.findOne(id);
    return res;
  }
  @Post("create")
  async create(@Body() car: CreateCarRequestDto): Promise<CarResponseDto> {
    const res = await this.carService.create(car);
    return res;
  }
  @Put("update/:id")
  async updateUser(
    @Param("id") userId: number,
    @Body() updateUserDto: UpdateRequestDto,
  ) {
    const res = await this.carService.updateCar(userId, updateUserDto);
    return res;
  }
  @Delete("delete/:id")
  @ApiParam({ name: "id", type: Number })
  async deleteUser(@Param("id") id: number): Promise<DeleteRequestDto> {
    const res = await this.carService.deleteCar(id);
    return res;
  }
}
