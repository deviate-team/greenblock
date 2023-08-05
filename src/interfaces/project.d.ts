export interface Icontract {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IProject {
  _id: string;
  name: string;
  description: string;
  owner: string;
  contract: contract;
  start_date: string;
  end_date: string;
  image: string;
  max_shares: number;
  balance: number;
  shares_holders: string[]; // Assuming shares_holders is an array of user IDs or names
  createdAt: string;
  updatedAt: string;
}


export interface ICreateProject {
  name: string;
  description: string;
  contract: {
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