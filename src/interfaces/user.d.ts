export interface IUser {
    "success": boolean;
    "message": string;
    "data": IUserProfile;
}

export interface IUserProfile {
    money: number;
    retailCC: number;
    carbonCredit: number;
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    birthDate: string;
    phoneNumber: string;
    imageProfile: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}