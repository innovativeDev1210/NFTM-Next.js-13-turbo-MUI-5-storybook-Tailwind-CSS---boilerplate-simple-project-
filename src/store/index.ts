"use client";
import { rootReducer } from "./reducer"
import customizationReducer from "./features/customizationSlice";
import { configureStore } from "@reduxjs/toolkit";
// import slice files
export const store = configureStore({
  reducer: {customizationReducer},
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
