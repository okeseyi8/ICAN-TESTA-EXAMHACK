import Axios from "axios"


const apiUrl = import.meta.env.VITE_API_URL
const api = Axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("icanAuth");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api