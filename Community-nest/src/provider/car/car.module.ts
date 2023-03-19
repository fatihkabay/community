import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { CarSchema } from "src/entity/car-schema";

@Module({
  imports: [TypeOrmModule.forFeature([CarSchema])],
  controllers: [CarController],
  providers: [CarService],
  exports: [TypeOrmModule],
})
export class CarModule {}
