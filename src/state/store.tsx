import { configureStore } from "@reduxjs/toolkit";
import perspectivasReducer from "./slices/PerspectivasSlice";

export default configureStore({
  reducer: {
    perspectivas: perspectivasReducer,
  },
});
