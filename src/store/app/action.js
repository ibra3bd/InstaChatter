import {createAsyncThunk} from '@reduxjs/toolkit';

export const getProduts = createAsyncThunk(
  'app/getProduts',
  async (_, thunkAPI) => {
    const {getState, rejectWithValue} = thunkAPI;

    try {
      // Await the fetch call to resolve
      const response = await fetch('https://fakestoreapi.com/products');

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
