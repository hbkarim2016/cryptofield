import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./reducers/headerSlice";

const Store = configureStore({

    reducer:{
        headerReducer:headerSlice
    }

});
export default Store;