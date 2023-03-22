import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cash,get_cash } from "./store/cashReducer";

export default function CashComponent(){
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)


    return (
        <div className="cash-component-container">
            <div>Balanc: {cash}</div>
            <div className="buttons-container">
                <button className="button-cash" onClick={() => dispatch(add_cash(Number(prompt('How much?'))))}>ADD_CASH</button>
                <button className="button-cash" onClick={() => dispatch(get_cash(Number(prompt('How much?'))))}>GET_CASH</button>
            </div>
        </div>
    )
}