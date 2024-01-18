// omraSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const omraSlice = createSlice({
  name: "omra",
  initialState: {
    offers: [],
  },
  reducers: {
    setOffers(state, action) {
      state.offers = action.payload;
    },
  },
});

export const { setOffers } = omraSlice.actions;

export const fetchOmra = () => async (dispatch) => {
  try {
    // Use your backend API URL to fetch Omra data
    const apiUrl = process.env.REACT_APP_API_URL ;
    const response = await axios.get(`${apiUrl}/omra`);
    dispatch(setOffers(response.data));
  } catch (error) {
    console.error("Error fetching Omra offers:", error);
  }
};

export default omraSlice.reducer;

