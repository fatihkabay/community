export interface CarModel {
    id: number;
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