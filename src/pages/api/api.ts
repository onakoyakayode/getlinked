import axios, { AxiosResponse } from "axios";

const baseURL = "https://backend.getlinked.ai/";

const api = axios.create({ baseURL });

interface ApiResponse {
  data: any;
}

export const fetchData = async (endpoint: string): Promise<any> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.get(endpoint);

    return response.data;
  } catch (error) {
    throw error;
  }
};
