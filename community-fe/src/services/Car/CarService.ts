import axios from "axios";
import { CarOutputModel, GetCarInputModel } from '../Car/Models';

class CarService {
    async create(newCar: GetCarInputModel): Promise<CarOutputModel> {
       const find = await axios.post('http://localhost:3030/car/car/get', newCar)
       return find.data;
    }
}
export default new CarService();