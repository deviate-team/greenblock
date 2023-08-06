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
};