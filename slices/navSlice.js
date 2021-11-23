import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,//where are you rn?
    destination: null,
    travelTimeInformation: null
}
//PUSH TO DATA LAYER
//create slices
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers:{
        setOrigin:(state, action)=>{//current state
            state.origin = action.payload;
        },
        setDestination:(state, action)=>{//current state
            state.destination = action.payload;
        },
        setTravelTimeInformation:(state, action)=>{//current state
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions; //accessing nav actions

//PULL FROM DATA LAYER
//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
