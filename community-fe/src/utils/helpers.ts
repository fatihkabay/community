import { UserModel } from "../services/User/Models";

export function getUser(): UserModel | undefined {
    const user = localStorage.getItem(JSON.stringify('user'));
    console.log(user);
    
    if (user == null) {
        return undefined;
        
    }
    else {
        return JSON.parse(user);
    }
}
  
export function setUser(user: UserModel): void {
    localStorage.setItem('user', JSON.stringify(user));
}

export function clearStorage() {
    localStorage.clear();
}