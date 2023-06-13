"use client";
import { combineReducers } from "@reduxjs/toolkit";

// reducer import
import customizationReducer from './features/customizationSlice';

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const rootReducer = combineReducers({
  customization: customizationReducer
});

export type RootState = ReturnType<typeof rootReducer>
