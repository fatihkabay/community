import axios from "axios";
import { CarOutputModel, DeleteOutputModel, GetCarInputModel, UpdateOutputModel } from '../Car/Models';

class CarService {
    async create(newCar: GetCarInputModel): Promise<CarOutputModel> {
       const res = await axios.post('http://localhost:3030/car/create', newCar)
       return res.data;
    }
    async update(updateCar: UpdateOutputModel){
        const res = await axios.put('http://localhost:3030/car/update', updateCar);
        return res.data;
    }

     async delete(deleteCar: DeleteOutputModel) {
         const res = await axios.delete('http://localhost:3030/car/delete')
         return res.data;
    }
}
export default new CarService();