import { configureStore } from "@reduxjs/toolkit";
import topJobReduer from "./TopJobReduer";


const store  = configureStore ({

    reducer: {
        topProducts : topJobReduer
    }
});


export default store;