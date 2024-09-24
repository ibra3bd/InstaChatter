import {createAsyncThunk} from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}, thunkAPI) => {
    const {getState, rejectWithValue} = thunkAPI;

    try {
      // Await the fetch call to resolve
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: email,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: 'include', // Include cookies (e.g., accessToken) in the request
      });

      // Log the raw response
      //   console.log('response', response);

      // Check if the response status is 200 (successful)
      if (response.status === 200) {
        // Parse the response as JSON
        const data = await response.json();

        // You can now work with `data` here, or return it
        return data;
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
