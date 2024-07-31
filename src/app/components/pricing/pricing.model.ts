export interface Service {
  id: number;
  name: string;
  price: string;
}

export interface ServiceCategory {
  [key: string]: Service[];
}
