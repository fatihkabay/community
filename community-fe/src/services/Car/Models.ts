export interface GetCarInputModel {
    UserId: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}

export interface CarOutputModel {
    Id: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}