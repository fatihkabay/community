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
      id: input.id,
      userId: input.User.id,
      brand: input.brand,
      model: input.model,
      kilometer: input.kilometer,
      year: input.year,
    };
    return res;
  }

  async findOne(id: number): Promise<CarResponseDto> {
    const carDbData = await this.carRepository.findOneBy({ id });
    return this.convertCarOutputModel(carDbData);
  }

  async create(car: CreateCarRequestDto): Promise<CarResponseDto> {
    const user = new User();
    user.id = car.userId;
    const carSaveData = {
      ...car,
      User: user,
    };
    const carAfterSave = await this.carRepository.save(carSaveData);
    const res: CarResponseDto = {
      id: carAfterSave.id,
      userId: carAfterSave.User.id,
      brand: carAfterSave.brand,
      model: carAfterSave.model,
      year: carAfterSave.year,
      kilometer: carAfterSave.kilometer,
    };
    return res;
  }
  async updateCar(
    id: number,
    updateCarDto: UpdateRequestDto,
  ): Promise<CarResponseDto> {
    const update = await this.findOne(id);
    (update.brand = updateCarDto.brand),
      (update.model = updateCarDto.model),
      (update.year = updateCarDto.year),
      (update.kilometer = updateCarDto.kilometer);
    return update;
  }
  async deleteCar(id: number): Promise<DeleteRequestDto> {
    const res = await this.carRepository.delete({ id: id });
    if (res.affected != null && res.affected > 0) {
      console.log("Successfully id is deleted.", { Id: id });
    } else {
      throw new NotFoundException("This is id not found");
    }
    const deletes: DeleteRequestDto = {
      userId: id,
    };
    return deletes;
  }
}
