import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get("http://localhost:3001/user");
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Fetch data for the currently logged-in user
export const fetchCurrentUser = createAsyncThunk("users/fetchCurrentUser", async (_, { getState }) => {
  try {
    const userId = localStorage.getItem("userId");
 // Assuming userId is stored in your auth state
    const response = await axios.get(`http://localhost:3001/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
