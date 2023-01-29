import axios from "axios";
import { LoginUserInputModel, RegisterUserInputModel, UserOutputModel } from './Models';

class UserService {
    async login(findUser: LoginUserInputModel): Promise<UserOutputModel> {
       const save = await axios.post('http://localhost:3030/user/login', findUser)
       return save.data;
    }
    async register(newUser: RegisterUserInputModel): Promise<UserOutputModel> {
        const res = await axios.post('http://localhost:3030/user/register', newUser);
        return res.data;
    }
}

export default new UserService();