export interface ITimePeriod  {
  start: string;
  end: string;
}

export interface IContract {
  name: string;
  email: string;
  tel: string;
} 

export interface IProject {
  name: string;
  description: string;
  owner: string;
  time_period: ITimePeriod;
  contract: IContract
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
  price_by_unit: number
  maximum: number
  image:string
  time_period: ITimePeriod
  contract: IContract
}

export type IProjectForm = ICreateProject