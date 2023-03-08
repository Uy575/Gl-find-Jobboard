import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

import topJobReduer from "./TopJobReduer";
import JobReducer from './JobReducer'
import LocationAndJobTypeReducer from "./LocationAndJobTypeReducer"

const store  = configureStore ({

    reducer: {
        topProducts : topJobReduer,
        JobReducer : JobReducer,
        LocationAndJobTypeReducer : LocationAndJobTypeReducer,
    },
},composeWithDevTools());


export default store;