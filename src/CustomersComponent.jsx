import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import { add_customer, delete_customer, add_many_customer } from "./store/customReducer";

export default function CustomersComponent(){
    const [value, setValue] = React.useState('');

    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);
    const hundlerValueChange = e => {
        setValue(e.target.value)
    }
    const submitValue = e => {
        e.preventDefault();
        dispatch(add_customer(value));
        setValue('')
    }
    const deleteCustomer = id => {
        dispatch(delete_customer(id))
    }
    const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                    try{
                        dispatch(add_many_customer(data))
                    } catch (e){
                        console.log(e.message)
                    }
            })
            .catch(e => console.log(e.message))

    }

    return (
        <div className="customers-component-container">
            <form onSubmit={submitValue}>
                <input value={value} onChange={hundlerValueChange}/>
            </form>
            <button className="fetch-button" onClick={fetchData}>Receive customers</button>
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