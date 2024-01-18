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
    const response = await axios.get("http://localhost:3001/airline");
    dispatch(setAirlines(response.data));
  } catch (error) {
    console.error("Error fetching airlines:", error);
  }
};

export default airlinesSlice.reducer;

