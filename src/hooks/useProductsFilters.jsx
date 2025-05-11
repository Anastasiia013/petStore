import { useSearchParams } from 'react-router-dom';

export const useProductsFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = {
        min: searchParams.get('min') || '',
        max: searchParams.get('max') || '',
        discountOnly: searchParams.get('discountOnly') === 'true',
        sortBy: searchParams.get('sortBy') || 'default',
    };

    const updateFilters = (name, value) => {
        const params = new URLSearchParams(searchParams);

        switch (name) {
            case 'min':
            case 'max':
                value ? params.set(name, value) : params.delete(name);
                break;
            case 'discountOnly':
                value ? params.set(name, 'true') : params.delete(name);
                break;
            case 'sortBy':
                value && value !== 'default'
                    ? params.set(name, value)
                    : params.delete(name);
                break;
            default:
                break;
        };

        setSearchParams(params);
    };

    return { filters, updateFilters };
};