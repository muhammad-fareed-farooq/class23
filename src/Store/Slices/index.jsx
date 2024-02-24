import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const slice = createSlice({
    name: "api",
    initialState: {
        data: [],
    },
    reducers: {
        set_Product_Data: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export const { set_Product_Data } = slice.actions;

export default slice.reducer;
