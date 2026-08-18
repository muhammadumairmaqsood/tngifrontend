import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlicer.js";
import { blogApi } from "./api.js";
const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    blog: blogReducer,
  },
  middleware: (getDefauldMutation) =>
    getDefauldMutation().concat(blogApi.middleware),
});

export default store;
