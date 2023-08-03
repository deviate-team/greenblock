export interface IBuyOffset {
  project_name: string;
  description: string;
  owner: string;
  time_period: {
    start: string;
    end: string;
  };
  contact: {
    name: string;
    email: string;
    tel: string;
  };
  price_by_unit: number;
  _id: string;
  image: string;
  maximum: number;
}
