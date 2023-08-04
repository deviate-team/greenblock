export interface ITimePeriod  {
  start: string;
  end: string;
}

export interface IContact {
  name: string;
  email: string;
  tel: string;
} 

export interface IProject {
  project_name: string;
  description: string;
  owner: string;
  time_period: ITimePeriod;
  contract: string;
  contact: IContact
  price_by_unit: number;
  _id: string;
  image: string;
  maximum: number;
  amount: number;
  member: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICreateProject {
  name: string
  description: string
  date: string
  contract: string
  price_by_unit: number
  maximum: number
  image:string
  time_period: ITimePeriod
}