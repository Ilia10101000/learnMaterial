import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todos, onClickTodo}){
    return (
        <div>
            {todos.map( (todo, index) => <TodoItem key={index} {...todo} onClick={() => onClickTodo(index)}/>)}
        </div>
    )
}