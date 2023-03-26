import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
    name: 'cash',
    initialState:{
        cash:0
    },
    reducers: {
        add_cash(state, action){
            state.cash = state.cash + action.payload
        },
        get_cash(state, action){
            state.cash = state.cash - action.payload
        }
    }
})
export const {add_cash, get_cash} = cashSlice.actions
export const cashReducer = cashSlice.reducer