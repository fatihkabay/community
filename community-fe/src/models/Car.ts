export interface CarModel {
    Id: number;
    UserId: number;
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
  }

export interface GetCarModel {
    Brand: string;
    Model: string;
    Year: number;
    Kilometer: number;
}