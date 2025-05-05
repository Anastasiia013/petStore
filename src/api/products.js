import backendInstance from "./backendInstance";
import requestDecorator from "./requestDecorator";

export const getAllProducts = requestDecorator(async () => {
    const { data } = await backendInstance.get('/products/all');
    return data;
});

export const getSingleProduct = requestDecorator(async (productId) => {
    const { data } = await backendInstance.get(`/products/${productId}`);
    return data;
});