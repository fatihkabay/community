import {
  Injectable,
} from "@nestjs/common";
import { Car } from "../../entity/car.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";
import { NotFoundException } from "@nestjs/common";
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  private findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  private convertCarOutputModel(input: Car): CarResponseDto {
    if (input === null) { 
      throw new NotFoundException("Car not found");
    }
    

    const res: CarResponseDto = {
      Id: input.Id,
      UserId: input.User,
      Brand: input.Brand,
      Model: input.Model,
      Kilometer: input.Kilometer,
      Year: input.Year,
    }
    return res;
  }

  async findOne(Id: number): Promise<CarResponseDto> {
    const carDbData = await this.carRepository.findOneBy({ Id });
    return this.convertCarOutputModel(carDbData);
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

  //  async updatePost( car: CreateCarRequestDto): Promise<CarResponseDto>{
  //   const res = await this.carRepository.update(car)
  //   return res;
  //   }

  async deletePost(car: any) {
    return car;
  }
}
