import axios from "axios";

const backendInstance = axios.create({
    baseURL: 'https://petshopbackend-cnrh.onrender.com'
})

export default backendInstance;