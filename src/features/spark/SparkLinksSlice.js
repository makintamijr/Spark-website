import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sparks: ["Home", "Partners", "Support", "About US", "Contact US"],
};

const sparkSlice = createSlice({
  name: "spark",
  initialState,
  reducers: {},
});

export const selectSparks = (state) => state.spark.sparks;

export default sparkSlice.reducer;
