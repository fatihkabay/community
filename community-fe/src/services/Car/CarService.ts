import axios from "axios";
import { CarOutputModel, GetCarInputModel } from '../Car/Models';

class CarService {
    async create(newCar: GetCarInputModel): Promise<CarOutputModel> {
       const createCar = await axios.post('http://localhost:3030/car/create', newCar)
       return createCar.data;
    }

    async update(updateCar: GetCarInputModel): Promise<CarOutputModel> {
        const updateC = await axios.put('http://localhost:3030/car/update', updateCar);
        return updateC.data;
    }

    async deleteCar(deleteCar: any) {
        const deleteC = await axios.delete('http://localhost:3030/car/delete', deleteCar)
        return deleteC.data;
    }
}
export default new CarService();