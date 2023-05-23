export interface GetCarInputModel {
    brand: string;
    model: string;
    year: number;
    kilometer: number;
}

export interface CarOutputModel {
    id: number;
    userId: number;
    brand: string;
    model: string;
    year: number;
    kilometer: number;
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