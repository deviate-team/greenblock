export interface ITicket {
    _id: string;
    title: string;
    description: string;
    depart_location: ILocation
    arrive_location: ILocation;
    date: string;
    depart_time: string;
    arrive_time: string;
    standard_price: number;
    business_price: number;
    provider: IProvider;
    createdAt: string;
    updatedAt: string;
}

export interface ILocation {
    latitude: number;
    longitude: number;
}

export interface IProvider {
    name: string;
    logo: string;
}