import axiosInstance from "./api.services";

export const ticketService = {
    async getTickets() {
        try {
            const response = await axiosInstance.get('/tickets');
            return response.data;
        }
        catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    async getTicketList(page: number) {
        try {
            const response = await axiosInstance.get(`/tickets/list?$page=${page}&limit=5`);
            return response.data;
        }
        catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }
};