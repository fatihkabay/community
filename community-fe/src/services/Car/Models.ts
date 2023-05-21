export interface GetCarInputModel {
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}

export interface CarOutputModel {
    Id: number;
    UserId: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
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