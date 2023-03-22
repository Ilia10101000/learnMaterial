import { customeReducer } from "./customReducer";
import { cashReducer } from "./cashReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customeReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))