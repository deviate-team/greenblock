export interface IUser {
    "success": boolean;
    "message": string;
    "data": IUserProfile;
}

export interface IUserProfile {
    _id: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    username: string;
    birthDate: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}