import { Injectable } from "@nestjs/common";
import { Car } from "../../entity/car.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarRequestDto, CarResponseDto } from "src/models/Car";
import { NotFoundException } from "@nestjs/common";
import { DeleteRequestDto, UpdateRequestDto } from "src/models/Car";
import { User } from "src/entity/user.entity";
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  private findAll() {
    return this.carRepository.find({
      relations: ["user", "user.id"],
    });
  }

  private convertCarOutputModel(input: Car): CarResponseDto {
    if (input === null) {
      throw new NotFoundException("Car not found");
    }

    const res: CarResponseDto = {
      Id: input.Id,
      UserId: input.User.Id,
      Brand: input.Brand,
      Model: input.Model,
      Kilometer: input.Kilometer,
      Year: input.Year,
    };
    return res;
  }

  async findOne(Id: number): Promise<CarResponseDto> {
    const carDbData = await this.carRepository.findOneBy({ Id });
    return this.convertCarOutputModel(carDbData);
  }

  async create(car: CreateCarRequestDto): Promise<CarResponseDto> {
    const user = new User();
    user.Id = car.UserId;
    const carSaveData = {
      ...car,
      User: user,
    };
    const carAfterSave = await this.carRepository.save(carSaveData);
    const res: CarResponseDto = {
      Id: carAfterSave.Id,
      UserId: carAfterSave.User.Id,
      Brand: carAfterSave.Brand,
      Model: carAfterSave.Model,
      Year: carAfterSave.Year,
      Kilometer: carAfterSave.Kilometer,
    };
    return res;
  }
  async updateCar(
    id: number,
    updateCarDto: UpdateRequestDto,
  ): Promise<CarResponseDto> {
    const update = await this.findOne(id);
    (update.Brand = updateCarDto.brand),
      (update.Model = updateCarDto.model),
      (update.Year = updateCarDto.year),
      (update.Kilometer = updateCarDto.kilometer);
    return update;
  }
  async deleteCar(id: number): Promise<DeleteRequestDto> {
    const res = await this.carRepository.delete({ Id: id });
    if (res.affected != null && res.affected > 0) {
      console.log("Successfully id is deleted.", { Id: id });
    } else {
      throw new NotFoundException("This is id not found");
    }
    const deletes: DeleteRequestDto = {
      UserId: id,
    };
    return deletes;
  }
}
