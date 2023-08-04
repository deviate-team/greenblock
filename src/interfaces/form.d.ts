export interface IRegisterForm {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}