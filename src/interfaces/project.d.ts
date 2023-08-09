export interface IContact {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IShareHolder {
  user: string;
  shares: number;
  percentage: number;
  last_payment: string;
}

export interface IProject {
  _id: string;
  name: string;
  description: string;
  owner: string;
  contact: IContact;
  start_date: string;
  end_date: string;
  image: string;
  max_shares: number;
  balance: number;
  shares_holders: IShareHolder[];
  createdAt: string;
  updatedAt: string;
}

export interface ICreateProject {
  name: string;
  description: string;
  contact: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  start_date: string;
  end_date: string;
  image: string;
  max_shares: number;
}

export type IProjectForm = ICreateProject