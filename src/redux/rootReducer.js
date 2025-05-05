import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;