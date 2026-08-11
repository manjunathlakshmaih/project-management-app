import axious from 'axios';

const api = axious.create({
    baseURL: "http://localhost:5000/api",
});

export default api;