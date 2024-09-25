import {createAsyncThunk} from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'register/signup',
  async ({email, password}, thunkAPI) => {
    const {getState, rejectWithValue} = thunkAPI;

    try {
      // Await the fetch call to resolve
      fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
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
