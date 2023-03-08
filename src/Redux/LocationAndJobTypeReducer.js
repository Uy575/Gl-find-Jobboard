import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location : '',
    jobType : '',
  };

  const LocationAndJobTypeSlicer = createSlice({

    name:'locationAndJobType',
    initialState,

    reducers:{

         addLocation(state,action){
           state.location = action.payload;
         },
         addJobType(state,action){
          state.jobType = action.payload;
        }

    }
});


export const  {addLocation,addJobType} = LocationAndJobTypeSlicer.actions
export default LocationAndJobTypeSlicer.reducer
