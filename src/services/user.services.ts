import { IRegisterForm } from "@/interfaces/form";
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
    async register(data: IRegisterForm) {
        try {
            const response = await axiosInstance.post('/auth/sign-up', data);
            const token = response.headers.authorization;
            Cookies.set('token', token);
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async logout() {
        try {
            Cookies.remove('token');
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async getUserProfile() {
        try {
            const response = await axiosInstance.get('/users/profile');
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async addMoney(quantity: number, option: string, id: string | undefined) {
        try {
            const response = await axiosInstance.patch(`/users/${id}/add-money`, {
                quantity,
                option
            });
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
}