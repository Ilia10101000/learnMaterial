import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CashComponent(){
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = total => {
        return {type:'ADD_CASH', payload:total}
    }
    const getCash = total => {
        return {type:'GET_CASH', payload:total}
    }

    return (
        <div>
            <div>{cash}</div>
            <button onClick={() => dispatch(addCash(Number(prompt('How much?'))))}>ADD_CASH</button>
            <button onClick={() => dispatch(getCash(Number(prompt('How much?'))))}>GET_CASH</button>
        </div>
    )
}