import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
    <ul>
        {props.todoItems.map(x => <Todo item={x} key={x.id.toString()}/>)}
    </ul>
    );
}

export default TodoList;