import React from "react";

export default function Customer({text, onClick}){
    return (
        <div className="customer-container">
            <div>{text}</div>
            <div className="delete_icon" onClick={onClick}></div>
        </div>
    )
}