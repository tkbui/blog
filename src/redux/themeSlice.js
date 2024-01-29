import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
