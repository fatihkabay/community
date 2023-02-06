export interface GetCarInputModel {
    id: number;
    brand: string;
    model: string;
    year: number;
    kilometer: number;
}

export interface CarOutputModel {
    UserId: number;
    brand: string;
    model: string;
    year: number;
    kilometer: number;
}