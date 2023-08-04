export interface ITicketData {
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
    seat_limit: number;
    createdAt: string;
    updatedAt: string;
}

export interface ITicketListData {
    totalTickets: number;
    currentPage: number;
    totalPages: number;
    tickets: ITicketData[];
}

export interface ITicket {
    success: boolean;
    message: string;
    data: ITicket[];
}

export interface ILocation {
    latitude: number;
    longitude: number;
}

export interface IProvider {
    _id: string;
    email: string;
    username: string;
    phoneNumber: string;
    imageProfile: string;
}