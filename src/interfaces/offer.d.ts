export interface IOffer {
  name: string;
  description: string;
  project_id: string;
  owner: string;
  price_per_kg: number;
  image_path: string;
  available: 420;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateOffer {
  name: string;
  description: string;
  price_per_kg: number;
  project_id: string;
  image_path: string;
  available: number;
}