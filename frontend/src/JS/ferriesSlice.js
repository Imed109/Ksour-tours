import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ferriesSlice = createSlice({
  name: "ferries",
  initialState: {
    ships: [],
  },
  reducers: {
    setShips(state, action) {
      state.ships = action.payload;
    },
  },
});

export const { setShips } = ferriesSlice.actions;

export const fetchShips = () => async (dispatch) => {
  try {
    // Use your backend API URL to fetch ships
    const response = await axios.get("http://localhost:3001/ferries");
    dispatch(setShips(response.data));
  } catch (error) {
    console.error("Error fetching ships:", error);
  }
};

export default ferriesSlice.reducer;
