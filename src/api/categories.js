import backendInstance from './backendInstance';
import requestDecorator from './requestDecorator';

export const getLimitedCategories = requestDecorator(async (limit) => {
    const { data } = await backendInstance.get('/categories/all', {
        params: limit ? { limit: limit } : {},
    });
    return data;
});

export const getAllCategories = requestDecorator(async () => {
    const { data } = await backendInstance.get('/categories/all');
    return data;
});

export const getSingleCategory = async (categoryId) => {
    const { data } = await backendInstance.get(`/categories/${categoryId}`);
    return data;
};