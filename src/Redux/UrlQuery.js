import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "Security guard",
    location: "London, UK",
    distance: 30,
    salary_range: [20, 50],
    venue_type: "Retail",
    latitude: 51.5072,
    longitude: 0.1276,
  };


  const UrlQuerySlicer = createSlice({

    name:'urlQuery',
    initialState,

    reducers:{

         addTitle(state,action){
           state.title = action.payload;
         },
         addLocation(state,action){
          state.location = action.payload;
        }

    }
});


export const  {addLocation,addTitle} = UrlQuerySlicer.actions
export default UrlQuerySlicer.reducer
