import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

import topJobReduer from "./TopJobReduer";
import JobReducer from './JobReducer'

const store  = configureStore ({

    reducer: {
        topProducts : topJobReduer,
        JobReducer : JobReducer,
    },
},composeWithDevTools());


export default store;