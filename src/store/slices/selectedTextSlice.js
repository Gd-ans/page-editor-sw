import { createSlice } from '@reduxjs/toolkit';

const selectedTextSlice = createSlice({
    name: 'selectedText',
    initialState: {
        selectedTextItem: null,
    },
    reducers: {
        setSelectedTextItem(state, action) {
            state.selectedTextItem = action.payload;
        },
        clearSelectedTextItem(state) {
            state.selectedTextItem = null;
        },
    },
});

export const { setSelectedTextItem, clearSelectedTextItem } = selectedTextSlice.actions;
export default selectedTextSlice.reducer;