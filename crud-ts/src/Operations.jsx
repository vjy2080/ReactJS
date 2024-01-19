import axios from "axios";

export const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post('/api/users', user);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await axios.put(`/api/users/${user.id}`, user);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`/api/users/${id}`);
    return response.data;
};
