import {createSlice} from '@reduxjs/toolkit';

import {login} from './action';

const initialState = {
  loading: true,
  id: null,
  email: null,
  username: null,
  password: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.password = null;
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
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.id = action.payload.id;
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
