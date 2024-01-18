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
    const response = await axios.get("http://localhost:3001/omra");
    dispatch(setOffers(response.data));
  } catch (error) {
    console.error("Error fetching Omra offers:", error);
  }
};

export default omraSlice.reducer;

