import Cookies from "js-cookie";
import axiosInstance from "./api.services";

export const userService = {
    async login(email: string, password: string) {
        try {
            const response = await axiosInstance.post('/auth/sign-in', {
                email,
                password
            });
            const token = response.headers.authorization;
            Cookies.set('token', token);
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async register(email: string, firstName: string, middleName: string, lastName: string, birthDate: string, username: string, password: string, confirmPassword: string) {
        try {
            const response = await axiosInstance.post('/auth/sign-up', {
                email,
                firstName,
                middleName,
                lastName,
                birthDate,
                username,
                password,
                confirmPassword
            });
            const token = response.headers.authorization;
            Cookies.set('token', token);
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }
}