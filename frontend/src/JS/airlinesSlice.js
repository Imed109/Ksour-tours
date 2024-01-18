import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const airlinesSlice = createSlice({
  name: "airlines",
  initialState: {
    list: [],
  },
  reducers: {
    setAirlines(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setAirlines } = airlinesSlice.actions;

export const fetchAirlines = () => async (dispatch) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";
    const response = await axios.get(`${apiUrl}/airline`);
    dispatch(setAirlines(response.data));
  } catch (error) {
    console.error("Error fetching airlines:", error);
  }
};

export default airlinesSlice.reducer;

