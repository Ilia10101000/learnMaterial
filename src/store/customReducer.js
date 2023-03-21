const initialState = {
    customers: []
}

export const customeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, {id: new Date().getTime(), name: action.payload}]};
        case 'DELETE_CUSTOMER':
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        default:
            return state
    }
}