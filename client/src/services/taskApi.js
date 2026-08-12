import api from './app';

export const getTasks = async () => {
    const response = await api.get("/tasks");
    return response;
};

export const createTask = async (taskData) => {
    const response = await api.post("/tasks", taskData);
    return response.data;
}