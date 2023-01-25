import axios from 'axios';
import { CreateUserInputModel, CreateUserOutputModel } from '../models/User';
class CommunityService {
    async register(user: CreateUserInputModel): Promise<CreateUserOutputModel> {
        // const res = await axios.get('https://reqres.in/api/users?page=2')
        // return res.data;

        const res = await axios.post('http://localhost:3030/user/register');
        return res.data;
    }
    
}

export default new CommunityService();