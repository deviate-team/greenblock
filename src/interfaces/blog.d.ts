import { IUserProfile } from "./user";

export interface IBlog {
    title: string;
    description?: string;
    category: string;
    imageURL: string;
    date: string;
    views: number;
    creator?: IUserProfile
}