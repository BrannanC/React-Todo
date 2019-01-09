import React from 'react';

const Todo = (props) => {
    return (
        <li onClick={(e) => props.completeTask(e, props.item)}>{props.item.task}</li>
    );
}

export default Todo;