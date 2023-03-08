import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  jobType: "",
  Retail: "",
  Corporate: "",
  Bar: "",
  Event: "",
  Mobile: "",
};

const LocationAndJobTypeSlicer = createSlice({
  name: "locationAndJobType",
  initialState,

  reducers: {
    addLocation(state, action) {
      state.location = action.payload;
    },
    addJobType(state, action) {
      state.jobType = action.payload;
    },
    setRetail(state, action) {
      state.Retail = action.payload;
    },
    setCorporate(state, action) {
      state.Corporate = action.payload;
    },
    setBar(state, action) {
      state.Bar = action.payload;
    },
    setEvent(state, action) {
      state.Event = action.payload;
    },
    setMobile(state, action) {
      state.Mobile = action.payload;
    },
  },
});

export const { addLocation, addJobType , setBar , setCorporate ,setEvent ,setMobile ,setRetail } = LocationAndJobTypeSlicer.actions;
export default LocationAndJobTypeSlicer.reducer;
