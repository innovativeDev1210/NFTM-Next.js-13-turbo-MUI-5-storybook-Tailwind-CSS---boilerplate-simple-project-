import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// project imports
// import config from '@/components/config';

type Customization = {
  isOpen: string[],
  defaultId: string,
  fontFamily: string,
  borderRadius: number,
  opened: boolean
};

const initialState = {
    isOpen: [], // for active default menu
    defaultId: 'default',
    fontFamily: 'config.fontFamily',
    borderRadius: 0,
    opened: true
} as Customization;

export const customization = createSlice({
  name: "customization",
  initialState,
  reducers: {
    reset: () => initialState,
    menuOpen: (state, action: PayloadAction<string>) => {
      state.isOpen.push(action.payload);
    },
    setMenu: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setBorderRadius: (state, action: PayloadAction<number>) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
    menuOpen,
    setMenu,
    setFontFamily,
    setBorderRadius,
    reset,
} = customization.actions;
export default customization.reducer;
