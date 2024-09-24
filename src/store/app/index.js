import {createSlice} from '@reduxjs/toolkit';

import {getProduts} from './action';

const initialState = {
  loading: true,
  baboonj: null,
  products: [null],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBaboonj: (state, action) => {
      state.baboonj = action.payload;
    },
  },
  extraReducers: builder => {
    // getProduts
    builder
      .addCase(getProduts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProduts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProduts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export {getProduts};

export const {setBaboonj} = appSlice.actions;

export default appSlice.reducer;
