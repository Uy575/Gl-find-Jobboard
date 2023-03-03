import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
 
    topProducts : [],
     
}

const topProductsSlicer = createSlice({

         name:'topProducts',
         initialState,

         reducers:{

              addTopProducts(state,action){
                state.topProducts = action.payload;
              }

         }
});

export const  {addTopProducts} = topProductsSlicer.actions
export default topProductsSlicer.reducer

export function addingTopProducts(endpoint){
    return async function topProductsApiThnunk(dispatch,getState){
        const req = await axios.get(endpoint);
        dispatch(addTopProducts(req.data.data))
    }
}
