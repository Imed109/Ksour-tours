import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
  },
  reducers: {
    setHotels(state, action) {
      state.list = action.payload;
    },
    // You can add more reducers as needed
  },
});

export const { setHotels } = hotelsSlice.actions;

export const fetchHotels = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/hotels");
    dispatch(setHotels(response.data));
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
};

export default hotelsSlice.reducer;
