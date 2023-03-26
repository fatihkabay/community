export interface RegisterUserInputModel {
    name: string;
    lastname: string;
    email: string;
    password: string; 
    gender: string;
    birthday: number;
}

export interface UserOutputModel {
    id: number;
    name: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: number;
}

export interface LoginUserInputModel {
    email: string;
    password: string;
}

export interface UpdateOutputModel {
    name: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: number;
}

export interface DeleteOutputModel {
    id: number;
}