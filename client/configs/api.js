import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL || "https://co-workspace-q8va.vercel.app",
})

export default api;