import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    language: 'en',
    darkMode: false
};

export const preferenceModel = createSlice({
    name: "preference",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload || !state.darkMode
        },
        switchLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        }
    },
});


export const { setDarkMode, switchLanguage } = preferenceModel.actions;
export default preferenceModel.reducer;
