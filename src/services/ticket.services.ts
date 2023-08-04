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
    async getTicketList(page: string) {
        try {
            const response = await axiosInstance.get(`/tickets/list?page=${page}&limit=3`);
            return response.data;
        }
        catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }
};