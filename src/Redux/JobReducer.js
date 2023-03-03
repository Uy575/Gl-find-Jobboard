import axios from "axios";




const { createSlice } = require("@reduxjs/toolkit");
// const STATUS = Object.freeze({
//   IDle: "Idle",
// });


const JobSlice = createSlice({
  name: "JobSlice",
  initialState: {
    Jobs: [],
  },
  reducer: {
    setJobs(state, action) {
      state.Jobs = action.payload;
    },
  },
});

export const { setJobs } = JobSlice.actions;
export default JobSlice.reducer;


// //THunk
// export function FetchProducts() {
//   return async function fetchThunk(dispatch, getState) {
//     const request = await axios.get(
//       `http://localhost:400/products?_sort=featured&_order=desc`
//     );
//     const response = await request;
//     dispatch(setProducts(response.data));
//   };
// }
