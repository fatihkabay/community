import axios from "axios";
import { LoginUserInputModel, RegisterUserInputModel, UserOutputModel } from './Models';

class UserService {
    async login(loginUser: LoginUserInputModel): Promise<UserOutputModel> {
       const res = await axios.post('http://localhost:3030/user/login', loginUser)
       return res.data;
    }
    async register(registerUser: RegisterUserInputModel): Promise<UserOutputModel> {
        const res = await axios.post('http://localhost:3030/user/register', registerUser);
        return res.data;
    }
}
export default new UserService();