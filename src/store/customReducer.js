const initialState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customeReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]};
        case DELETE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        default:
            return state
    }
}

export const add_customer = name => ({type:ADD_CUSTOMER, payload: {id: new Date().getTime(), name}})
export const add_many_customer = payload => ({type:ADD_MANY_CUSTOMERS, payload})
export const delete_customer = payload => ({type:DELETE_CUSTOMER, payload})