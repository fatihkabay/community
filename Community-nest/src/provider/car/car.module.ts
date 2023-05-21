import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { Car } from "src/entity/car.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
