import axios from "axios";
import { LoginUserInputModel, RegisterUserInputModel, UserOutputModel } from './Models';

class UserService {
    async login(loginUser: LoginUserInputModel): Promise<UserOutputModel> {
       const save = await axios.post('http://localhost:3030/user/login', loginUser)
       return save.data;
    }
    async register(registerUser: RegisterUserInputModel): Promise<UserOutputModel> {
        const create = await axios.post('http://localhost:3030/user/register', registerUser);
        return create.data;
    }
    async update(updateUser: UserOutputModel){
        const updateC = await axios.put('http://localhost:3030/user/update', updateUser);
        return updateC.data;
    }

     async delete(deleteUser: any, id: number) {
         const deleteC = await axios.delete('http://localhost:3030/user/delete', deleteUser)
         return deleteC.data;
    }
}
export default new UserService();