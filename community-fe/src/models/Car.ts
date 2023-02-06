export interface CarModel {
    id: number;
    name: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: number;
  }

export interface GetCarModel {
    UserId: number;
    name: string;
    lastname: string; 
    email: string;
    gender: string;
    birthday: number;
}