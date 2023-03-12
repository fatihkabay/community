import axios from "axios";
import { CarOutputModel, GetCarInputModel } from '../Car/Models';

class CarService {
    async create(newCar: GetCarInputModel): Promise<CarOutputModel> {
       const createCar = await axios.post('http://localhost:3030/car/create', newCar)
       return createCar.data;
    }
}
export default new CarService();