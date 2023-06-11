import { loginDB, registerDB } from "./operations";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: { name: null, email: null, password: null },
  uid: null,
  posts: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerDB.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(registerDB.rejected, () => {})
      .addCase(loginDB.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(loginDB.rejected, () => {});
    // .addCase(logOut.fulfilled, (state) => {
    //   state = initialState;
    // })
    // .addCase(logOut.rejected, () => {})
    // .addCase(addUserPost.fulfilled, (state, { payload }) => {
    //   state.posts = payload.posts;
    // })
    // .addCase(addUserPost.rejected, () => {})
    // .addCase(addCommentToPost.fulfilled, (state, { payload }) => {
    //   state.posts = payload.posts;
    // })
    // .addCase(addCommentToPost.rejected, () => {});
  },
});
