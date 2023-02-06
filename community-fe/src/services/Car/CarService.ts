import axios from "axios";
import { CarOutputModel, GetCarInputModel } from '../Car/Models';

class CarService {
    async get(findUser: GetCarInputModel): Promise<CarOutputModel> {
       const save = await axios.post('http://localhost:3030/car/car/create', findUser)
       return save.data;
    }
}
export default new CarService();