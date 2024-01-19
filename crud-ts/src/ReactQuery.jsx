
const baseUrl = "http://localhost:3004/posts"

export const handleApi = async () => {
    const response = await fetch(baseUrl)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}