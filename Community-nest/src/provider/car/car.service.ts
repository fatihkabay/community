import {
  Injectable,
} from "@nestjs/common";
import { Car } from "../../entity/car.entity";
import { DeleteQueryBuilder, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarRequestDto, CarResponseDto, CarUpdateDto, CarDeleteDto } from "src/models/Car";
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async find(Id: number): Promise<CarResponseDto> {
    const findCar = await this.find(Id)  
    return findCar;
  }
  
  async create(car: CreateCarRequestDto): Promise<CarResponseDto> {
    const carAfterSave = await this.carRepository.save(car)
    const res: CarResponseDto = {
      Id: carAfterSave.Id,
      UserId: carAfterSave.UserId,
      Brand: carAfterSave.Brand,
      Model: carAfterSave.Model,
      Year: carAfterSave.Year,
      Kilometer: carAfterSave.Kilometer,
    }
    return res;
  }

   async updatePost(car: CreateCarRequestDto): Promise<CarUpdateDto> {
      return car;
    }

  async deletePost(car: CarResponseDto): Promise<CarDeleteDto> {
    return car;
  }
}
