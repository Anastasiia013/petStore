const requestDecorator = requestFunction => {
    return async (payload) => {
        try {
            const dataRequest = await requestFunction(payload);
            const data = Array.isArray(dataRequest) ? dataRequest : dataRequest.data;
            return { data };
        }
        catch (error) {
            return { error };
        }
    }
}

export default requestDecorator;