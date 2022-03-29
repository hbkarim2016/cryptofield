import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'test',
    initialState:{
        navBar:0
    },
    reducers:{
        navFunc:(state) => {
            if( state.navBar === 0 ){
                state.navBar = 1;
            }else{
                state.navBar = 0;
            }
        }
    }
})

export const { navFunc } = headerSlice.actions;
export default headerSlice.reducer;