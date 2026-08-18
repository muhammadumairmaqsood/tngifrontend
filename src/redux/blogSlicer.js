import { createSlice } from "@reduxjs/toolkit";
const initialState = { search: null };
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearcah: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { setSearcah } = blogSlice.actions;
export default blogSlice.reducer;
