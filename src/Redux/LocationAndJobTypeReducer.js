import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  location: "",
  jobType: "",
  Retail: "Retail",
  Corporate: "Corporate",
  Bar: "Bar",
  Event: "",
  Mobile: "",
  jobFilter:[] ,
  salary:[],
  geoLocation:[],
filterJobs:[],
searchStatus :'',
miles:'',
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
      state.jobFilter = action.payload;
    }, setSalary(state, action) {
      state.salary = action.payload;
    }, setGeoLocation(state, action) {
      state.geoLocation = action.payload;
    }, setSearchStatus(state , action){
      state.searchStatus= action.payload
    }
    , setJobFilter(state , action){
      state.filterJobs= action.payload
    }, setMiles(state , action){
      state.miles= action.payload
    }
  },
});

export const { addLocation, addJobType , setBar , setCorporate ,setEvent ,setMobile ,setRetail ,setSalary , setGeoLocation , setJobFilter , setSearchStatus ,setMiles} = LocationAndJobTypeSlicer.actions;
export default LocationAndJobTypeSlicer.reducer; 




// export function jobFilter(endpoint) {
//   return async function fetchThunk(dispatch, getState) {
//     const request = await axios.post(endpoint,{
//       title : initialState.jobFilter,
//       location :initialState.location,
// venue_type : initialState.jobFilter,
// latitude : initialState.geoLocation.lat,
// longitude : initialState.geoLocation.lng 

// });
//     const response = await request;
//     dispatch(setFilterJobs(response.data.data.data));
//     console.log(response)
//   };

// const request = await axios.post(POST, {
//   title: ,
//   location: `${city}`,
//   // distance :30,
//   // salary_range: [minSalary , maxSalary],
//   venue_type: [`${venue_type}`],
//   latitude: 51.5072,
//   langitude: 0.1276,
// })