import { ICreateOffer } from "@/interfaces/offer";
import axiosInstance from "./api.services";

export const offerService = {
  async getOffers() {
    try {
      const response = await axiosInstance.get("/offers");
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  },
  async getOffer(id: string) {
    try {
      const response = await axiosInstance.get(`/offers/${id}`);
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  },
  async createOffer(offer: ICreateOffer) {
    try {
      const response = await axiosInstance.post("/offers", offer);
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  }
}