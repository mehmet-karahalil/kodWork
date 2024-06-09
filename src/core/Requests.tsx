import Axios from "axios";
interface ApiResponse {
    results: Job[];
  }
  
  interface Job {
    id: number;
    [key: string]: any;
  }

export const getJobs = async (url: string) => {
    const response = await Axios.get<ApiResponse>(url);
    return response.data;
};



export default {
    getJobs,
};

