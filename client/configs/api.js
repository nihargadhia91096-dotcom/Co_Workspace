import axios from 'axios';

const configuredBaseUrl = import.meta.env.VITE_BASEURL;
const baseURL =
    !configuredBaseUrl || configuredBaseUrl.includes("localhost")
        ? "https://co-workspace-q8va.vercel.app"
        : configuredBaseUrl;

const api = axios.create({ baseURL });

export default api;