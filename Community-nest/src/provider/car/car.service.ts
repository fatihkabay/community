import {
  Injectable,
} from "@nestjs/common";
import { Car } from "../../entity/car.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async find(UserId: number): Promise<CarResponseDto> {
    const findCar = await this.find(UserId)  
    return findCar;
  }
  
  async create(car: CreateCarRequestDto): Promise<CarResponseDto> {
    const carAfterSave = await this.carRepository.save(car)
    const res: CarResponseDto = {
      Id: carAfterSave.Id,
      Brand: carAfterSave.Brand,
      Model: carAfterSave.Model,
      Year: carAfterSave.Year,
      Kilometer: carAfterSave.Kilometer,
      UserId: carAfterSave.UserId
      
    }

    return res;
  }
}
