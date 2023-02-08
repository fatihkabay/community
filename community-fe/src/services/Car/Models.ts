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