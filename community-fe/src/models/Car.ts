export interface CarModel {
    Id: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
  }

export interface GetCarModel {
    UserId: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}