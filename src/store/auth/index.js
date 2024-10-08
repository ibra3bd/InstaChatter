import {createSlice} from '@reduxjs/toolkit';

import {login} from './action';

const initialState = {
  loading: true,
  user: null,
  token: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
    },
    // handle loggin by guest
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: builder => {
    // login
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export {login};

export const {logout, setIsLoggedIn} = authSlice.actions;

export default authSlice.reducer;
