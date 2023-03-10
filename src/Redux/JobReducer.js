import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  Jobs: [],
  jobDetail: [],
  similarJob: [],
  paginated: [],
};

const JobSlice = createSlice({
  name: "JobSlice",
  initialState,
  reducers: {
    setJobs(state, action) {
      state.Jobs = action.payload;
    },
    setJobDetail(state, action) {
      state.jobDetail = action.payload;
    },
    setSimilarJob(state, action) {
      state.similarJob = action.payload;
    },
    setStatuses(state, action) {
      state.STATUSES = action.payload;
    },
    setPaginated(state, action) {
      state.paginated = action.payload;
    },
  },
});

export const {
  setJobs,
  setJobDetail,
  setSimilarJob,
  setPaginated,
  setStatuses,
} = JobSlice.actions;
export default JobSlice.reducer;

// Get JOBLIST THunk
export function FetchJobs(endpoint) {
  return async function fetchThunk(dispatch, getState) {
    dispatch(setStatuses(STATUSES.LOADING));
    const request = await axios.post(endpoint);
    const response = await request;
    dispatch(setJobs(response.data.data.data));
    dispatch(setStatuses(STATUSES.IDLE));
  };
}

// Job Detail Thunk
export function JobDetail(endpoint) {
  return async function fetchThunk(dispatch, getState) {
    const request = await axios.get(endpoint);
    const response = await request;
    dispatch(setJobDetail(response.data.data));
  };
}

// Similar Job Thunk
export function SimilarJob(endpoint) {
  return async function fetchThunk(dispatch, getState) {
    const request = await axios.get(endpoint);
    const response = await request;
    dispatch(setSimilarJob(response.data.data));
  };
}
