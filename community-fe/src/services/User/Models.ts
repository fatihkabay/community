export interface RegisterUserInputModel {
    name: string;
    lastname: string;
    email: string;
    password: string; 
    gender: string;
    birthday: number;
}

export interface RegisterUserOutputModel {
    id: number;
    name: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: number;
}