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
    id: number;
    userId: number;
    brand: string;
    model: string;
    year: string;
    kilometer: string;
}

export interface DeleteOutputModel {
    id: number;
}