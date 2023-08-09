import axiosInstance from "./api.services";

export const transactionService = {
    async getTransactions(page: string) {
        try {
            const response = await axiosInstance.get(`/transactions/list?page=${page}&limit=10`);
            return response.data;
        }
        catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async getTransactionById(id: string | undefined) {
        try {
            const response = await axiosInstance.get(`/transactions/${id}`);
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async getAllTransaction() {
        try {
            const response = await axiosInstance.get(`/transactions`);
            return response.data;
        }
        catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }
}