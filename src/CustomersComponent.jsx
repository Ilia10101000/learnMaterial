import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";

export default function CustomersComponent(){
    const [value, setValue] = React.useState('');

    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);
    console.log(customers)
    const hundlerValueChange = e => {
        setValue(e.target.value)
    }
    const submitValue = e => {
        e.preventDefault();
        dispatch({type:'ADD_CUSTOMER', payload: value});
        setValue('')
    }
    const deleteCustomer = id => {
        dispatch({type:'DELETE_CUSTOMER', payload:id})
    }

    return (
        <div className="customers-component-container">
            <form onSubmit={submitValue}>
                <input value={value} onChange={hundlerValueChange}/>
            </form>
            <div className="customers-list-container">
                {customers.map(customer => <Customer key={customer.id} text={customer.name} onClick={() => deleteCustomer(customer.id)}/>)}
            </div>
        </div>
    )
}