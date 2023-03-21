import { customeReducer } from "./customReducer";
import { cashReducer } from "./cashReducer";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customeReducer
})

export const store = createStore(rootReducer, composeWithDevTools())