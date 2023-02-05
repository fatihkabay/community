import { UserModel } from "../models/User";

export function getUser(): UserModel | undefined {
    const user = localStorage.getItem('user');
    console.log('user', user);
    if (user === null) {
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