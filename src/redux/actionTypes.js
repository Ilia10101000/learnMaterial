export const ADD_TODO = 'ADD_TODO';
export const TOOGLE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const add_todo = text =>({type:ADD_TODO,text});
export const toogle_todo = index => ({type:TOOGLE_TODO, index});
export const setVisibilityFilter = filter => ({type:SET_VISIBILITY_FILTER, filter})