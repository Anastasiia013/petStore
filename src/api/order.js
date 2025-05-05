import backendInstance from "./backendInstance";

export const setOrder = async (order) => {
    const { data } = await backendInstance.post('/order/send', order);
    return data;
}