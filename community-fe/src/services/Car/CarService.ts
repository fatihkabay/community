import axios from "axios";
import { CarOutputModel, GetCarInputModel } from '../Car/Models';

class CarService {
    async create(newCar: GetCarInputModel): Promise<CarOutputModel> {
       const findC = await axios.post('http://localhost:3030/car/car/create', newCar)
       return findC.data;
    }

    async update(updateCar: GetCarInputModel): Promise<CarOutputModel> {
        const updateC = await axios.put('http://localhost:3030/car/car/update', updateCar);
        return updateC.data;
    }

    async deleteCar(deleteCar: any) {
        const deleteC = await axios.delete('http://localhost:3030/car/car/delete', deleteCar)
        return deleteC.data;
    }
}
export default new CarService();