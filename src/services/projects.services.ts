import { ICreateProject } from "@/interfaces/project";
import axiosInstance from "./api.services";

export const projectService = {
  async getProjects() {
    try {
      const response = await axiosInstance.get("/projects");
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  },
  async createProject(project: ICreateProject) {
    try {
      const response = await axiosInstance.post("/projects", project);
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  },
  async getProject(id: string) {
    try {
      const response = await axiosInstance.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  },
  async joinProject(id: string, amount: number) {
    try {
      const response = await axiosInstance.patch(`/projects/${id}/join`, { amount });
      return response;
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  }
};
