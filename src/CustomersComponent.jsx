import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import { add_custome, remove_custome } from "./store/customReducer";

export default function CustomersComponent(){
    const [value, setValue] = React.useState('');

    const dispatch = useDispatch();
    const customers = useSelector(state => state.customes.custome);
    const hundlerValueChange = e => {
        setValue(e.target.value)
    }
    const submitValue = e => {
        e.preventDefault();
        dispatch(add_custome({custome:{id: Date.now(), name: value, complete: false}}));
        setValue('')
    }
    const deleteCustomer = id => {
        dispatch(remove_custome({id}))
    }


    return (
        <div className="customers-component-container">
            <form onSubmit={submitValue}>
                <input value={value} onChange={hundlerValueChange}/>
            </form>
            {
                customers.length?
                <div className="customers-list-container">
                    {customers.map(customer => <Customer key={customer.id} text={customer.name} onClick={() => deleteCustomer(customer.id)}/>)}
                </div>
                :null
            }
        </div>
    )
}