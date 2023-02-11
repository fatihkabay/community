import { CarModel } from "../models/Car";
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

export function getCar(): CarModel | undefined {
    const car = localStorage.getItem('car');
    console.log('car', car)
    if (car === null) {
        return undefined;
    }
    else {
        return JSON.parse(car);
    }
}

export function setCar(car: CarModel): void {
    localStorage.setItem('car', JSON.stringify(car));
}

export function clearStorage() {
    localStorage.clear();
}

export function deleteStorage() {
    localStorage.removeItem('car');
}