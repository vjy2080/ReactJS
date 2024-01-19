import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const baseUrl = "http://localhost:3004/posts"

export const fetchData = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

export const useHandleApi = () => {
    return useQuery({
        queryKey: ['fetchData'],
        queryFn: fetchData,
    });
};
