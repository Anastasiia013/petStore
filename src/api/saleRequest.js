import backendInstance from "./backendInstance";

export const getSale = async (sale) => {
    const { data } = await backendInstance.post('/sale/send', sale);
    return data;
}