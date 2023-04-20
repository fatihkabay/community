import axios from "axios";
import { ForgotPswInputModel, LoginUserInputModel, RegisterUserInputModel, UserOutputModel } from './Models';

class UserService {
    async login(loginUser: LoginUserInputModel): Promise<UserOutputModel> {
       const res = await axios.post('http://localhost:3030/user/login', loginUser)
       return res.data;
    }
    async register(registerUser: RegisterUserInputModel): Promise<UserOutputModel> {
        const res = await axios.post('http://localhost:3030/user/register', registerUser);
        return res.data;
    }
    async update(updateUser: UserOutputModel){
        const res = await axios.put('http://localhost:3030/user/update', updateUser);
        return res.data;
    }

     async delete(deleteUser: any) {
         const res = await axios.delete('http://localhost:3030/user/delete', deleteUser)
         return res.data;
    }

    async forgotPsw(resetPassword: ForgotPswInputModel) {
        const res = await axios.post('http://localhost:3030/user/forgotPsw', resetPassword)
        return res.data;
    }
}
export default new UserService();