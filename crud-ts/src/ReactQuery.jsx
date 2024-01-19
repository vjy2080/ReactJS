import { useQuery } from "@tanstack/react-query";


const baseUrl = "http://localhost:3004/posts"

export const fetchData = async () => {
    const response = await fetch(baseUrl)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

export const useHandleApi = () => {
    return useQuery({
        queryKey: ['fetchData'],
        queryFn: fetchData,
    });
};
