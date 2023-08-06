import { ITicketData } from "./ticket";
import { IUserProfile } from "./user";

export interface ITransaction {
    success: boolean;
    message: string;
    data: ITransactionData;
}

export interface ITransactionData {
    totalTransactions: number;
    currentPage: number;
    totalPages: number;
    transactions: ITransactionItem[];
}

export interface ITransactionItem {
    _id: string;
    type: string;
    user: IUserProfile;
    description: string;
    status: string;
    ticket: ITicketData;
    quantity: number;
    total_price: number;
    createdAt: string;
    updatedAt: string;
}