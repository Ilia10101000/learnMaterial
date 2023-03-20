import React from "react";

export default function TodoItem({text,completed,onClick}){
    return <div style={{textDecoration:completed?'line-throught': 'node'}} onClick={onClick}>{text}</div>
}