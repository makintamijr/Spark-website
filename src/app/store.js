import { configureStore } from "@reduxjs/toolkit";
import sparkReducer from "../features/spark/SparkLinksSlice";

export const store = configureStore({
  reducer: {
    spark: sparkReducer,
  },
});
