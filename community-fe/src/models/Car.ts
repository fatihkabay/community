export interface CarModel {
    id: number;
    userId: number;
    brand: string;
    model: string;
    year: number;
    kilometer: number;
  }

export interface GetCarModel {
    brand: string;
    model: string;
    year: number;
    kilometer: number;
}