export const selectCart = store => store.cart;

export const selectTotalCartItems = store => {
    return store.cart.reduce((acum, item)=> acum + item.count, 0);
};

export const selectTotalCartPrice = store => {
    return store.cart.reduce((acum, item) => {
        const actualPrice = item.discont_price ?? item.price;
        return acum + item.count * actualPrice;
    }, 0)
};