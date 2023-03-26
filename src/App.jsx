import React from "react";
import { useSelector } from "react-redux";
import CashComponent from "./CashComponent";
import CustomersComponent from "./CustomersComponent";


export default function App(){

  const state = useSelector(state => state);
  console.log(state)
  return (
    <div className="app-container">
      <CashComponent/>
      <CustomersComponent/>
    </div>
  );
}
