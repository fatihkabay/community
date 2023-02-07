import axios from "axios";
import { CarOutputModel, GetCarInputModel } from '../Car/Models';

class CarService {
    async get(findCar: GetCarInputModel): Promise<CarOutputModel> {
       const save = await axios.post('http://localhost:3030/car/car/create', findCar)
       return save.data;
    }
}
export default new CarService();