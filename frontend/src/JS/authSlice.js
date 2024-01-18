import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null, // Or set it to the default value appropriate for your app
    // Other authentication-related properties
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUserId(state, action) {
        state.userId = action.payload;
      },
      // Other authentication-related reducers
    },
  });
  
  export const { setUserId } = authSlice.actions;
  export default authSlice.reducer;
  