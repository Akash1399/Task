import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const formData = createSlice({
  name: "data",
  initialState,
  reducers: {
    newData: (state, action) => {
      state.initialState = action.payload;
    },
  },
});

export default formData.reducer;
export const { newData } = formData.actions;
