import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal(state, action) {
            state.isOpen = action.payload;
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;