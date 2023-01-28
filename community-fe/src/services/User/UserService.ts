import axios from "axios";
import { RegisterUserInputModel, RegisterUserOutputModel } from './Models';

class UserService {
    async register(user: RegisterUserInputModel): Promise<RegisterUserOutputModel> {
        const res = await axios.post('http://localhost:3030/user/register', user);
        return res.data;
    }
}

export default new UserService();