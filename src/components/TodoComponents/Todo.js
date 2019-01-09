import React from 'react';

const Todo = (props) => {
    return (
        <li onClick={props.completeTask}>{props.item.task}</li>
    );
}

export default Todo;