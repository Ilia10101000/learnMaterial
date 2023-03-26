import { createSlice } from "@reduxjs/toolkit";

const customeSlice = createSlice({
    name:'custome',
    initialState:{
        custome:[]
    },
    reducers:{
        add_custome(state, action){
            state.custome.push(action.payload.custome)
        },
        remove_custome(state,action){
            state.custome = state.custome.filter( user => user.id !== action.payload.id)
        }
    }
});

export const {add_custome, remove_custome} = customeSlice.actions;
export const customeReducer = customeSlice.reducer
