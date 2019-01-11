import React from 'react';

const Todo = (props) => {
    return (
        <li className={props.item.hidden ? 'hidden' : ''} onClick={(e) => props.completeTask(e, props.item)}>{props.item.task}</li>
    );
}

export default Todo;