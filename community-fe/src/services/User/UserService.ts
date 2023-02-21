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
}
export default new UserService();