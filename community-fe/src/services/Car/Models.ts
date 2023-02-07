export interface GetCarInputModel {
    id: number;
    UserId: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}

export interface CarOutputModel {
    UserId: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}