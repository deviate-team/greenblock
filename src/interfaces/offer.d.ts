export interface IOfferForm {
  name: string;
  description: string;
  image: string
  date: {
    startDate: string;
    endDate: string;
  }
  price_per_unit: number;
  maximum: number;
  contact: {
    name: string;
    email: string;
    phone: string;
  }
}