export interface CreateUserInputModel {
    name: string;
    lastname: string;
    email: string;
    password: string;
    gender: string;
    birthday: number;
}

export interface CreateUserOutputModel {
    id: number;
    name: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: number;
}