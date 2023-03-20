import { ADD_TODO, TOOGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "./actionTypes"
import { combineReducers } from "redux";

const todosReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,{text: action.payload, completed: false}];
        case TOOGLE_TODO:
            return state.map( (todo,index) => {
                if(action.index = index){
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            });
        default:
            return state;
            
    }
}

const filterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: 
            return state;
    }
};

const getVisibileTodos = (todos, filter) => {
    switch(filter){
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter( todo => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter( todo => todo.completed);
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos
    }
}
export const todoApp = combineReducers(filterReducer,todosReducer)