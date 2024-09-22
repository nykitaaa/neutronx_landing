import { createSlice } from "@reduxjs/toolkit";
import ACTIONS from "./actions";

const appSlice = createSlice({
  name: "app",

  initialState: {
    theme: "dark",
    screenWidth: "",
  },

  extraReducers: (builder) => {
    builder.addCase(ACTIONS.setTheme, (state, action) => {
      state.theme = action.payload;
    });

    builder.addCase(ACTIONS.setScreenWidth, (state, action) => {
      state.screenWidth = action.payload;
    });
  },
});

const appReducer = appSlice.reducer;

export default appReducer;
