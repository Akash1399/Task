import { configureStore } from "@reduxjs/toolkit";
import formData from "../feature/FORM_DATA";

const store = configureStore({
  reducer: {
    data: formData,
  },
});

export default store;
